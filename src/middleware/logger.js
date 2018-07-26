// copied directly from https://redux.js.org/advanced/middleware
// examples.

export default store => next => (action) => { // eslint-disable-line
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};
