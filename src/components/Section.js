import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '0 0 40px 0',
  }
});

function Section(props) {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justifyContent="space-around" alignContent="space-between">
        {props.children}
    </Grid>
  );
}

export default Section;