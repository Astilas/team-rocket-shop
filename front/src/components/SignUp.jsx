import React from 'react';
import {
  Button, Form, Segment, Container,
} from 'semantic-ui-react';

const SignUp = () => (
  <Container>
    <h2> SignUp Customer !</h2>
    <Segment inverted>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Input fluid label="Firstname" placeholder="Firstname" />
          <Form.Input fluid label="Lastname" placeholder="Lastname" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input fluid label="Email" placeholder="Email" />
          <Form.Input fluid label="Password" placeholder="Password" />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms and Conditions (Purchase pokemon is on your own)" />
        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  </Container>
)
export default SignUp;

// import React from 'react';
// import {
//   Button, Form, Segment, Container,
// } from 'semantic-ui-react';

// const SignUp = () => (
//   <Container>
//     <h2> SignUp Customer !</h2>
//     <Segment inverted>
//       <Form inverted>
//         <Form.Group widths="equal">
//           <Form.Input
//             error={{ content: 'Please enter your first name', pointing: 'below' }}
//             fluid
//             label="First name"
//             placeholder="First name"
//           />
//           <Form.Input
//             error="Please enter your last name"
//             fluid
//             label="Last name"
//             placeholder="Last name"
//           />
//           <Form.Input
//             error={{ content: 'Please enter your email', pointing: 'below' }}
//             fluid
//             label="Email"
//             placeholder="Email"
//           />
//           <Form.Input
//             error="Please enter your password"
//             fluid
//             label="Password"
//             placeholder="Password"
//           />
//           <Form.Checkbox
//             label="I agree to the Terms and Conditions"
//             error={{
//               content: 'You must agree to the terms and conditions',
//               pointing: 'left',
//             }}
//           />
//           <Form.Input fluid label="Firstname" placeholder="Firstname" />
//           <Form.Input fluid label="Lastname" placeholder="Lastname" />
//           <Form.Input fluid label="Email" placeholder="Email" />
//           <Form.Input fluid label="Password" placeholder="Password" />
//         </Form.Group>
//         <Button type="submit">Submit</Button>
//       </Form>
//     </Segment>
//   </Container>
// );
// export default SignUp;
