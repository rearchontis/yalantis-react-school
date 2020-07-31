import { User } from "./interfaces";
import axios from "axios";

const API_URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

async function getAllUsers(): Promise<User[]> {
  const response = await axios.get(API_URL);
  return response.data;
}

export function getUsers(): Promise<User[]>
export function getUsers(month: number): Promise<User[]>

export async function getUsers(month?: number): Promise<User[]> {

  switch (month) {
    case undefined:
      return await getAllUsers();
    case 0:
      return await getAllUsers();
    default: {
      const users = await getAllUsers();
      return users.filter(({dob}) => {
        return month - 1 === new Date(dob).getMonth();
      });
    }
  }

}