import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import emailjs from 'emailjs-com'
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contact() {
    const notify_sended = () => toast("Email sended!");
    const notify_sending = () => toast("Email sending....");

    function sendEmail(e) {
        e.preventDefault();
        notify_sending()
        emailjs.sendForm(
            'service_bpf4sl9',
            'template_riskhyc',
            e.target,
            '_3A9yYgo6mZ8R_af0'
        ).then(res => {
            notify_sended()
        }).catch(err => console.log(err));

    }

    return (
        <div>
            <Form onSubmit={sendEmail} className='form' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="name" placeholder="Full name" name='name' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" name='from' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" name='subject' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} name='message' type="text" placeholder="Your message" />
                </Form.Group>
                <Button variant="primary" type="submit" className='btnsubm'>
                    Send
                </Button>
                <Form.Label className='alert-wait'>Wait until email is sended before leaving.</Form.Label>


            </Form>
            <ToastContainer />
        </div>
    );
}

export default Contact;