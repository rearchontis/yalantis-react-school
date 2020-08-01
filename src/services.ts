import { User } from './interfaces';
import axios from 'axios';

export const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const API_URL = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

async function getAllUsers(): Promise<User[]> {
  const { data } = await axios.get(API_URL);
  return data;
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

export async function getUsersCountBornPerMonth(month:number): Promise<number> {
  const users = await getUsers(month);
  return users.length;
}

export async function getOptionColorsArray(): Promise<string[]> {
  const result: string[] = [];
  for (let i = 0; i < 11; i++) {
    const usersCount = await getUsersCountBornPerMonth(i);
    result.push(getOptionColor(usersCount));
  }
  return result;
}

export function getOptionColor(usersCountBornPerMonth: number): string {
  switch(usersCountBornPerMonth) {
    case 0: return 'rgba(255, 255, 255, 0.7)';
    case 1: return 'rgba(255, 255, 255, 0.7)';
    case 2: return 'rgba(255, 255, 255, 0.7)';
    case 3: return 'rgb(33, 150, 243)';
    case 4: return 'rgb(33, 150, 243)';
    case 5: return 'rgb(33, 150, 243)';
    case 6: return 'rgb(33, 150, 243)';
    case 7: return 'rgb(76, 175, 80)';
    case 8: return 'rgb(76, 175, 80)';
    case 9: return 'rgb(76, 175, 80)';
    case 10: return 'rgb(76, 175, 80)';
    default: return 'rgb(244, 67, 54)';
  }
}