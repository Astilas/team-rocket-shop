import React from 'react';
import {
  Button, Form, Segment, Container,
} from 'semantic-ui-react';
import axios from 'axios';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.type]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { history } = this.props;
    axios.post('/api/auth/signin', this.state)
      .then(res => res.data)
      .then(data => {
        localStorage.setItem('token', data.token);
        const { setToken } = this.props;
        setToken(data.token);
        const redirectTo = '/shop';
        history.push(redirectTo);
      })
  }

  render() {
    const { password, email } = this.state
    return (
      <Container>
        <h2> Log in Customer !</h2>
        <Segment inverted>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Email"
                type="email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label="Password"
                value={password}
                onChange={this.handleChange}
                type="password"
              />
            </Form.Group>
            <Button
              type="submit"
            >LOG IN</Button>
          </Form>
        </Segment>
      </Container>
    )
  }
}

export default SignIn;

// import React, { Component } from "react";
// import { Button, FormGroup, FormControl } from "react-bootstrap";

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   validateForm() {
//     return this.state.email.length > 0 && this.state.password.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//     const { history } = this.props;
//     axios.post('/api/auth/signin', this.state)
//       .then(res => res.data)
//       .then(data => {
//         localStorage.setItem('token', data.token);
//         const { setToken } = this.props;
//         setToken(data.token);
//         const redirectTo = '/shop';
//         history.push(redirectTo);
//       })
//   }

//   render() {
//     return (
//       <div className="Login">
//         <form onSubmit={this.handleSubmit}>
//           <FormGroup controlId="email" bsSize="large">
//             <label>Email</label>
//             <FormControl
//               autoFocus
//               type="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup controlId="password" bsSize="large">
//             <label>Password</label>
//             <FormControl
//               value={this.state.password}
//               onChange={this.handleChange}
//               type="password"
//             />
//           </FormGroup>
//           <Button
//             block
//             bsSize="large"
//             disabled={!this.validateForm()}
//             type="submit"
//           >
//             Login
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

/// VVVVVVVVV

// import React from 'react';
// import {
//   Button, Form, Segment, Container,
// } from 'semantic-ui-react';

// const handleChange = (event) => {
//   this.setState({
//     [event.target.id]: event.target.value,
//   });
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   axios.post('/api/auth/signin')
//   fetch('/api/auth/signin', {
//     method: 'POST',
//     header: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(this.state)
//   })
//   .then(res => res.data)
//   .then(data => {

//   })
// };

// const SignIn = () => (

//   <Container>
//     <h2> Log in Customer !</h2>
//     <Segment inverted>
//       <Form inverted onSubmit={handleSubmit}>
//         <Form.Group widths="equal">
//           <Form.Input fluid label="Email" placeholder="Email" />
//           <Form.Input fluid label="Password" placeholder="Password" />
//         </Form.Group>
//         <Button type="submit">LOG IN</Button>
//       </Form>
//     </Segment>
//   </Container>
// )
// export default SignIn;
