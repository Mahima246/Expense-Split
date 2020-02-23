import React from 'react'
import {Modal, Form, Button} from 'react-bootstrap'

const Login = (props) => {
    return (
        <Modal show={props.show} onHide={props.Close}>
            <Modal.Header closeButton><b>Log In</b></Modal.Header>
            <Modal.Body>
                <Form onSubmit={props.login}>
                    <Form.Control placeholder="Username" onChange={props.username} required />
                    <Form.Control placeholder="Password" onChange={props.pwd} required />
                    <Button type="submit">Log In</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default Login