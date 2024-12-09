import LMGNavbar from '../../components/navbar/navbar';
import ArtistCard from '../../components/artistcard/artistcard';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import {useNavigate} from 'react-router-dom';
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
const artists = [
  { name: 'THE WEEKND', image: A12, route: '/theweeknd' },
  { name: 'JUSTIN TIMBERLAKE', image: A1, route: '/justintimberlake' },
 // { name: 'SHAKIRA', image: A2, route: '/shakira' },
  //{ name: 'USHER', image: A11, route: '/usher' },
  { name: 'IMAGINE DRAGONS', image: A3, route: '/imaginedragons' },
  { name: 'ICE SPICE', image: A4, route: '/icespice' },
  // { name: 'CHRIS BROWN', image: A5, route: '/chrisbrown' },
 // { name: 'JHENE AIKO', image: A9, route: '/jheneaiko' },
  { name: '30 SECONDS TO MARS', image: A7, route: '/thirtysecondstomars' },
  //{ name: 'INCUBUS', image: A8, route: '/incubus' },
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
    <div className="home ">
     <LMGNavbar />
     <div className="border-t-2 border-white"></div>
      <Banner   title="ARTISTS" />
        <div className="bg-black flex justify-center items-center flex-wrap">
          {artists.map((artist, index) => (
            <div onClick={()=>{ navigate(artist.route)}}>
            <ArtistCard key={index} name={artist.name} image={artist.image} />
            </div>
          ))}
        </div>
        <Banner title="PREVIOUS ARTISTS" />
        <div className="bg-black flex justify-center items-center flex-wrap">
          {previousArtists.map((artist, index) => (
            <div onClick={()=>{ navigate(artist.route)}}>
            <ArtistCard key={index} name={artist.name} image={artist.image} />
            </div>
          ))}
        </div>

        <Footer />
    </div>
  );
}

export default App;
