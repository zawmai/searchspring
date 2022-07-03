import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';


/** Make styled component w/ emotion styling engine to insert CSS rules */
const StyledCard = styled(Card, {
  name: "productCard__container",
  slot: "wrapper"
})({
  maxWidth: 267,
  fontSize: 16,
  margin: '0 0 30px 0',
});

const StyledCardMedia = styled(CardMedia, {
  name: "productCard__image",
  slot: "wrapper"
})({
  width: 267,
  height: 400,
});

const StyledName = styled(Typography,{
  name: "productCard__name",
  slot: "wrapper"
})({
  margin: '0 0 10px 0',
});

const StyledPrice = styled('span',{
  name: "productCard__price",
  slot: "wrapper"
})({
  padding: '0 0 0 10px',
  fontSize: 16,
  fontWeight: 700,
  color: '#3a23ad'
});

const StyledMsrp = styled('span',{
  name: "productCard__msrp",
  slot: "wrapper"
})({
  textDecoration: 'line-through',
  fontSize: 16,
});

/**
 * Card component containing image, text, price and msrp.
 * 
 * @param {
 *  product: {
 *    name: string,
 *    thumbnailImageUrl: string,
 *    price: string,
 *    msrp: string,
 *  }
 * } props 
 * @returns React JSX Component
 */
function ProductCard(props) {

  /** Destructure product's name and image URL from props */
  const {product: { name, thumbnailImageUrl } } = props;

  /** Round prouduct's price and msrp to two decimals */
  const price = Number(props.product.price).toFixed(2);
  const msrp = Number(props.product.msrp).toFixed(2);

  // Display msrp crossed out if msrp is greater than price
  // else only display price
  const priceBoxContent = (msrp && price && (msrp > price) 
    ? <React.Fragment><StyledMsrp>${msrp}</StyledMsrp><StyledPrice>${price}</StyledPrice></React.Fragment>
    : <StyledPrice>${price}</StyledPrice>
  );

  return (
    <StyledCard elevation={3} variant='outlined'>
      <StyledCardMedia
        image={thumbnailImageUrl}
        title={name}
      />
      <CardContent>
          <StyledName variant="body1" align="center" color="textPrimary" component="p">
            {name}
          </StyledName>
        <Box display="flex" justifyContent="center">
          {priceBoxContent}
        </Box>
      </CardContent>
    </StyledCard>
  );
}


export default ProductCard;