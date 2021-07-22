import * as React from 'react'
import ProductCard from './ProductCard';

function Gallery(props) {
  
  const cards = (props.products && (props.products.length > 0)) 
    ? (props.products.map((product) => 
        <React.Fragment key={product.id}>
          <ProductCard product={product}/>
        </React.Fragment>))
    : <p>No Products Found. Please search different keywords =).</p>;
  
  return (
    <React.Fragment>
      {cards}
    </React.Fragment>
  );
}

export default Gallery;