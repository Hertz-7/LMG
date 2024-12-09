import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import Img1 from '../../assets/IMAGE.png';
import vid1 from '../../assets/animations/JUSTIN.mp4';
//import vid3 from '../../assets/animations/Shakira.mp4';
import vid4 from '../../assets/animations/BMTH.mp4';
import vid5 from '../../assets/animations/ICE SPICE.mp4';
import vid6 from '../../assets/animations/IMAGINE DRAGONS.mp4';
import vid7 from '../../assets/animations/Jhene.mp4';
import vid8 from '../../assets/animations/30 Seconds to Mars.mp4';
import vid9 from '../../assets/animations/SLIPKNOT.mp4';
import vid10 from '../../assets/animations/Usher.mp4';
import vid11 from '../../assets/animations/Incubus.mp4';
import vid12 from '../../assets/animations/THE WEEKND.mp4';

//import vid9 from '../../assets/animations/Nicki.mp4';


function Homecarousel() {
  const navigate = useNavigate();
  return (
    <Carousel className='border-t-2 border-white' interval={null}>
      <Carousel.Item interval={null}>
        <video className="d-block w-100" autoPlay loop muted onClick={() => {navigate('/theweeknd')}}>
          <source src={vid12} type="video/mp4" />
        </video>
      </Carousel.Item>

      <Carousel.Item interval={null}>
        <video className="d-block w-100" autoPlay loop muted onClick={() => {navigate('/justintimberlake')}}>
          <source src={vid1} type="video/mp4" />
        </video>
      </Carousel.Item >
      
      <Carousel.Item interval={null}>
        <video className="d-block w-100" autoPlay loop muted onClick={() => {navigate('/bmth')}}>
          <source src={vid4} type="video/mp4" />
        </video>
      </Carousel.Item>
      
      <Carousel.Item interval={null}>
        <video className="d-block w-100" autoPlay loop muted onClick={() => {navigate('/icespice')}}>
          <source src={vid5} type="video/mp4" />
        </video>
      </Carousel.Item>
      
      <Carousel.Item interval={null}>
        <video className="d-block w-100" autoPlay loop muted onClick={() => {navigate('/imaginedragons')}}>
          <source src={vid6} type="video/mp4" />
        </video>
      </Carousel.Item>
      
      <Carousel.Item interval={null}>
        <video className="d-block w-100" autoPlay loop muted onClick={() => {navigate('/jheneaiko')}}>
          <source src={vid7} type="video/mp4" />
        </video>
      </Carousel.Item>
      
      <Carousel.Item interval={null}>
        <video className="d-block w-100" autoPlay loop muted onClick={() => {navigate('/thirtysecondstomars')}}>
          <source src={vid8} type="video/mp4" />
        </video>
      </Carousel.Item>
      
      <Carousel.Item interval={null}>
        <video className="d-block w-100" autoPlay loop muted onClick={() => {navigate('/slipknot')}}>
          <source src={vid9} type="video/mp4" />
        </video>
      </Carousel.Item>
{/*       
      <Carousel.Item interval={null}>
        <video className="d-block w-100" autoPlay loop muted onClick={() => {navigate('/usher')}}>
          <source src={vid10} type="video/mp4" />
        </video>
      </Carousel.Item> */}
      
      <Carousel.Item interval={null}>
        <video className="d-block w-100" autoPlay loop muted onClick={() => {navigate('/incubus')}}>
          <source src={vid11} type="video/mp4" />
        </video>
      </Carousel.Item>
    </Carousel>
  );
}

export default Homecarousel;