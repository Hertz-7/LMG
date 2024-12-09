import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CaseCard from '../../components/casestudycard/casestudycard';
import L1 from "../../assets/BRAND IMAGES/BACARDI.png";
import L2 from "../../assets/BRAND IMAGES/DBD.png";
import L3 from "../../assets/BRAND IMAGES/DISNEP.png";
import L4 from "../../assets/BRAND IMAGES/AEW.png";
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/footer';
import LMGNavbar from '../../components/navbar/navbar';

import './casestudies.css';  // Make sure to import the CSS file

const casestudies = [
    { name: 'BACARDI X NICKI MINAJ', image: L1 },
    { name: 'DEAD BY DAYLIGHT X SLIPKNOT', image: L2 },
    { name: 'DISNEY X 5SOS', image: L3 },
    { name: 'AEW X DOJA CAT', image: L4 },
];

function CasePage({ image, name }) {
    return (
        <>
            <LMGNavbar />
            <div className="border-t-2 border-white"></div>
            <Banner title="CASE STUDIES" />
            <Container className='bg-black mt-24'>
                {/* <Row className='align-items-center mb-4'>
                    <Col xs={12} lg={6} className="bg-black  text-white text-left justify-center align-middle">
                        <p className="text-gotham text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nisi eget vehicula euismod, ligula libero tincidunt nulla, et elementum urna sapien at nunc.</p>
                    </Col>
                    <Col xs={12} lg={6} className="bg-black custom-padding">
                        <CaseCard className="max-w-60" name={casestudies[0].name} image={casestudies[0].image} />
                    </Col>
                </Row> */}
                <Row className=' align-items-center mb-2 '>
                    <Col xs={12} lg={6} className="bg-black">
                        <CaseCard className="max-w-60 " name={casestudies[1].name} image={casestudies[1].image} />
                    </Col>
                    <Col xs={12} lg={6} className="bg-black text-white text-left justify-center align-middle">
                        <p className="text-gotham md:text-xl text-sm   md:p-0 px-4">Slipknot, the legendary heavy metal band known for their intense performances and distinctive masks, partnered with the horror video game Dead by Daylight through Love Music Global. This collaboration brought Slipknot's dark energy into the game, featuring custom skins, masks, and music tracks that enhanced the eerie atmosphere. A high-energy promotional video showcased the synergy between Slipknot's music and the game’s horror elements. Strategic in-game ads ensured maximum visibility, boosting engagement for Dead by Daylight and reinforcing Slipknot’s presence in the gaming community. This partnership highlights Love Music Global's expertise in creating impactful brand collaborations.
                        </p>
                    </Col>
                </Row>
                <Row className='align-items-center mb-2'>
                    <Col xs={12} lg={6} className="bg-black ">
                        <CaseCard className="max-w-60 " name={casestudies[2].name} image={casestudies[2].image} />
                    </Col>
                    <Col xs={12} lg={6} className="bg-black  text-white text-left justify-center align-middle">
                        <p className="text-gotham md:text-xl text-sm  md:p-0 px-4">5 Seconds of Summer, the band that keeps winning our hearts over and over, teamed up with Disney in a vibrant collaboration. The partnership featured exclusive Disney-themed performances during 5SOS concerts, incorporating iconic Disney songs and visuals into the band’s setlist.
                        This creative integration provided fans with a unique, nostalgic experience that seamlessly married 5SOS’s music with Disney's timeless charm. The collaboration enhanced concert-goers' experience by blending familiar Disney melodies with the band’s signature sound, creating a magical concert atmosphere.
                        This partnership proved to be a hit, offering fans a one-of-a-kind musical journey while solidifying the promotional prowess of both 5SOS and Disney in captivating diverse audiences.</p>
                    </Col>
                    
                </Row>
                <Row className=' align-items-center mb-2'>
                    <Col xs={12} lg={6} className="bg-black">
                        <CaseCard className="max-w-60 " name={casestudies[3].name} image={casestudies[3].image} />
                    </Col>
                    <Col xs={12} lg={6} className="bg-black text-white text-left justify-center align-middle">
                        <p className="text-gotham md:text-xl text-sm  md:p-0 px-4 " >Doja Cat, renowned for her dynamic performances and eclectic style, perfectly complements AEW’s high-energy branding. In a strategic move by Love Music Global, the "Paint the Town Red" video package promoting AEW's Women’s Division premiered before Doja Cat's concerts, blending seamlessly into the pre-show excitement. This collaboration not only amplified the concert experience but also spotlighted AEW’s commitment to empowering women, enhancing visibility and engagement among Doja Cat’s diverse, energetic fanbase. This partnership showcases Love Music Global's ability to craft innovative, resonant brand experiences within the entertainment industry.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default CasePage;
