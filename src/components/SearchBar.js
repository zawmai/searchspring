import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  searchTextInput: {
    maxWidth: 600,
    minWidth: 260,
    width: '60vw',

  },
  searchButton: {
    margin: '0 0 0 20px',
    padding: '12px 16px 12px 16px',
  }
});

function SearchBar(props) {
  const classes = useStyles();
  return (
    <Grid className={props.className} container alignItems="center" justifyContent="center">
      <form noValidate autoComplete="off">
        <Grid container alignItems="center" justifyContent="center">
          <TextField className={classes.searchTextInput} required id="searchTextField" placeholder="Search keywords here" variant="outlined" />
          <Button className={classes.searchButton} variant="contained" color="primary">Search</Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default SearchBar;