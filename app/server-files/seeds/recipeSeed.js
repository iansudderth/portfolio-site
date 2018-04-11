const mongoose = require('mongoose');
const Recipe = require('../schema/recipe/Recipe');
const RecipeAuth = require('../schema/recipe/RecipeAuth');
const _ = require('lodash');
const bluebird = require('bluebird');

// mongoose.Promise = bluebird;
// const dburl = process.env.DATABASEURL || 'mongodb://localhost/recipe';
// mongoose.connect(dburl);
// const db = mongoose.connection;

const potatoSalad = {
  password: false,
  title: 'Warm Potato and Pistachio Pesto Salad',
  serving: { amount: 8, unit: 'servings' },
  recipe: [
    {
      key: _.random(0, 65536),
      ingredients: [
        {
          name: 'Italian basil leaves',
          amount: 80,
          unit: 'g',
          key: _.random(0, 65536),
        },
        {
          name: 'Cilantro leaves',
          amount: 70,
          unit: 'g',
          key: _.random(0, 65536),
        },
        { name: 'Chives', amount: 70, unit: 'g', key: _.random(0, 65536) },
        {
          name: 'Scallion greens',
          amount: 70,
          unit: 'g',
          key: _.random(0, 65536),
        },
      ],
      procedure: [
        {
          content:
            'Blanch in boiling water individually until tender, about 2 min each.',

          key: _.random(0, 65536),
        },
        {
          content: 'Cool in ice water and squeeze to remove excess moisture.',
          key: _.random(0, 65536),
        },
        {
          content: 'Reserve refrigerated.',
          key: _.random(0, 65536),
        },
      ],
    },
    {
      key: _.random(0, 65536),
      ingredients: [
        {
          name: 'Garlic cloves, peeled',
          amount: 16,
          unit: 'g',
          key: _.random(0, 65536),
        },
      ],
      procedure: [
        {
          content: 'Blanch in boiling water for 2 min. Drain and reserve.',
          key: _.random(0, 65536),
        },
      ],
    },
    {
      key: _.random(0, 65536),
      ingredients: [
        {
          name: 'Extra virgin olive oil',
          amount: 190,
          unit: 'g',
          key: _.random(0, 65536),
        },
        {
          name: 'Parmiggiano Reggiano, finely grated',
          amount: 100,
          unit: 'g',
          key: _.random(0, 65536),
        },
        {
          name: 'Pistachios, peeled and toasted',
          amount: 100,
          unit: 'g',
          key: _.random(0, 65536),
        },
        {
          name: 'Roasted-pistachio oil',
          amount: 40,
          unit: 'g',
          key: _.random(0, 65536),
        },
        {
          name: 'Spinach puree (see page 2·424)',
          amount: 30,
          unit: 'g',
          key: _.random(0, 65536),
        },
        { name: 'Lemon juice', amount: 20, unit: 'g', key: _.random(0, 65536) },
      ],
      procedure: [
        {
          content:
            'Puree together with cooked herbs and blanched garlic until smooth.',
          key: _.random(0, 65536),
        },
      ],
    },
    {
      key: _.random(0, 65536),
      ingredients: [
        { name: 'Salt', amount: 0, unit: 'to taste', key: _.random(0, 65536) },
        {
          name:
            'Microcrystalline cellulose (AviceI CG 200, FMC BioPolymer brand)',
          amount: 7.8,
          unit: 'g',
          key: _.random(0, 65536),
        },
        {
          name: 'Xanthan gum (Keltrol T,CP Kelco brand)',
          amount: 1.56,
          unit: 'g',
          key: _.random(0, 65536),
        },
      ],
      procedure: [
        { content: 'Season Pesto with Salt', key: _.random(0, 65536) },
        {
          content: 'Blend emulsifiers into pistachio pesto to fully hydrate.',
          key: _.random(0, 65536),
        },
        {
          content: 'Vacuum seal, and refrigerate for at least 1h to macerate.',
          key: _.random(0, 65536),
        },
      ],
    },
    {
      key: _.random(0, 65536),
      ingredients: [
        {
          name: 'Fingerling potatoes, skin on',
          amount: 800,
          unit: 'g',
          key: _.random(0, 65536),
        },
        { name: 'Olive oil', amount: 80, unit: 'g', key: _.random(0, 65536) },
      ],
      procedure: [
        {
          content:
            'Vacuum seal potatoes and cook sous vide in 90°C / 194°F ath until tender, about 45 min.',
          key: _.random(0, 65536),
        },
        {
          content: 'Remove from bag while still warm.',
          key: _.random(0, 65536),
        },
        { content: 'Slice thinly.', key: _.random(0, 65536) },
        { content: 'Toss with pesto as desired.', key: _.random(0, 65536) },
      ],
    },
  ],
};

const tamales = {
  password: false,
  title: 'Pressure Cooked Tamales',
  serving: { amount: 10, unit: 'servings' },
  recipe: [
    {
      key: _.random(0, 65536),
      ingredients: [
        {
          name: 'Dried corn husks',
          amount: 20,
          unit: ' Husks',
          key: _.random(0, 65536),
        },
      ],
      procedure: [
        {
          content:
            'Soak in warm water until the husks are pliable, at least 30 minutes. Shake them dry,',
          key: _.random(0, 65536),
        },
      ],
    },
    {
      key: _.random(0, 65536),
      ingredients: [
        {
          name: 'Lard or unsalted butter',
          amount: 225,
          unit: 'g',
          key: _.random(0, 65536),
        },
      ],
      procedure: [
        {
          content:
            'Whip in a stand mixer, scraping the sides often, until light and airy, about 5 minutes.',
          key: _.random(0, 65536),
        },
      ],
    },
    {
      key: _.random(0, 65536),
      ingredients: [
        {
          name: 'Masa harina (Maseca brand)',
          amount: 450,
          unit: 'g',
          key: _.random(0, 65536),
        },
        {
          name: 'Toasted Corn Stock or water, lukewarm see page 90',
          amount: 300,
          unit: 'g',
          key: _.random(0, 65536),
        },
      ],
      procedure: [
        {
          content:
            'Gradually add to the mixer, alternating between the two ingredients, until fully blended to make masa batter.',
          key: _.random(0, 65536),
        },
      ],
    },
    {
      key: _.random(0, 65536),
      ingredients: [
        {
          name: 'Fresh corn kernels, cut from the cob',
          amount: 525,
          unit: 'g',
          key: _.random(0, 65536),
        },
        {
          name: 'Unsalted butter, melted',
          amount: 22,
          unit: 'g',
          key: _.random(0, 65536),
        },
        {
          name: 'Sour cream, creme fraiche, or crema',
          amount: 22,
          unit: 'g',
          key: _.random(0, 65536),
        },
        { name: 'Sugar', amount: 15, unit: 'g', key: _.random(0, 65536) },
        { name: 'Salt', amount: 14, unit: 'g', key: _.random(0, 65536) },
      ],
      procedure: [
        {
          content: 'Combine in a food processor, and blend to make com puree',
          key: _.random(0, 65536),
        },
        {
          content:
            'Fold the corn puree and masa batter together to make the tamale batter',
          key: _.random(0, 65536),
        },
        {
          content:
            'Place a dollop of tamale batter, about 70 g / 5 Tbsp, in each corn husk, and wrap firmly.',
          key: _.random(0, 65536),
        },
        {
          content:
            'Arrange the tamales, seam-side down, on a metal rack or trivet in a pressure cooker, and then add 2.5 cm / I in of water.',
          key: _.random(0, 65536),
        },
        {
          content:
            'Pressure-cook at a gauge pressure of 1 bar / 15psi for 20 minutes.  Start timing when full pressure is reached.',
          key: _.random(0, 65536),
        },
        { content: 'Depressurize the cooker.', key: _.random(0, 65536) },
        {
          content: 'Allow the tamales to cool until set, about 2 hours.',
          key: _.random(0, 65536),
        },
        {
          content:
            'Steam over boiling water for 15-20 minutes to reheat, and serve hot.',
          key: _.random(0, 65536),
        },
      ],
    },
  ],
};

const tunaConfit = {
  password: false,
  title: 'Tuna Confit',
  serving: { amount: 6, unit: 'servings' },
  recipe: [
    {
      key: _.random(0, 65536),
      ingredients: [
        { name: 'Water', amount: 600, unit: 'g', key: _.random(0, 65536) },
        { name: 'Salt', amount: 24, unit: 'g', key: _.random(0, 65536) },
        { name: 'Sugar', amount: 12, unit: 'g', key: _.random(0, 65536) },
      ],
      procedure: [
        {
          content: 'Combine, and stir until dissolved to make a brine.',
          key: _.random(0, 65536),
        },
      ],
    },
    {
      key: _.random(0, 65536),
      ingredients: [
        {
          name: 'Ahi tuna, cut into 2.5 cm/1 in pieces',
          amount: 500,
          unit: 'g',
          key: _.random(0, 65536),
        },
      ],
      procedure: [
        {
          content: 'Place in the brine, and refrigerate for 24 hours.',
          key: _.random(0, 65536),
        },
      ],
    },
    {
      key: _.random(0, 65536),
      ingredients: [
        { name: 'Olive oil', amount: 500, unit: 'g', key: _.random(0, 65536) },
        { name: 'Salt', amount: 0, unit: 'to taste', key: _.random(0, 65536) },
      ],
      procedure: [
        {
          content: 'Preheat a water bath to 51°C/124°F.',
          key: _.random(0, 65536),
        },
        {
          content:
            'Drain the tuna, rinse it in cold water, and then pat it dry.',
          key: _.random(0, 65536),
        },
        {
          content:
            'Divide the tuna evenly into three 500mL/16oz canning jars, and add enough oil to cover the fish by half an inch. Seal the jars tightly.',
          key: _.random(0, 65536),
        },
        {
          content:
            'Place the sealed jars in the water bath, and cook sous vide to a core temperature of 50°C / 122°F, about1 hour.',
          key: _.random(0, 65536),
        },
        {
          content:
            'Serve the tuna warm, or store it, refrigerated, in the canning jars.',
          key: _.random(0, 65536),
        },
      ],
    },
  ],
};

const recipeArray = [potatoSalad, tamales, tunaConfit];

function seedDB() {
  Recipe.remove({})
    .then(response => {
      console.log('Recipes dropped successfully');
      return Recipe.create(recipeArray);
    })
    .then(response => {
      console.log('Recipe db seeded successfully');
    })
    .catch(error => {
      console.log('error in Recipe drop/seed');
      console.log(error);
    });

  RecipeAuth.remove({})
    .then(response => {
      console.log('RecipeAuth dropped successfully');
    })
    .catch(error => {
      console.log('Error in  RecipeAuth drop');
      console.log(error);
    });
}

seedDB();

module.exports = seedDB;
