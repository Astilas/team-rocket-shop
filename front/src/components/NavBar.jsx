import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom';
export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  // componentWillMount() {
  //   localStorage.getItem('isAuthenticated');
  // }

  // logout = (redirection) => {
  //   const { dispatch } = this.props;
  //   localStorage.removeItem('token');
  //   localStorage.setItem('isAuthenticated', 'false');
  //   redirection();
  // };

  render() {
    const { activeItem } = this.state;
    const { token } = this.props;
    // const { history } = this.props;

    // if (localStorage.getItem('isAuthenticated') !== 'true') {
    //   return null;
    // }
    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item name='shop' active={activeItem === 'shop'} onClick={this.handleItemClick} />
          <Menu.Item
            component={Link}
            to={token
            ? '/shopping-cart'
            : '/signin'}
            name='shopping cart'
            active={activeItem === 'shopping cart'}
            onClick={this.handleItemClick}
          />
        </Menu>
        {/* <Button
            label="Log out"
            name='log out'
            onClick={(e) => {
              e.preventDefault();
              this.logout(() => {
                history.push('/');
                localStorage.setItem('isAuthenticated', false);
              });
            }}
        /> */}
      </Segment>
    )
  }
}