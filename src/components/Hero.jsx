import Carousel from 'react-bootstrap/Carousel'; 

var heroData = [
    {
      id: 1,
      image: require('../assets/images/img-hero1.jpg'),
      title: 'The perfect design for your website',
      description: 'Discover the ideal design solution for your website. Our creative team delivers visually stunning and user-friendly designs that enhance your brand’s presence. From modern aesthetics to seamless user experience, we’ve got it all covered!',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: require('../assets/images/img-hero2.jpg'),
      title: 'Start Your Future Financial Plan',
      description: 'Take control of your financial future today. Our expert financial planning services help you create a personalized strategy to achieve your goals, from saving for retirement to managing investments. Start building a secure and prosperous future now!',

      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: require('../assets/images/img-hero3.jpg'),
      title: 'Enjoy the Difference',
      description: 'Experience the change that makes all the difference. Whether it’s our superior service, innovative approach, or exceptional results, we’re here to help you elevate your experience and enjoy the benefits of something truly unique.',

      link: 'https://www.twitter.com'
    }
  ]
  


export default function AppHero() {
    return(
        <section id='home' className="hero-block">
            
            <Carousel fade >
                {
                    heroData.map(hero => {
                        return(
                            <Carousel.Item key={hero.id}>
                                <img
                                className="d-block w-100"
                                src={hero.image}
                                alt={"Slide" + hero.id}
                                />
                                <Carousel.Caption>
                                    <h5>{hero.title}</h5>
                                    <p>{hero.description}</p>
                                    <a className='btn btn-primary'href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            
                            
                        )
                    })
                }
                
            </Carousel>
        </section>
    )
}