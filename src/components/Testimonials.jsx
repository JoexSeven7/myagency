import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description:
      'Working with this team has been a game-changer. Their innovative approach and dedication to excellence helped transform our project into a resounding success. I couldn’t be happier with the results.',
    designation: 'Manager',
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description:
      'I was impressed with their attention to detail and professionalism. They exceeded our expectations by delivering a seamless experience and exceptional results. Highly recommend their services!',
    designation: 'Accountant',
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description:
      'Their expertise and ability to think outside the box made a significant impact on our business growth. They delivered beyond expectations, and their support was second to none.',
    designation: 'CEO',
  },
];

export default function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel>
          {testimonialsData.map((testimonials) => {
            return (
              <Carousel.Item key={testimonials.id}>
                <blockquote>
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className="name">{testimonials.name}</span>
                    <span className="designation">
                      {testimonials.designation}
                    </span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}
