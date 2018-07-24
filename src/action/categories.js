import uuid from 'uuid/v4';

// These are action creators. We are creating a set of functions to simplify creating actions

const create = ({ name, budget }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    budget,
    id: uuid(),
    createdOn: new Date(),
  },
});

const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

const remove = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});

export { create, update, remove };
