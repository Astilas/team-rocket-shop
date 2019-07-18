import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class PokeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { name, image } = this.props;
    return (
      <Card>
        <Image src={image} alt={name} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            {name}
            {' '}
            is a strong pokemon
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default PokeList;
