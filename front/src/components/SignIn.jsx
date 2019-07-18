import React from 'react';
import {
  Button, Form, Segment, Container,
} from 'semantic-ui-react';

const SignIn = () => (
  <Container>
    <h2> Log in Customer !</h2>
    <Segment inverted>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Input fluid label="Email" placeholder="Email" />
          <Form.Input fluid label="Password" placeholder="Password" />
        </Form.Group>
        <Button type="submit">LOG IN</Button>
      </Form>
    </Segment>
  </Container>
)
export default SignIn;
