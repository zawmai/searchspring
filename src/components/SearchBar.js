import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';

import InputBase from '@material-ui/core/InputBase';

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
  submit: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }
});

function SearchBar(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} component="form" elevation={3} noValidate autoComplete="off">
      <InputBase className={classes.input} required id="searchTextField" placeholder="Search Product Keywords" variant="outlined" inputProps={{ 'aria-label': 'search product keywords' }} />
      <Button className={classes.submit} variant="contained" color="primary" type="submit" name="search_text_button" aria-label="search">Search</Button>
    </Paper>
  );
}

export default SearchBar;