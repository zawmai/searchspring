import { useState } from 'react';
import MockProducts from '../mockData.json';
import ProductCard from '../components/ProductCard';
import Gallery from '../components/Gallery';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '40px 20px 40px 20px'
  }
});

function Search(props) {

  // Create ProductCard components with data
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

export default Search;