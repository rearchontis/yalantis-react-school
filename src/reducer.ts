import { DispatchAction, State } from './interfaces';

export const initialState = {
  selectedMonth: 0,
  optionsColors: [],
  users : []
};

export const reducer = (state: State = initialState, action: DispatchAction): State => {
  switch (action.type) {
    case "SET_OPTION_COLORS":
      return {
        ...state, optionsColors: action.payload,
      } as State;
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