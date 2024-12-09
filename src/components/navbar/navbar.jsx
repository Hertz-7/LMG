import { useNavigate ,Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/Transparent LOGO.png';
import Lines from '../../assets/3Lines.png';
import './navbar.css';

function LMGNavbar() {
  const navigate = useNavigate();

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} style={{ background: 'linear-gradient(to right, #b31217, #000000)' }} className=" py-2">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className="flex items-center">
              <img src={logo3} alt="Logo 1" className="navbar-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <img src={Lines} alt="Menu" className="navbar-toggle-img" />
            </Navbar.Toggle>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="burger-menu text-4xl font-bold bg-gradient-redblack-top "
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-white">
                  <button className='text-left hover:text-gray-400 '  onClick={() => navigate('/')}>HOME</button>
                  <button className='text-left hover:text-gray-400 '  onClick={() =>{navigate('/artists');}}>ARTISTS</button>
                  <button className='text-left hover:text-gray-400 '  onClick={() => navigate('/casestudies')} >CASE STUDIES</button>
                  <button className='text-left hover:text-gray-400 '  onClick={() => navigate('/aboutus')}>ABOUT US</button>
                  <button className='text-left hover:text-gray-400 '  onClick={() => navigate('/contactus')} >CONTACT US</button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default LMGNavbar;
