import React from 'react';
import axios from 'axios';
import { Container, Grid, Pagination } from 'semantic-ui-react';
import NavBar from './NavBar';
import PokeList from './PokeList';

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Proptypes from 'prop-types';
// import IconButton from '@material-ui/core/IconButton';
// import Divider from '@material-ui/core/Divider';
// import StarRatings from 'react-star-ratings';

// import AirlineCard from './AirlineCard';
// import OurRequest from './results/OurRequest';
// import ProposeOfTheAirport from './results/ProposeOfTheAirport';


function ShoppingCartProduct(props) {

  const {
    data,
    handleDelete
  } = props;

  return (

    <IconButton
      aria-label="Delete"
      onClick={() => handleDelete(data.resultId)}
    >
      <DeleteIcon
        fontSize="small"
      />
    </IconButton>
  );
}

export default ShoppingCartProduct;
