import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';

/** MaterialUI style hook to make CSS rules object */
const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0 0 10px',
    maxWidth: 500,
    minWidth: 260,
    width: '100%',
  },
  input: {
    flex: 1,
  },
  errorMessage: {
    flexBasis: '100%',
    textAlign: 'center',
    color: 'red'
  },
  submit: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }
});


/**
 * Searchbar form component using react-hook-form library. Contains text input and submit button.
 * 
 * @param {
 *  onValidSubmit: function,
 *  onInvalidSubmit: function,
 * } props 
 * @returns React JSX Component
 */
function SearchBar(props) {

  /** 
   * Use react-hook-form hook to create form methods to register inputs, 
   * handle form submission, clear validation errors, and grab errors state.
   * Inputs validation set to perform only on form submit.
   */
  const { 
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ reValidateMode: "onSubmit" });

  /** 
   * Search bar text input configuation and its error messages when input is invalid:
   * - set input as required for submission
   * - validation regex patter
   */
  const inputOptions = {
    required: 'Required: Please enter one or more keywords to search.',
    pattern: {
      value: /^[A-Za-z0-9]+[A-Za-z0-9\s/-]*$/,
      message: 'Invalid Keywords(s): Letters and Digits only'
    }
  };

  /** Created input with name 'searchText and its options. */
  const searchText = register("searchText", inputOptions);

  /** Input onChange Callback: Use registered input callback. Then, clear errors from previous form submission. */
  const onChangeCb = (event) => {
    searchText.onChange(event);
    clearErrors('searchText');
  };

  /** Create CSS style strings with MaterialUI CSS rules */
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.root} component="form" elevation={3} noValidate autoComplete="off" onSubmit={handleSubmit(props.onValidSubmit, props.onInvalidSubmit)}>
        <InputBase  
          {...searchText} 
          onChange={onChangeCb} 
          className={classes.input} 
          id="searchTextField" 
          name="searchText" 
          placeholder="Search Product Keywords" 
          variant="outlined" 
          inputProps={{ 'aria-label': 'search product keywords' }} 
        />
        <Button 
          className={classes.submit} 
          variant="contained" 
          color="primary" 
          type="submit" 
          name="searchButton" 
          aria-label="search">Search
        </Button>
      </Paper>
      {errors.searchText && errors.searchText.message && <p className={classes.errorMessage}>{errors.searchText.message}</p>}
    </React.Fragment>
  );
}

export default SearchBar;