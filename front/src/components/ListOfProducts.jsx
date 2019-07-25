import React from 'react';
import axios from 'axios';
import { Container, Grid, Pagination } from 'semantic-ui-react';
import NavBar from './NavBar';
import PokeList from './PokeList';
import ShoppingCartProduct from './ShoppingCartProduct'


class ListOfProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
    };
  }

  componentDidMount = () => {
    this.getAirlinematches();
  }

  getAirlinematches = () => {
    const { id } = this.props;
    getALMatches(id)
      .then(data => {
        this.setState({ matches: data });
      });
  }

  deleteMatches = (idMatch) => {
    const { matches } = this.state;
    (
      axios.put(`/api/airlines/updateStatusMatches/${idMatch}`)
        .then(() => {
          const newMatches = matches
            .filter(match => match.resultId !== idMatch);
          this.setState({ matches: newMatches });
        })
    );
  };

  handleDelete = (idMatch) => {
    this.deleteMatch(idMatch);
  };

  render() {
    const { matches } = this.state;
    return (
      <React.Fragment>
        {
          matches.length > 0
          && matches.map(match => (
            <MatchAL
              key={match.resultId}
              data={match}
              handleDelete={this.deleteMatches}
            />
          ))
        }
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  id: state.logs.id,
});
ListOfMatchesAL.propTypes = {
  id: Proptypes.number
};
ListOfMatchesAL.defaultProps = {
  id: ''
};

export default ListOfProducts;
