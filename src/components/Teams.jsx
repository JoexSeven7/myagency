import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const teamsData = [
   
        {
          id: 1,
          image: require('../assets/images/team1.jpg'),
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Gabriel Hart',
          designation: 'CEO',
          description: 'A visionary leader with a proven track record of driving growth and innovation, Gabriel is dedicated to empowering teams and fostering success.'
        },
        {
          id: 2,
          image: require('../assets/images/team2.jpg'),
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'David Antony',
          designation: 'Manager',
          description: 'With years of experience in team management, David excels at streamlining operations and ensuring seamless collaboration across all departments.'
        },
        {
          id: 3,
          image: require('../assets/images/team3.jpg'),
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Nicholas Perry',
          designation: 'UX Designer',
          description: 'Nicholas brings creativity and user-centric design expertise, crafting intuitive experiences that delight and engage customers.'
        },
        {
          id: 5,
          image: require('../assets/images/team5.jpg'),
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Sophia Pitt',
          designation: 'Developer',
          description: 'Sophia is a skilled developer who combines technical knowledge and innovative thinking to deliver robust and scalable solutions.'
        },
        {
          id: 6,
          image: require('../assets/images/team6.jpg'),
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Taylor Lopez',
          designation: 'Developer',
          description: 'Taylor specializes in creating efficient, high-quality code, with a passion for solving complex challenges and building powerful applications.'
        },
        {
          id: 7,
          image: require('../assets/images/team7.jpg'),
          fbLink: 'https://www.facebook.com',
          twitterLink: 'https://www.twitter.com',
          linkedinLink: 'https://www.linkedin.com',
          name: 'Ryan Giggs',
          designation: 'Content Writer',
          description: 'Ryan crafts compelling content that captures brand voice, engages audiences, and drives meaningful connections across platforms.'
        }
      
  ]


export default function AppTeams(){
    return(
        <section id='teams' className='block teams-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our teams</h2>
                    <div className='subtitle'>some of our exparts</div>
                </div>

        <Row>
            {
                    teamsData.map(teams =>{
                            return (
                <Col sm={3} key={teams.id}>
                    <div className='image'>
                        <Image src={teams.image} alt="image"/>
                        <div className='overlay'>
                            <div className='socials'>
                                <ul>
                                    <li><a href={teams.fbLink}><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href={teams.twitterLink}><i class='fab fa-twitter'></i></a></li>
                                    <li><a href={teams.linkedinLink}><i class='fab fa-linkedin-in'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <h3>{teams.name}</h3>
                        <span className='designation'>{teams.designation}</span>
                        <p>{teams.description}</p>
                    </div>
                </Col>
                        )
                    })
            }
        </Row>
    </Container>
        </section>
    )
}