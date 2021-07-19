import { useState } from 'react';
import MockProducts from './mockData.json';
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from './components/ProductCard';
import Gallery from './components/Gallery';


function App() {

  const [products, setProducts] = useState(MockProducts.data);
  const productCards = products.map((product) => 
    <ProductCard product={product}/>
  );

  return (
    <Gallery>
      {productCards}
    </Gallery>
  );
}

export default App;
