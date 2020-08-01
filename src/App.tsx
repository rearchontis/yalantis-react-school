import React, { useReducer } from 'react';
import { ContextState } from "./interfaces";
import { reducer, initialState} from "./reducer";
import { Users } from "./components/Users";
import { MonthSelect } from "./components/Select";

export const ApplicationContext = React.createContext({} as ContextState);

export const App: React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ApplicationContext.Provider value={{state, dispatch}}>
      <div className="App" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <MonthSelect />
        <Users />
      </div>
    </ApplicationContext.Provider>
  );
};