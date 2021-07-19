import { useState } from 'react';
import MockProducts from './mockData.json';
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from './components/ProductCard';
import Gallery from './components/Gallery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '40px 20px 40px 20px'
  }
});


function App() {

  const [products, setProducts] = useState(MockProducts.data);
  const productCards = products.map((product) => 
    <ProductCard product={product}/>
  );

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Gallery>
        {productCards}
      </Gallery>
    </div>
  );
}

export default App;
