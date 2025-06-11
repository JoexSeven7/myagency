import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
  {
    id: 1,
    image: require('../assets/images/blog1.jpg'),
    time: '15 Nov 2025',
    title: 'Coffee Lovers',
    description:
      'Discover the rich aroma and cultural beauty of coffee. From beans to brew, dive into the world every coffee lover dreams of.',
    link: 'https://www.google.com',
  },
  {
    id: 2,
    image: require('../assets/images/blog2.jpg'),
    time: '10 Nov 2025',
    title: 'Tips for UI Design',
    description:
      'Master the art of user interface design with practical tips and creative ideas to enhance your next digital project.',
    link: 'https://www.facebook.com',
  },
  {
    id: 3,
    image: require('../assets/images/blog3.jpg'),
    time: '07 Nov 2025',
    title: 'Beautiful Day',
    description:
      'Embrace the little things that make each day special. A reflection on calm mornings, fresh air, and peaceful moments.',
    link: 'https://www.twitter.com',
  },
];

export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href={blog.link} className="btn btn-primary">
                        Read More <i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
