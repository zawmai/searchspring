import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles'


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
  },

});

function ProductCard(props) {
  // MatrialUI style hook function
  const classes = useStyles();
  // append 2 decimals 
  const price = Number(props.product.price).toFixed(2);
  const msrp = Number(props.product.msrp).toFixed(2);

  return (
    <Card className={classes.root} elevation={3} variant='outlined'>
      <CardMedia
        className={classes.media}
        image={props.product.thumbnailImageUrl}
        title={props.product.name}
      />
      <CardContent>
        <Typography className={classes.name} variant="body1" display="block "align="center" color="textPrimary" component="p">
          {props.product.name}
        </Typography>
        <Box display="flex" justifyContent="center">
          <span>${price}</span>
          <span className={classes.price}>${msrp}</span>
        </Box>
      </CardContent>
    </Card>
  );
}


export default ProductCard;