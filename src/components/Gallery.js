import * as React from 'react';

function Gallery(props) {
  return (
    <Grid container justifyContent="center" spacing={4} justifyContent="space-around" alignContent="space-between">
        {props.children}
    </Grid>
  );
}

export default Gallery;