import React from 'react';
import { Grid, Card, Image, Button } from 'semantic-ui-react';

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { name, image, price } = this.props;
    return (
      <Card>
        <Image src={image} alt={name} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            <Grid.Row>
              {name}
              <br />
              <br />
              is a strong pokemon
              <Grid.Column>
                <Button color="primary">
                  {price}
                  $
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default PokeList;
