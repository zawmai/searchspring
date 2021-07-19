import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





function SearchBar(props) {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <form noValidate autoComplete="off">
        <Grid container alignItems="center" justifyContent="center">
          <TextField required id="searchTextField" defaultValue="Search for brands, category, color, price here" variant="outlined" />
          <Button variant="contained" color="primary">Search</Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default SearchBar;