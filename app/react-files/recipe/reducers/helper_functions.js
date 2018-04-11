import _ from 'lodash';

export function stateChange(state, change) {
  return _.merge({}, state, change);
}

export function removeIds(obj) {
  delete obj['_id'];
  _.each(obj, (value, key) => {
    if (typeof value === 'object') {
      removeIds(obj[key]);
    }
  });
  return obj;
}
