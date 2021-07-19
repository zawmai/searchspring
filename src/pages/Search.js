import { useState } from 'react';
import MockProducts from '../mockData.json';
import ProductCard from '../components/ProductCard';
import Gallery from '../components/Gallery';
import SearchBar from '../components/SearchBar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    padding: '40px 20px 40px 20px'
  },
  searchBar: {
    margin: '0 0 40px 0',
  },
});

function Search(props) {

  // Create ProductCard components with data
  const [products, setProducts] = useState(MockProducts.data);
  const productCards = products.map((product) => 
    <ProductCard product={product}/>
  );

  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <SearchBar className={classes.searchBar}/>
      <Gallery>
        {productCards}
      </Gallery>
    </Grid>
  );
}

export default Search;