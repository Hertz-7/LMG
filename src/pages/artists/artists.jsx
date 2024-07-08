import LMGNavbar from '../../components/navbar/navbar';
import ArtistCard from '../../components/artistcard/artistcard';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';

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

const artists = [
  { name: 'Justin Timberlake', image: A1 },
  { name: 'Shakira', image: A2 },
  { name: 'Usher', image: A11 },
  { name: 'Imagine Dragons', image: A3 },
  { name: 'Ice Spice', image: A4 },
  { name: 'Jhene Aiko', image: A9 },
  { name: 'Chris Brown', image: A5 },
  { name: 'Slipknot', image: A10 },
  { name: '30 Seconds to Mars', image: A7 },
  { name: 'Incubus', image: A8 },
  { name: 'BMTH', image: A6 },
];
function App() {
  return (
    <div className="home ">
     <LMGNavbar />
     <div className="border-t-2 border-white"></div>
      <Banner   title="ARTISTS" />
        <div className="bg-black flex justify-center items-center flex-wrap">
          {artists.map((artist, index) => (
            <ArtistCard key={index} name={artist.name} image={artist.image} />
          ))}
        </div>

        <Footer />
    </div>
  );
}

export default App;
