import React from 'react';
import axios from 'axios';
import { Container, Grid, Pagination } from 'semantic-ui-react';
import NavBar from './NavBar';
import PokeList from './PokeList';

class Pokeshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: [],
      currentPage: 1,
      userInfos: [],
    };
    this.changePage = this.changePage.bind(this);
    this.postCommandsInfos = this.postCommandsInfos.bind(this)
  }

  componentDidMount() {
    this.getAllPokemonData();
    this.getUserInfos();
  }


  getAllPokemonData() {
    axios.get('/api/pokemons')
      .then(response => (response.data))
      .then((data) => {
        this.setState({ pokemonData: data });
      });
  }

  getUserInfos() {
    axios.get('/api/users')
      .then(response => (response.data))
      .then((data) => {
        this.setState({ userInfos: data });
      });
  }

  changePage(event, { activePage }) {
    this.setState({
      currentPage: activePage,
    });
  }

  postCommandsInfos(productId) {
    const { userInfos } = this.state;
    axios.post('/api/commands',
      {
        productId,
        userId: userInfos.id,
      })
      .then(response => (response.data));
  }

  render() {
    const { pokemonData, currentPage } = this.state;
    const end = 20 * currentPage;
    const start = end - 20;
    return (

      <Container>
        <NavBar />
        <h2>Shop List </h2>
        <h3> Choose your pokemon </h3>


        <Grid>
          <Grid.Row columns={5}>
            {
              pokemonData
              && pokemonData.slice(start, end).map(singlePokemon => (
                <Grid.Column className="marginCard" key={singlePokemon.id}>
                  <PokeList
                    image={singlePokemon.image}
                    name={singlePokemon.pokemon_name}
                    price={singlePokemon.price}
                    id={singlePokemon.id}
                    postCommandsInfos={this.postCommandsInfos}
                  />
                </Grid.Column>
              ))
            }
          </Grid.Row>
        </Grid>
        <Grid className="App">
          <Pagination
            className="pokeshop-pagination"
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={8}
            onPageChange={this.changePage}
          />
        </Grid>
      </Container>

    );
  }
}
export default Pokeshop;
