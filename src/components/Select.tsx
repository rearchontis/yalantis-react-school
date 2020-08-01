import React, {useContext, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ApplicationContext } from '../App';
import { months, getUsers, getOptionColorsArray } from '../services';

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

  const handleChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedMonthValue = event.target.value as keyof typeof state;
    const users = await getUsers(+selectedMonthValue);

    dispatch({type: "SELECT_MONTH", payload: +selectedMonthValue});
    dispatch({type: "SHOW_USERS", payload: users});
  };

  useEffect(() => {
    getUsers().then(users => {
      dispatch({type: "SHOW_USERS", payload: users});
    });
    getOptionColorsArray().then(colors => {
      dispatch({type: "SET_OPTION_COLORS", payload: colors});
    });
  }, [dispatch]);

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
          <option value={0}>All users</option>

          { months.map((month, i): JSX.Element => {
            return (
              <option 
                key={i} 
                value={i+1}
                style={{background: state.optionsColors[i]}}>{month}</option>
            );
          }) }

        </Select>
      </FormControl>
    </div>
  );
};