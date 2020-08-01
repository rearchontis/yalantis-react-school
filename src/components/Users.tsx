import React, { useContext } from 'react';
import { User } from '../interfaces';
import { ApplicationContext } from '../App';
import { UserCard } from './UserCard';
interface UsersComponentProps {
  month: number
}

export const Users: React.FC<UsersComponentProps> = () => {

  const { state } = useContext(ApplicationContext);

  return (
    <div style={{
      width: "70vw",
      minWidth: "300px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      { state.users.map((user: User) => {
        const {
          id, firstName, lastName, dob
        } = user;
        return (
          <UserCard
            key={id}
            firstName={firstName}
            lastName={lastName}
            month={new Date(dob).getMonth()}
          />
        );
      }) }
    </div>
  );
};