import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment>
        <Menu secondary>
          <Menu.Item name='shop' active={activeItem === 'shop'} onClick={this.handleItemClick} />
          <Menu.Item
            name='shopping cart'
            active={activeItem === 'shopping cart'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='log out'
            active={activeItem === 'log out'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}