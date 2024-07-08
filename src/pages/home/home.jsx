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
  { name: 'Partner With Us', image: O1 },
  { name: 'Meet The Artists', image: O2 },
  { name: 'Investment Opportunities', image: O3 },
  { name: 'Love Gaming', image: O4 },
  { name: 'Contact Us', image: O5 },
];

const casestudies = [
  { name: 'BACARDI X NICKI MINAJ', image: L1 },
  { name: 'DEAD BY DAYLIGHT X SLIPKNOT', image: L2 },
  { name: 'DISNEY X 5SOS', image: L3 },
  { name: 'AEW X DOJA CAT', image: L4 },
];


const artists = [
  { name: 'Justin Timberlake', image: A1 },
  { name: 'Shakira', image: A2 },
  { name: 'Usher', image: A11 },
  { name: 'Imagine Dragons', image: A3 },
  { name: 'Ice Spice', image: A4 },
  { name: 'Chris Brown', image: A5 },
  { name: 'BMTH', image: A6 },
  { name: '30 Seconds to Mars', image: A7 },
  { name: 'Incubus', image: A8 },
  { name: 'Jhene Aiko', image: A9 },
  { name: 'Slipknot', image: A10 },
];
function App() {
  return (
    <div className="home ">
     <LMGNavbar />
      <Homecarousel />
      <InfoSection />
      <Banner  title="ARTISTS" />
        <div className="bg-black flex justify-center items-center flex-wrap">
          {artists.map((artist, index) => (
            <ArtistCard key={index} name={artist.name} image={artist.image} />
          ))}
        </div>

        <div className="flex bg-black justify-center items-center p-6 ">
          <Seeallbtn className="align-middle" />
        </div>

        <Banner title="CASE STUDIES" />
        <div className=" flex bg-black justify-center items-center flex-wrap ">
          {casestudies.map((casestudy, index) => (
            <CaseCard key={index} name={casestudy.name} image={casestudy.image} />
          ))}
        </div>  

        <div className="flex bg-black justify-center items-center ">
          <Seeallbtn className="align-middle" />
        </div>

        <div className="bg-gradient-to-b flex justify-center items-center flex-wrap ">
          {options.map((option, index) => (
            <OptionCard key={index} name={option.name} image={option.image} />
          ))}
        </div>
        <Footer />
    </div>
  );
}

export default App;
