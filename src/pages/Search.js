import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MockProducts from '../mockData.json';
import SearchBar from '../components/SearchBar';
import Gallery from '../components/Gallery';
import ProductCard from '../components/ProductCard';
import Container from '@material-ui/core/Container';

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
    <React.Fragment key={product.id}>
      <ProductCard product={product}/>
    </React.Fragment>
  );

  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <SearchBar className={classes.searchBar}/>
      <Gallery>
        {productCards}
      </Gallery>
    </Container>
  );
}

export default Search;