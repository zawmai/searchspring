import * as React from 'react';
import Grid from '@material-ui/core/Grid';

function Gallery(props) {
  return (
    <Grid container justifyContent="space-around" alignContent="space-between">
        {props.children}
    </Grid>
  );
}

export default Gallery;