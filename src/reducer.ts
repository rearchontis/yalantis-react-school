import {User} from "../interfaces";



export const reducer = (state: State = initialState, action: DispatchAction): State => {
  switch (action.type) {
    case "SHOW_USERS":
      return {
        ...state, users: action.payload,
      };
    case "SELECT_MONTH":
      return {
        ...state, selectedMonth: action.payload
      };
    default:
      return state;
  }
};