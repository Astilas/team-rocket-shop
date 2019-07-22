import React from 'react';
import {
  Button, Form, Segment, Container,
} from 'semantic-ui-react';
import axios from 'axios';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  postUserInfos = (e) => {
    e.preventDefault();
    const {
      email,
      password,
      firstname,
      lastname
    } = this.state;
    axios.post('/api/auth/signup',
      {
        email, password, firstname, lastname,
      })
      .then(response => response.data)
      .then((data) => {

      });
  };
  render() {
  const { email, password, firstname, lastname } = this.state;

  return (
    <Container>
      <h2> SignUp Customer !</h2>
      <Segment inverted>
        <Form inverted onSubmit={this.postUserInfos}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="firstname"
              label="Firstname"
              placeholder="Firstname"
              value={firstname}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              name="lastname"
              label="Lastname"
              placeholder="Lastname"
              value={lastname}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="email"
              label="Email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions (Purchase pokemon is on your own)" />
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    </Container>
  );
}
}
export default SignUp;