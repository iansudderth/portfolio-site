const express = require("express");
const next = require("next");
const compression = require("compression");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dir: ".", dev });
const handle = app.getRequestHandler();
const mongoose = require("mongoose");
const TodoState = require("./schema/todoListSchema.js");
const _ = require("lodash");
const seedDB = require("./schema/seed.js");
const generateNewTodoList = require("./schema/generateNewTodoList.js");
const bodyParser = require("body-parser");

var dburl = process.env.DATABASEURL || "mongodb://localhost/portfolio";
mongoose.connect(dburl);

if (_.includes(process.argv, "--seed")) {
  seedDB();
}

app.prepare().then(() => {
  const server = express();
  server.use("/static", express.static("./static"));
  server.use(bodyParser.json());
  server.use(compression());

  server.get("/", (req, res) => {
    console.log("homepage");
    app.render(req, res, "/index", req.query);
  });

  server.get("/todo/:id", (req, res) => {
    TodoState.findOne({ _id: req.params.id }, (error, initialState) => {
      if (error) {
        console.log("State not found, making new state and redirecting");
        TodoState.create(generateNewTodoList(), (error, newState) => {
          if (error) {
            console.log(error);
            res.send("Something Went Wrong");
          } else {
            console.log("new state made at ", newState._id);
            res.redirect(`/todo/${newState._id}`);
          }
        });
      } else {
        console.log("todo list found");
        const mergedQuery = Object.assign({}, req.query, { initialState });
        return app.render(req, res, "/todo", mergedQuery);
      }
    });
  });

  server.put("/todo/:id", (req, res) => {
    console.log(req.params);
    var id = req.params.id;
    var newState = req.body.newState;
    console.log("id", id);
    // console.log("new state", newState)

    TodoState.findByIdAndUpdate(id, newState, (error, updatedState) => {
      if (error) {
        console.log(error);
        res.send("we got it but something went wrong");
      } else {
        res.send("we got it and it was updated!!!");
        // console.log("updatedState",updatedState)
      }
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
