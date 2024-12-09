import LMGNavbar from '../../components/navbar/navbar';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import InfoSection from '../../components/aboutussection/aboutussection';
import AboutUsCard from '../../components/aboutuscard/aboutuscard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CaseCard from '../../components/casestudycard/casestudycard';
// import L1 from "../../assets/BRAND IMAGES/BACARDI.png";
// import L2 from "../../assets/BRAND IMAGES/DBD.png";
import L1 from "../../assets/Mike.png";
import L2 from "../../assets/Paul.png";
import L3 from "../../assets/LEN NICHOLSON.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const whatwedo =[{
    title :"BRAND PARTNERSHIPS",
    text :" Connecting brands with fans in the epicenter of the music scene – concerts and festivals. Our goal? To create unforgettable moments where brands and music collide in perfect harmony."
},
{
    title :"EVENT INTEGRATION",
    text :" Our expertise lies in seamlessly blending brands into the fabric of music events, ensuring maximum impact and visibility so that your message resonates harmoniously with the audience experience."
},
{
    title :"CUSTOM SOLUTIONS",
    text :" We pride ourselves on crafting tailor-made partnership opportunities that speak directly to diverse audiences, ensuring brand alignment and resonance."
},

]
const casestudies = [
  { name: 'MIKE MIRZA', image: L1 },
  { name: 'PAUL SIMON', image: L2 },
  {name : 'LENNY NICHOLSON', image: L3}
];


function App() {
  return (
    <div className="home ">
     <LMGNavbar />
     <div className="border-t-2 border-white"></div>
      <Banner  title="ABOUT US" />
      <InfoSection />

        {/* <div className=" max-w-full flex ">
           { whatwedo.map((item) => {
            return (
              <AboutUsCard className="w-1/3" title={item.title} text={item.text} />
            );
            })}
        </div> */}
        <Container className='bg-black '>
                <Row className='align-items-center '>
                    <Col xs={12} lg={6} className="bg-black ">
                        <CaseCard className="max-w-60" name={casestudies[0].name} image={casestudies[0].image} />
                    </Col>
                    <Col xs={12} lg={6} className="bg-black  text-white text-left justify-center align-middle">
                        <p className="text-gotham text-4xl text-left font-bold mb-4">PRESIDENT AND CEO</p>
                        <p className="text-gotham ">Love Music’s founder Mike Mirza is an industry mogul, 
                                  having consecutively worked side-by-side with the biggest 
                                  names in music over the course of his calling in numerous 
                                  entertainment capacities. His traveling is almost on par with 
                                  all of our touring artists combined, though he is based 
                                  between his two favorite cities; London and Los Angeles. 
                                  Mike’s vision continues to support global artists and leading 
                                  brands in what they do best, and elevate Love Music as the 
                                  leader in multi-platform music brand partnerships the world 
                                  over.</p>
                    </Col>
                    
                </Row>
                <Row className=' align-items-center'>
                    <Col xs={12} lg={6} className="bg-black">
                        <CaseCard className="max-w-60" name={casestudies[1].name} image={casestudies[1].image} />
                    </Col>
                    <Col xs={12} lg={6} className="bg-black text-white text-left justify-center align-middle">
                    <p className="text-gotham text-4xl text-left font-bold mb-4">HEAD OF PARTNERSHIPS</p>
                        <p className="text-gotham ml--96">In music, Paul has always found his métier with near

                              20 years of professional experience in the heart of 

                              the entertainment industry. From artist, to music 

                              management, to head of partnerships in boutique 

                              agencies, he is an unremitting strategic thinker 

                              with a proven track-record of delivering 

                              comprehensive and successful partnerships in the 

                              music, sport and cultural arenas. By fostering 

                              some of the most trusted relationships with major 

                              talent partners, Paul’s zeal for authentic brand 

                              connections inspires our Love for Music.</p>
                    </Col>
                </Row>
                <Row className='align-items-center '>
                    <Col xs={12} lg={6} className="bg-black ">
                        <CaseCard className="max-w-60" name={casestudies[2].name} image={casestudies[2].image} />
                    </Col>
                    <Col xs={12} lg={6} className="bg-black  text-white text-left justify-center align-middle">
                        <p className="text-gotham text-4xl text-left font-bold mb-4">CHIEF OPERATING OFFICER</p>
                        <p className="text-gotham ">Love Music's COO Lenny Nicholson is an industry powerhouse, having consistently collaborated with the biggest names in music throughout his illustrious fifteen-year career in various entertainment capacities. His expertise spans every sector of the music industry, from A&R to marketing, making him a true veteran of the business. While he calls the boardrooms of major labels his second home, Lenny's influence extends from New York to Los Angeles and beyond. Lenny's vision continues to shape the careers of global artists and guide leading brands in what they do best, all while cementing his reputation as a highly respected and effective executive in the ever-evolving realm of entertainment.

                        </p>
                    </Col>
                    
                </Row>
                
            </Container>
    <Footer />
    </div>
  );
}

export default App;
