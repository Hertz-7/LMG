import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../assets/IMAGE.png';
import vid1 from '../../assets/Justin Timberlake.mp4';
function Homecarousel() {
  return (
    <Carousel className='border-t-2 border-white'>
      <Carousel.Item interval={5000}>
        
        <video className="d-block w-100" autoPlay loop muted>
          <source src={vid1} type="video/mp4" />
        </video>
        
      </Carousel.Item>
      <Carousel.Item interval={5000}>

      <video className="d-block w-100" autoPlay loop muted>
          <source src={vid1} type="video/mp4" />
        </video>
        
      </Carousel.Item>
      <Carousel.Item interval={5000}> 

      <video className="d-block w-100" autoPlay loop muted>
          <source src={vid1} type="video/mp4" />
        </video>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Homecarousel;