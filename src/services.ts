import {User} from "./interfaces";
import axios from "axios";

const API_URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

export function getUsers(): Promise<User[]>
export function getUsers(month: number): Promise<User[]>

export async function getUsers(month?: number): Promise<User[]> {
  async function getAllUsers(): Promise<User[]> {
    const response = await axios.get(API_URL);
    return response.data;
  }
  if (!month) {
    return await getAllUsers();
  } else {
    const users = await getAllUsers();
    return users.filter(({dob}) => {
      return month - 1 === new Date(dob).getMonth();
    });
  }
}