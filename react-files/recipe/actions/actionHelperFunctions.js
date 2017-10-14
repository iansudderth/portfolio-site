import _ from 'lodash';

export function enforceDelay(startTime, minimumDelay, callback, ...args) {
  const now = new Date();
  const timeDifference = now - startTime;
  if (timeDifference > minimumDelay) {
    callback(...args);
  } else {
    _.delay(callback, minimumDelay - timeDifference, ...args);
  }
}
