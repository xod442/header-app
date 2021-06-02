import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'

const userForm = (props) => {
    return (
<Form>
          <Form.Group controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
             <Form.Text className="text-muted">
              {props.words}
             </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>{props.stuff}</p>
</Form>
    )
};

export default userForm;



