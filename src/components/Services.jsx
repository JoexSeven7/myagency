import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
    {
      id: 1,
      icon: 'fas fa-pen-nib',
      title: 'Responsive Design',
      description: 'Ensures your website adapts to any screen size, providing an optimal viewing experience.'
    },
    {
      id: 2,
      icon: 'fas fa-handshake',
      title: 'Creative Design',
      description: 'Innovative and visually striking design solutions to help your brand stand out in a crowded market.'
    },
    {
      id: 3,
      icon: 'fas fa-plug',
      title: 'SEO Optimized',
      description:'Designed to improve your websites visibility and ranking on search engines, boosting traffic.'
    },
    {
      id: 4,
      icon: 'fas fa-database',
      title: 'Retina Ready',
      description:'High-quality, sharp visuals that ensure your site looks stunning on high-definition screens.'
    },
    {
      id: 5,
      icon: 'fas fa-trophy',
      title: 'Brower Compatibility',
      description:'Your site will function smoothly across all major browsers, offering a consistent user experience.'
    },
    {
      id: 6,
      icon: 'fas fa-comments',
      title: 'Customer Support',
      description: 'Dedicated support to assist you with any technical issues, ensuring seamless operations.'
    },
  ]
  


export default function AppServices() {
    return (
        <section id="services" className='block services-block'> 
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Services</h2>
                    <div className='subtitle'>Services we provide</div>
                </div>
               
                <Row>
                    {
                        servicesData.map(services => {
                            return(
                                <Col sm={4} className='holder' key={services.id}>
                                    <div className='icon'>
                                        <i className={services.icon}></i></div>
                                    <h3>{services.title}</h3>
                                    <p>{services.description}</p>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </Container>
      </section>
    )
}