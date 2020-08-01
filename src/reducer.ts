import { DispatchAction, State } from './interfaces';

export const initialState = {
  selectedMonth: 0,
  users : []
};

export const reducer = (state: State = initialState, action: DispatchAction): State => {
  switch (action.type) {
    case "SHOW_USERS":
      return {
        ...state, users: action.payload,
      } as State;
    case "SELECT_MONTH":
      return {
        ...state, selectedMonth: action.payload
      } as State;
    default:
      return state;
  }
};