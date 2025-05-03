import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/images/img1.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function AppAbout(){
    const html = 80;
    const responsive = 70;
    const photoshop = 95;


    return(
        <section id="about" className="block about-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>About us</h2>
                    <div className='subtitle'>Learn more about us</div>
                </div>
                <Row>
                <Col sm={6}>
                   <Image src={img1} rounded />
                </Col>
                <Col sm={6}>
                  <p className='text-center writeup-bg'>Welcome to Mage Global! At Mage Global, we believe in transforming ideas into reality. Our mission is to provide innovative, high-quality solutions that meet the diverse needs of our clients. With a passion for excellence and a commitment to customer satisfaction, we are dedicated to offering the best products and services tailored specifically to your needs.

                    We specialize in describe your main product/service, aiming to simplify your industry-specific task or problem. Our team of experts is driven by creativity, collaboration, and a relentless pursuit of innovation. Whether you're looking for specific services/products, we are here to guide you every step of the way.

                    What Sets Us Apart?

                    Expertise: With years of experience in the industry, we bring in-depth knowledge and a fresh perspective to every project.
                    Customer-Centric: We put our clients first, listening closely to your needs and delivering results that exceed expectations.
                    Innovation: We embrace new technologies and trends, ensuring that you always have access to the latest solutions.
                    Quality: We prioritize quality in everything we do, ensuring that all our products and services meet the highest standards.
                    Our Values

                    Integrity: We uphold the highest standards of honesty and transparency in all our interactions.
                    Innovation: We constantly push the boundaries to create solutions that drive success.
                    Collaboration: We work as a team, leveraging each other's strengths to achieve the best results.
                    Sustainability: We are committed to creating solutions that are not only effective but also environmentally responsible.
                    Our Vision

                    To be a global leader in industry, known for our innovative solutions, exceptional service, and commitment to excellence.

                    Thank you for choosing your Company Name. We look forward to working with you!

                    </p>

                    <div className='progress-block'>
                        <h4> HTML / CSS / JAVASCRIPT</h4>
                        <ProgressBar now={html} label={`${html}%`} />
                    </div>
                    <div className='progress-block'>
                        <h4>RESPONSIVE</h4>
                        <ProgressBar now={responsive} label={`${responsive}%`} />
                    </div>
                    <div className='progress-block'>
                        <h4>PHOTOSHOP</h4>
                        <ProgressBar now={photoshop} label={`${photoshop}%`} />
                    </div>
                </Col>
                </Row>
            </Container>
        </section>
    )
}