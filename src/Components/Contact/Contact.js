import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com'

function Contact() {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
            'service_bpf4sl9',
            'template_riskhyc',
            e.target,
            '_3A9yYgo6mZ8R_af0'
            ).then(res=>{
                console.log(res)
            }).catch(err => console.log(err));

    }

    return (
        <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="name" placeholder="Enter email" name='name' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='from'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" name='subject'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control  as="textarea" rows={3} name='message' type="text" placeholder="Your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
            </Button>

        </Form>

        
    );
}

export default Contact;