const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  let categoryId;
  let catExpenses;
  let updatedExp;
  let updatedState;

  console.log('expense reducer type:', type, 'payload', payload);
  switch (type) {
    case 'CATEGORY_CREATE':
      return { ...state, [payload.id]: [] };
    case 'CATEGORY_REMOVE':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'EXPENSE_CREATE':
      categoryId = payload.categoryId; // eslint-disable-line
      catExpenses = state[categoryId];
      updatedExp = [...catExpenses, payload];
      return { ...state, [categoryId]: updatedExp };
    case 'EXPENSE_UPDATE':
      categoryId = payload.categoryId; // eslint-disable-line
      catExpenses = state[categoryId];
      updatedExp = catExpenses.map(item => (item.id === payload.id ? payload : item));
      return { ...state, [categoryId]: updatedExp };
    case 'EXPENSE_REMOVE':
      categoryId = payload.categoryId; // eslint-disable-line
      catExpenses = state[categoryId];
      updatedExp = catExpenses.filter(expense => expense.id !== payload.id);
      return { ...state, [categoryId]: updatedExp };
    default:
      return state;
  }
};
