import React, {useContext, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ApplicationContext } from "../App";
import { getUsers } from "../services";

const months: string[] = [
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export const MonthSelect: React.FC = () => {
  const classes = useStyles();

  const {state, dispatch} = useContext(ApplicationContext);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    const selectedMonthValue = event.target.value as keyof typeof state;
    dispatch({type: "SELECT_MONTH", payload: +selectedMonthValue});
  };

  useEffect(() => {
    function setSelectedUsers() {
      const { selectedMonth } = state;
      return selectedMonth
        ? getUsers(selectedMonth)
        : getUsers();
    }
    setSelectedUsers().then(users => {
      dispatch({type: "SHOW_USERS", payload: users });
    });
  }, []);

  console.log('update');

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="month-native-simple">Month</InputLabel>
        <Select
          native
          value={state.selectedMonth}
          onChange={handleChange}
          label="month"
          inputProps={{
            name: 'month',
            id: 'month-native-simple',
          }}>
          <option value={0}>None</option>

          { months.map((month, i): JSX.Element => {
            return (<option key={i} value={i+1}>{month}</option>);
          }) }

        </Select>
      </FormControl>
    </div>
  );
};