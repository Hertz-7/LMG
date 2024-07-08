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
                <Row className='align-items-center mb-4'>
                    <Col xs={12} lg={6} className="bg-black  text-white text-left justify-center align-middle">
                        <p className="text-gotham">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, nisi eget vehicula euismod, ligula libero tincidunt nulla, et elementum urna sapien at nunc.</p>
                    </Col>
                    <Col xs={12} lg={6} className="bg-black custom-padding">
                        <CaseCard className="max-w-60" name={casestudies[0].name} image={casestudies[0].image} />
                    </Col>
                </Row>
                <Row className='m-24 align-items-center'>
                    <Col xs={12} lg={6} className="bg-black">
                        <CaseCard className="max-w-60" name={casestudies[1].name} image={casestudies[1].image} />
                    </Col>
                    <Col xs={12} lg={6} className="bg-black text-white text-left justify-center align-middle">
                        <p className="text-gotham">The legendary heavy metal band, known for their intense performances and distinctive masks, partnered with the horror video game Dead by Daylight. Facilitated by Love Music Global, this collaboration brought Slipknot's dark, theatrical energy into the gaming world.
                As part of the campaign, Slipknot's branding and music were seamlessly integrated into the game, enhancing its eerie atmosphere. Custom skins, masks, and music tracks from Slipknot were featured, creating a unique and immersive crossover event. We also produced a high-energy promotional video showcasing the intense synergy between Slipknot's music and Dead by Daylight's horror elements.
                The collaboration included prime in-game airtime with 30-second and 90-second ads played at key moments, ensuring maximum visibility and engagement. This strategic placement aligned Slipknot’s brand with the thrilling, immersive experience of the game.
                This partnership significantly boosted engagement metrics for Dead by Daylight, attracting a wider audience and enhancing player experience. It also reinforced Slipknot’s presence in the gaming community, demonstrating Love Music Global's expertise in creating impactful and memorable brand experiences. As we continue to innovate, our work with Slipknot and Dead by Daylight highlights our commitment to delivering creative and engaging brand collaborations, seamlessly blending music and gaming.</p>
                    </Col>
                </Row>
                <Row className='align-items-center mb-4'>
                    <Col xs={12} lg={6} className="bg-black  text-white text-left justify-center align-middle">
                        <p className="text-gotham">Known for their energetic performances and global fanbase, 5SOS is a band that blends rock and pop, creating electrifying concert experiences. Their tours are synonymous with high energy, making them an ideal partner for dynamic brands.
                In a strategic collaboration, Love Music Global connected Diesel with 5 Seconds of Summer, integrating Diesel’s ads throughout their tour, including major venues like Pier 17. Diesel’s ads were prominently displayed during 5SOS’s concerts, seamlessly fitting into the high-energy atmosphere and reaching a broad audience.
                To amplify this partnership, we created a promotional video that highlighted the collaboration between Diesel and 5SOS, capturing the essence of both the brand and the band. This video, along with the in-concert advertisements, provided Diesel with significant visibility and engagement, aligning their brand with the vibrant spirit of 5SOS’s performances.
                This collaboration not only enhanced Diesel’s brand presence but also showcased Love Music Global's ability to create impactful and memorable brand experiences. The partnership 
                highlighted our expertise in music marketing, demonstrating how we bring brands and artists together to create extraordinary moments.</p>
                    </Col>
                    <Col xs={12} lg={6} className="bg-black custom-padding">
                        <CaseCard className="max-w-60" name={casestudies[2].name} image={casestudies[2].image} />
                    </Col>
                </Row>
                <Row className='m-24 align-items-center'>
                    <Col xs={12} lg={6} className="bg-black">
                        <CaseCard className="max-w-60" name={casestudies[3].name} image={casestudies[3].image} />
                    </Col>
                    <Col xs={12} lg={6} className="bg-black text-white text-left justify-center align-middle">
                        <p className="text-gotham">The genre-bending artist, celebrated for hits like "Say So" and "Kiss Me More," teamed up with BMW for a unique campaign during her concert tour. Love Music Global facilitated this exciting collaboration, bringing BMW's innovative ads directly to Doja Cat's vibrant audience.
                We provided BMW with prime airtime, featuring 30-second and 90-second ads played three times just before Doja Cat took the stage. This strategic timing ensured BMW’s message resonated perfectly with the concertgoers, aligning the brand with Doja Cat's adventurous and dynamic persona.
                The collaboration created an immersive experience, where BMW's sleek and modern ads set the tone for Doja Cat’s electrifying performances. This partnership significantly enhanced BMW's visibility and engagement, showcasing Love Music Global's expertise in crafting impactful brand integrations within the music industry. As Doja Cat danced and sang to her chart-topping hits, BMW's presence reinforced the brand's innovative and stylish image, captivating a diverse and energetic audience.
                As we continue to bridge the gap between brands and artists, our work with Doja Cat and BMW exemplifies our commitment to delivering creative and engaging brand experiences. This partnership not only highlighted BMW’s forward-thinking approach but also underscored Doja Cat’s influence and appeal across diverse demographics, making every concert an unforgettable fusion of music and brand storytelling.</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default CasePage;
