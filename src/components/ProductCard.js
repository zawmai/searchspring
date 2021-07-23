import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

/** MaterialUI style hook to make CSS rules object */
const useStyles = makeStyles({
  root: {
    maxWidth: 267,
    fontSize: 16,
    margin: '0 0 30px 0',
  },
  media: {
    width: 267,
    height: 400,
  },
  name: {
    margin: '0 0 10px 0',
  },
  price: {
    padding: '0 0 0 10px',
    fontSize: 16,
    fontWeight: 700,
    color: '#3a23ad'
  },
  msrp: {
    textDecoration: 'line-through',
    fontSize: 16,
  }
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
  /** Create CSS style strings with MaterialUI CSS rules */
  const classes = useStyles();

  /** Destructure product's name and image URL from props */
  const {product: { name, thumbnailImageUrl } } = props;

  /** Round prouduct's price and msrp to two decimals */
  const price = Number(props.product.price).toFixed(2);
  const msrp = Number(props.product.msrp).toFixed(2);

  // Display msrp crossed out if msrp is greater than price
  // else only display price
  const priceBoxContent = (msrp && price && (msrp > price) 
    ? <React.Fragment><span className={classes.msrp}>${msrp}</span><span className={classes.price}>${price}</span></React.Fragment>
    : <span>${price}</span>
  );

  return (
    <Card className={classes.root} elevation={3} variant='outlined'>
      <CardMedia
        className={classes.media}
        image={thumbnailImageUrl}
        title={name}
      />
      <CardContent>
          <Typography className={classes.name} variant="body1" align="center" color="textPrimary" component="p">
            {name}
          </Typography>
        <Box display="flex" justifyContent="center">
          {priceBoxContent}
        </Box>
      </CardContent>
    </Card>
  );
}


export default ProductCard;