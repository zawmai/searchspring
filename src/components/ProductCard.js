import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


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

function ProductCard(props) {
  // MatrialUI style hook function
  const classes = useStyles();

  // Nested destructe of product props for name and image url
  const {product: {  id, name, thumbnailImageUrl } } = props;

  // append 2 decimals to msrp and price
  const price = Number(props.product.price).toFixed(2);
  const msrp = Number(props.product.msrp).toFixed(2);

  // Display msrp crossed out if msrp is greater than price
  // else only display price
  const priceBoxContent = (msrp && price && (msrp > price) 
    ? <React.Fragment><span className={classes.msrp}>${msrp}</span><span className={classes.price}>${price}</span></React.Fragment>
    : <span>${price}</span>
  );

  return (
    <Card key={id} className={classes.root} elevation={3} variant='outlined'>
      <CardMedia
        className={classes.media}
        image={thumbnailImageUrl}
        title={name}
      />
      <CardContent>
          <Typography className={classes.name} variant="body1" display="block "align="center" color="textPrimary" component="p">
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