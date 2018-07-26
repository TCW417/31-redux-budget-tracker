import uuid from 'uuid/v4';

export const create = ({ desc, amount, categoryId }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    desc,
    amount,
    id: uuid(),
    timestamp: new Date(),
    categoryId,
  },
});

export const update = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const remove = expense => ({
  type: 'EXPENSE_REMOVE',
  payload: expense,
});
