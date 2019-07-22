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
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.getAllPokemonData();
  }

  getAllPokemonData() {
    axios.get('/api/pokemons')
      .then(response => (response.data))
      .then((data) => {
        this.setState({ pokemonData: data });
      });
  }

  changePage(event, { activePage }) {
    this.setState({
      currentPage: activePage,
    });
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
                <Grid.Column className="margin" key={singlePokemon.id}>
                  <PokeList
                    image={singlePokemon.image}
                    name={singlePokemon.pokemon_name}
                    price={singlePokemon.price}
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

        {/* {
          pokemonData.length > 0
          && pokemonData.map(singlePokemon => (
            <div>
              <img src={singlePokemon.image} alt={singlePokemon.pokemon_name} />
              <div>
                {singlePokemon.pokemon_name}
              </div>
            </div>

          ))
        } */}
      </Container>

    );
  }
}
export default Pokeshop;
