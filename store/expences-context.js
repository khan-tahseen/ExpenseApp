import { createContext, useReducer } from 'react';

export const DUMMY_EXPENCE = [
  {
    id: 'e1',
    description: 'A pair of Jeans',
    amount: 12.78,
    date: new Date('2022-10-14'),
  },
  {
    id: 'e2',
    description: 'A pair of Shirt',
    amount: 8.99,
    date: new Date('2021-10-17'),
  },
  {
    id: 'e3',
    description: 'A pair of shoes',
    amount: 15.66,
    date: new Date('2022-9-12'),
  },
  {
    id: 'e4',
    description: 'A Laptop',
    amount: 480.66,
    date: new Date('2023-9-24'),
  },
];

export const ExpencesContext = createContext({
  expences: [],
  addExpence: ({ description, amount, date }) => {},
  deleteExpence: (id) => {},
  updateExpence: (id, { description, amount, date }) => {},
});

function expencesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updateableExpenceIndex = state.findIndex(
        (expence) => expence.id === action.payload.id
      );
      const updateableExpence = state[updateableExpenceIndex];
      const updatedItem = { ...updateableExpence, ...action.payload.data };
      const updatedExpence = [...state];
      updatedExpence[updateableExpenceIndex] = updatedItem;
      return updatedExpence;
    case 'DELETE':
      return state.filter((expence) => expence.id !== action.payload.id);
    default:
      return state;
  }
}

function ExpencesContextProvider({ children }) {
  const [expencesState, dispatch] = useReducer(expencesReducer, DUMMY_EXPENCE);

  function addExpence(expenceData) {
    dispatch({ type: 'ADD', payload: expenceData });
  }

  function deleteExpence(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpence(id, expenceData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenceData } });
  }

  const value = {
    expences: expencesState,
    addExpence: addExpence,
    deleteExpence: deleteExpence,
    updateExpence: updateExpence,
  };

  return (
    <ExpencesContext.Provider value={value}>
      {children}
    </ExpencesContext.Provider>
  );
}

export default ExpencesContextProvider;
