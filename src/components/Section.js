import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

/** MaterialUI style hook to make CSS rules object */
const useStyles = makeStyles({
  root: {
    margin: '0 0 40px 0',
  }
});

/**
 * Container wrapper component using CSS Flex
 * 
 * @param {
 *  children: JSX Component
 * } props 
 * @returns React JSX Component
 */
function Section(props) {
  /** Create CSS style strings with MaterialUI CSS rules */
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justifyContent="space-around" alignContent="space-between">
        {props.children}
    </Grid>
  );
}

export default Section;