import { useState } from 'react';
import Products from './products.json';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


function App() {

  function ProductItem(props) {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper elevation={3}>{props.data.name}</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  const [products, setProducts] = useState(Products.data);
  const productCards = products.map((product) => 
    <ProductItem data={product}/>
  );

  return (
    <Grid container justifyContent="center" spacing={2} className="App">
        {productCards}
    </Grid>
  );
}

export default App;
