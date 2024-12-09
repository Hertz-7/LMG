import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Artists from './pages/artists/artists';
import CasePage from './pages/casestudies/casestudies';
import AboutUs from './pages/aboutme/aboutme';
import ContactUs from './pages/contactus/contactus';
import  TourDates  from './pages/artistspage/artistspage';
import vid1 from './assets/animations/JUSTIN.mp4';
import vid2 from './assets/animations/Shakira.mp4';
import vid3 from './assets/animations/BMTH.mp4';
import vid4 from './assets/animations/Nicki.mp4';
import vid5 from './assets/animations/Usher.mp4';
import vid6 from './assets/animations/IMAGINE DRAGONS.mp4';
import vid7 from './assets/animations/Incubus.mp4';
import vid8 from './assets/animations/SLIPKNOT.mp4';
import vid9 from './assets/animations/30 Seconds to Mars.mp4';
import vid10 from './assets/animations/ICE SPICE.mp4';
import vid11 from './assets/animations/Jhene.mp4';
import vid12 from './assets/animations/THE WEEKND.mp4';
import vid13 from './assets/Previous Artists/Jojo Siwa.mp4';
import vid14 from './assets/Previous Artists/5SOS.mp4';
import vid15 from './assets/Previous Artists/Machine Gun Kelly.mp4';
import vid16 from './assets/Previous Artists/Nicki Minaj.mp4';
import vid17 from './assets/Previous Artists/The chainsmokers.mp4';



const artists = [
  {
    name: 'The Weeknd',
    info: 'The Weeknd is a genre-defying artist who has captivated global audiences with his enigmatic persona, soulful voice, and innovative sound. Emerging onto the music scene in the early 2010s, he quickly gained recognition for his hauntingly beautiful tracks and deeply introspective lyrics. With hits like "Blinding Lights" and "Can\'t Feel My Face," The Weeknd has transcended traditional genre boundaries, blending R&B, pop, and electronic music to create a style uniquely his own. Despite maintaining an air of mystery, his undeniable talent and relentless creativity have cemented his place as one of the most influential and forward-thinking artists in contemporary music. The Weeknd continues to push the boundaries of music and visual art, leaving an indelible mark on the industry and setting new standards for artistic expression.',
    video: vid12,
    Route: '/theweeknd',
  },
  {
    name: 'Justin Timberlake',
    info: `Justin Timberlake, a luminary in the realm of American music, stands as a versatile artist, singer-songwriter, and accomplished record producer. His journey began with the boy band sensation *NSYNC, and he seamlessly transitioned into a solo career marked by chart-topping hits like "Cry Me a River" and "SexyBack." Timberlake's influence extends beyond his captivating vocals, as he has proven his mettle as a visionary record producer, shaping the landscape of contemporary pop music. With a career characterized by innovation and enduring popularity, Justin Timberlake remains an icon in the entertainment industry.`,
    video: vid1,
    Route: '/justintimberlake',
  },
  {
    name: 'Shakira',
    info: `The unstoppable force of Latin music, dazzles the world with her captivating voice, electrifying performances, and undeniable charisma. Born and raised in Barranquilla, Colombia, Shakira has become a global superstar with her unique blend of Latin pop, rock, and dance. Iconic tracks like "Hips Don't Lie" and "Whenever, Wherever" have cemented her status as a music legend, known for her dynamic stage presence and distinctive voice. Beyond her music, Shakira is a passionate advocate for education and a dedicated philanthropist, making a profound impact through her charitable work. With numerous awards and a career spanning decades, Shakira continues to break barriers, inspire millions, and shape the future of music.`,
    video: vid2,
    Route: '/shakira',
  },
  {
    name: 'BMTH',
    info: `Bring Me The Horizon is a British rock band from Sheffield, Yorkshire. The band consists of lead vocalist Oliver Sykes, guitarist Lee Malia, bassist Matt Kean, drummer Matt Nicholls, and keyboardist Jordan Fish. They have released six studio albums and are known for their dynamic sound, which incorporates elements of metalcore, alternative rock, and electronic music. Some of their popular songs include "Can You Feel My Heart", "Drown", and "Mantra".`,
    video: vid3,
    Route: '/bmth',
  },
  // {
  //   name: 'Nicki Minaj',
  //   info: `Nicki Minaj is a Trinidadian-American rapper, singer, and songwriter. She gained recognition with her mixtapes "Playtime Is Over", "Sucka Free", and "Beam Me Up Scotty". Minaj's debut album, "Pink Friday", peaked at number one on the Billboard 200 chart. She is known for her animated rapping style and her versatility as an artist, blending hip hop, pop, and dance music. Her hits include "Super Bass", "Anaconda", and "Starships".`,
  //   video: vid4,
  //   Route: '/nickiminaj',
  // },
  // {
  //   name: 'Usher',
  //   info: `Usher is an internationally renowned artist and cultural icon, captivating audiences worldwide with his electrifying performances and chart-topping hits. With a career spanning decades, he has established himself as a multi-talented singer, songwriter, actor, and dancer. Usher’s influence extends beyond music, as he actively engages in philanthropy and entrepreneurship, making a positive impact on communities globally. Recognized for his exceptional talent and unparalleled stage presence, Usher continues to inspire and connect with audiences of all ages. Partnering with Usher offers brands a unique opportunity to align with a true visionary and tap into his global reach and cultural significance.`,
  //   video: vid5,
  //   Route: '/usher',
  // },
  {
    name: 'Imagine Dragons',
    info: `Imagine Dragons, a powerhouse in the world of alternative rock, have carved out a unique space with their anthemic sound and captivating performances. Emerging from the vibrant music scene of Las Vegas, this versatile band quickly rose to prominence with their breakout hit "It's Time," followed by chart-toppers like "Radioactive" and "Demons." Renowned for their dynamic stage presence and innovative approach to music, Imagine Dragons have continually pushed the boundaries of the genre, blending rock, pop, and electronic elements to create a distinct and influential sound. With a career marked by creativity and widespread acclaim, Imagine Dragons stand as enduring icons in the contemporary music landscape.`,
    video: vid6,
    Route: '/imaginedragons',
  },
  {
    name: 'Incubus',
    info: `Incubus stands as an enduring force in the realm of alternative rock, captivating audiences worldwide with their distinctive blend of musical prowess and introspective lyricism. With a career spanning decades, Incubus has masterfully crafted a sound that defies categorization, seamlessly weaving together elements of alternative rock, funk, metal, and hip hop. Their evolution as musicians has seen them transcend genre boundaries, leaving an indelible mark on the music landscape. Beyond their musical achievements, Incubus has embraced themes of introspection and social consciousness, using their platform to advocate for causes such as environmental sustainability and mental health awareness. Their commitment to positive change resonates deeply with their loyal fanbase, fostering a sense of connection and community. Renowned for their dynamic live performances and fearless innovation, Incubus continues to inspire listeners around the globe. Collaborating with Incubus offers brands a unique opportunity to align with a band that embodies creativity, authenticity, and a timeless appeal, reaching audiences across generations and cultures.`,
    video: vid7,
    Route: '/incubus',
  },
  {
    name: 'Slipknot',
    info: `Celebrating 25 years, Slipknot remains a metal powerhouse, defining the genre's raw intensity and creativity. From their explosive debut to genre-defying albums, they've shaped the essence of metal. Beyond the music, Slipknot embodies a sense of belonging and defiance against conformity, inviting fans to embrace their uniqueness through masks and personas. Their lyrics offer solace and empowerment, inspiring fans to navigate life's chaos with passion. As Slipknot marks this milestone, their legacy transcends music, profoundly impacting lives as a beacon of authenticity and inspiration. Their journey underscores music's enduring power to unite and empower individuals to embrace their true selves.`,
    video: vid8,
    Route: '/slipknot',
  },
  {
    name: '30STM',
    info: `Thirty Seconds to Mars, a dynamic force in alternative rock, have established themselves with their epic soundscapes and powerful performances. Fronted by the multifaceted Jared Leto, the band emerged with a distinct style that quickly garnered a dedicated following. Their breakout album, "A Beautiful Lie," featured hits like "The Kill" and "From Yesterday," showcasing their ability to blend introspective lyrics with expansive, cinematic music. Known for their ambitious concepts and visually stunning music videos, Thirty Seconds to Mars have continuously pushed the boundaries of rock music. With a career defined by artistic innovation and passionate fan engagement, they remain influential figures in the contemporary music scene.`,
    video: vid9,
    Route: '/thirtysecondstomars',
  },
  {
    name: 'Ice Spice',
    info: `Ice Spice, a rising star from the Bronx, has quickly made a name for herself with her raw talent and distinctive style. Captivating audiences with her authentic lyrics and magnetic presence, she has garnered attention with viral hits like "Munch (Feelin’ U)" and "Bikini Bottom." Beyond music, Ice Spice is a fashion icon and a voice for self-empowerment. Her unique style and fearless attitude inspire fans, challenging beauty standards and celebrating individuality. As an advocate for authenticity and self-expression, she continues to break barriers in the industry. With her undeniable talent and dedication, Ice Spice is poised to leave an indelible mark on the cultural landscape, proving herself as a true trailblazer.`,
    video: vid10,
    Route: '/icespice',
  },
  {
    name: 'Jhene Aiko',
    info: `Jhené Aiko is a versatile force in American music, excelling as both an artist and a skilled record producer. Emerging from the R&B scene, her soulful hits like "The Worst" resonate with captivating vocals and introspective lyrics. Aiko's innovative production style has reshaped the landscape of contemporary R&B, cementing her status as an influential figure in the industry. Beyond her musical prowess, Jhené Aiko's authenticity and creativity have made her a beloved icon. Her ability to transcend genres and connect with audiences on a profound level underscores her enduring influence in the ever-evolving world of music.`,
    video: vid11,
    Route: '/jheneaiko',
  },
];

const previousArtists = [
  {
    name: 'Jojo Siwa',
    video: vid13,
    route: '/jojosiwa',
    info:'JoJo Siwa, a vibrant star in the world of pop and entertainment, is celebrated for her infectious energy and dazzling personality. Known for her colorful style and catchy hits like "Boomerang," JoJo has become a beloved figure for fans of all ages. Her dynamic performances and positive message continue to make her a standout artist in the entertainment industry.'
  },
  {
    name: '5SOS',
    video: vid14,
    route: '/5sos',
    info:'5 Seconds of Summer, a dynamic force in pop-rock, is celebrated for their catchy melodies and engaging energy. With standout tracks such as "She Looks So Perfect" and "Youngblood," this Australian band brings a fresh and exciting edge to their music. Known for their lively performances and strong fan connection, 5SOS remains a significant presence in the global music scene.'
  },
  {
    name: 'Machine Gun Kelly',
    video: vid15,
    route: '/machinegunkelly',
    info:'Machine Gun Kelly, a genre-bending artist, is celebrated for his seamless integration of rock and rap. Known for his raw, emotive lyrics and dynamic tracks like "Bad Things" and "Bloody Valentine," MGK stands out as a versatile and innovative force in today’s music scene. His energetic performances and fearless approach to music continue to resonate with fans.'
  },
  {
    name: 'Nicki Minaj',
    video: vid16,
    route: '/nickiminaj',
    info: 'Nicki Minaj is a Trinidadian-American rapper, singer, and songwriter. She gained recognition with her mixtapes "Playtime Is Over", "Sucka Free", and "Beam Me Up Scotty". Minaj\'s debut album, "Pink Friday", peaked at number one on the Billboard 200 chart. She is known for her animated rapping style and her versatility as an artist, blending hip hop, pop, and dance music. Her hits include "Super Bass", "Anaconda", and "Starships".'
  },
  {
    name: 'The Chainsmokers',
    video: vid17,
    route: '/thechainsmokers',
    info: 'The Chainsmokers, a prominent duo in the EDM and pop landscape, are recognized for their genre-blending hits and vibrant sound. With chart-toppers like "Closer" and "Don\'t Let Me Down," they create infectious tracks that keep audiences dancing. Their ability to mix EDM with pop and indie influences makes them a leading force in contemporary music.'
  },
];


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/casestudies" element={<CasePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          {artists.map((artist, index) => (
            <Route key={index} path={artist.Route} element={<TourDates name={artist.name} info={artist.info} video={artist.video} />} />
          ))}
          {previousArtists.map((artist, index) => (
            <Route key={index} path={artist.route} element={<TourDates name={artist.name} info={artist.info} video={artist.video} previousArtist={true}/>} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
