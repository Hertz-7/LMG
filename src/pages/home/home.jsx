import React from 'react';
import { useNavigate } from 'react-router-dom';
import LMGNavbar from '../../components/navbar/navbar';
import Homecarousel from '../../components/carousel/carousel';
import ArtistCard from '../../components/artistcard/artistcard';
import CaseCard from '../../components/casestudycard/casestudycard';
import Banner from '../../components/banner/banner';
import OptionCard from '../../components/optioncard/optioncard';
import Seeallbtn from '../../components/seeall/seeall';
import Footer from '../../components/footer/footer';
import InfoSection from '../../components/infosec/infosec';

import 'bootstrap/dist/css/bootstrap.min.css';
import A1 from "../../assets/Artist Images/Justin TimberLake.png";
import A2 from "../../assets/Artist Images/Shakira.png";
import A3 from "../../assets/Artist Images/IMagine Dragons.png";
import A4 from "../../assets/Artist Images/ICE SPICE.png";
import A5 from "../../assets/Artist Images/Chris Brown.png";
import A6 from "../../assets/Artist Images/BMTH.png";
import A7 from "../../assets/Artist Images/30 Seconds to Mars.png";
import A8 from "../../assets/Artist Images/INCUBUS.png";
import A9 from "../../assets/Artist Images/Jhene.png";
import A10 from "../../assets/Artist Images/SLIPKNOT.png";
import A11 from "../../assets/Artist Images/Usher.png";
import A12 from "../../assets/Artist Images/THE WEEKND.png";
import A13 from "../../assets/Previous Artists/Jojo Siwa.png";
import A14 from "../../assets/Previous Artists/5SOS.png";
import A15 from "../../assets/Previous Artists/Machine Gun Kelly.png";
import A16 from "../../assets/Previous Artists/Nicki.png";
import A17 from "../../assets/Previous Artists/The ChainSmokers.png";
import L1 from "../../assets/BRAND IMAGES/BACARDI.png";
import L2 from "../../assets/BRAND IMAGES/DBD.png";
import L3 from "../../assets/BRAND IMAGES/DISNEP.png";
import L4 from "../../assets/BRAND IMAGES/AEW.png";
import O1 from "../../assets/BRAND BLACK.png";
import O2 from "../../assets/MIC WHITE.png";
import O3 from "../../assets/SPONSORSHIP BLACK.png";
import O4 from "../../assets/GAMING.png";
import O5 from "../../assets/CONTACT BLACK.png";

const options = [
  { name: 'Partner With Us', image: O1 , route: '/contactus' },
  { name: 'Meet The Artists', image: O2 , route: '/artists' },
  { name: 'Investment Opportunities', image: O3 , route: '/contactus' },
  // { name: 'Love Gaming', image: O4 , route: '/contactus' },
  // { name: 'Contact Us', image: O5, route:'/contactus' },
];

const casestudies = [
  // { name: 'BACARDI X NICKI MINAJ', image: L1 },
  { name: 'DEAD BY DAYLIGHT X SLIPKNOT', image: L2 },
  { name: 'DISNEY X 5SOS', image: L3 },
  { name: 'AEW X DOJA CAT', image: L4 },
];

const artists = [
  { name: 'THE WEEKND', image: A12, route: '/theweeknd' },
  { name: 'JUSTIN TIMBERLAKE', image: A1, route: '/justintimberlake' },
 // { name: 'SHAKIRA', image: A2, route: '/shakira' },
  // { name: 'Usher', image: A11, route: '/usher' },
  { name: 'IMAGINE DRAGONS', image: A3, route: '/imaginedragons' },
  { name: 'ICE SPICE', image: A4, route: '/icespice' },
  // { name: 'CHRIS BROWN', image: A5, route: '/chrisbrown' },
 // { name: 'JHENE AIKO', image: A9, route: '/jheneaiko' },
  { name: '30 SECONDS TO MARS', image: A7, route: '/thirtysecondstomars' },
 // { name: 'INCUBUS', image: A8, route: '/incubus' },
  { name: 'SLIPKNOT', image: A10, route: '/slipknot' },
  { name: 'BMTH', image: A6, route: '/bmth' },
];

const previousArtists = [ // to be added
  { name: 'JOJO SIWA', image: A13, route: '/jojosiwa' },
  { name: '5SOS', image: A14, route: '/5sos' },
  { name: 'THE MACHINE GUN KELLY', image: A15, route: '/machinegunkelly' },
  { name: 'NICKI MINAJ', image: A16, route: '/nickiminaj' },
  { name: 'THE CHAINSMOKERS', image: A17, route: '/thechainsmokers' },

];

function App() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <LMGNavbar />
      <Homecarousel />
      <InfoSection />
      <Banner title="ARTISTS" />
      <div className="bg-black flex justify-center items-center flex-wrap">
        {artists.map((artist, index) => (
          <div onClick={() => navigate(artist.route)}>
          <ArtistCard
            key={index}
            name={artist.name}
            image={artist.image}
            
          />
          </div>
        ))}
      </div>
      <div className="flex bg-black justify-center items-center p-6">
        <div onClick={() => navigate('/artists')}>
        <Seeallbtn  className="align-middle" />
        </div>
      </div>
      <Banner title="PREVIOUS ARTISTS" />
      <div className="bg-black flex justify-center items-center flex-wrap">
        {previousArtists.map((artist, index) => (
          <div onClick={() => navigate(artist.route)}>
          <ArtistCard
            key={index}
            name={artist.name}
            image={artist.image}
            
          />
          </div>
        ))}
      </div>
      <div className="flex bg-black justify-center items-center p-6">
        <div onClick={() => navigate('/artists')}>
        <Seeallbtn  className="align-middle" />
        </div>
      </div>

      <Banner title="CASE STUDIES" />
      <div className="flex bg-black justify-center items-center flex-wrap">
        {casestudies.map((casestudy, index) => (
          <div onClick={() => navigate('/casestudies')}>
          <CaseCard
            key={index}
            name={casestudy.name}
            image={casestudy.image}
            
          /></div>
        ))}
      </div>
      <div className="flex bg-black justify-center items-center">
        <div onClick={() => navigate('/casestudies')} > <Seeallbtn  className="align-middle" /></div>
      </div>
      <div className="bg-gradient-to-b flex justify-center items-center flex-wrap">
        {options.map((option, index) => (
          <div  onClick={() => navigate(option.route)}>
          <OptionCard
            key={index}
            name={option.name}
            image={option.image}
           
          /></div>
        ))}
        <a className='no-underline' href='https://lovemusicgaming.com/'>
          <OptionCard
            name={'Love Gaming'}
            image={O4}
           
          /></a>
          <div  onClick={() => navigate('/contactus')}>
          <OptionCard
            name={'Contact Us'}
            image={O5}
           
          /></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
