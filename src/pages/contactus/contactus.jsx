import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import LMGNavbar from '../../components/navbar/navbar';
import Footerlmg from '../../components/footer/footer';
import Location from '../../assets/location.png';

function Contact() {
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Love Music Global',  // You can set this dynamically if needed
      from_name: `${fname} ${lname}`,
      email: email,
      message: body,
    };

    try {
      await emailjs.send('service_a72gs39', 'template_7qeamto', templateParams, 'lFXKKwajX8_AzC6MC');
      setToastMessage('Email sent successfully.');
      setShowToast(true);
    } catch (error) {
      setToastMessage('Error sending email.');
      setShowToast(true);
    }
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handleFname = (e) => setFname(e.target.value);
  const handleLname = (e) => setLname(e.target.value);
  const handleBody = (e) => setBody(e.target.value);

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <LMGNavbar />
        
        <div className="flex flex-col items-center w-full py-8 px-3">
          <p className="text-4xl mb-2">Contact Us</p>
          {/* <p className="text-gray-400 mb-6">Subheading for description or instructions</p> */}
          
          <Form className=" max-w-lg" onSubmit={sendEmail}>
            <div className="mb-3 w-full flex ">
              <Col>
                <Form.Group controlId="formFirstName" className='mr-2'>
                  <Form.Label>First name</Form.Label>
                  <Form.Control type="text" placeholder="Jane" value={fname} onChange={handleFname} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName" className='justify-self-end'>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control type="text" placeholder="Smitherton" value={lname} onChange={handleLname} />
                </Form.Group>
              </Col>
            </div>
            <Form.Group controlId="formEmail" className="mb-3 w-full ">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="email@janesfakedomain.net" value={email} onChange={handleEmail} />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-4 w-full ">
              <Form.Label>Your message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your question or message" value={body} onChange={handleBody} />
            </Form.Group>
            <Button variant="dark" className="bg-gradient-redblack w-full py-2" type="submit">
              Submit
            </Button>
          </Form>
          <Toast show={showToast} primary onClose={() => setShowToast(false)} delay={3000} autohide>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
          {/* <div className="mt-32 bg-reddark p-4 flex items-center flex-col rounded-lg ">
              <p className="text-2xl ">Visit our Location</p>
            <img src={Location} alt="location"  className='max-h-48' />
            <span className="ml-2">Bedford Heights, Brickhill Drive, Bedford, MK41 7PH</span>
          </div> */}
        </div>
       
      </div>
      <Footerlmg />
    </>
  );
}

export default Contact;
