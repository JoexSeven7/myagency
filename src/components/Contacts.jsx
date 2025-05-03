import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'


export default function AppContact() {
    return(
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact us</h2>
                    <div className='subtitle'>Get connected with us</div>
                </div>
                    <Form>
                        <Row>
                            <Col sm={4}>
                            <Form.Control type='text' placeholder="Enter your user name"required />
                            </Col>
                            <Col sm={4}>
                            <Form.Control type='email' placeholder="Enter your email" required />
                            </Col>
                            <Col sm={4}>
                            <Form.Control type='tel' placeholder="Enter your phone number" required/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Form.Control as='textarea' placeholder="Enter your massage"required />
                            </Col>
                        </Row>
                        <div className='btn-holder'>
                            <Button type='submit'>Submit</Button>
                        </div>
                    </Form>
            </Container>
            <div className='google-map'>
             <iframe title='map'src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16265810.327179383!2d17.3585034!3d5.5454937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1737928374833!5m2!1sen!2sng" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className='fas fa-envelope'></i>
                            hello@domain.com
                        </li>
                        <li>
                            <i className='fas fa-phone'></i>
                            07040602452
                        </li>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            Nigeria
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}