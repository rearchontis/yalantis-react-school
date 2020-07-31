import React, {useContext} from "react";
import { UserCard } from "../UserCard/UserCard";
import { User } from "../../interfaces";
import {ApplicationContext} from "../../App";

export const Users: React.FC = () => {

  const { state } = useContext(ApplicationContext);
  const { users } = {...state};

  return (
    <div style={{
      width: "70vw",
      minWidth: "300px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      { users.map((user: User) => {
        const {
          id, firstName, lastName, dob
        } = user;
        return (
          <UserCard
            key={id}
            firstName={firstName}
            lastName={lastName}
            month={new Date(dob).getMonth() + 1}
          />
        );
      }) }
    </div>
  );
};