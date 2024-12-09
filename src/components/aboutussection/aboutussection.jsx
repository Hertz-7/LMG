import React from 'react';
import backgroundImage from '../../assets/BACKGROUND.png'; // Replace with your actual path
import emailIcon from '../../assets/MAIL RED.png'; // Replace with your actual path
import linkedinIcon from '../../assets/LINKEDIN RED.png'; // Replace with your actual path
import instagramIcon from '../../assets/INSTA RED.png'; // Replace with your actual path
import facebookIcon from '../../assets/FB RED.png'; // Replace with your actual path

const whatwedo =[{
  title :"BRAND PARTNERSHIPS",
  text :" Connecting brands with fans in the epicenter of the music scene – concerts and festivals. Our goal? To create unforgettable moments where brands and music collide in perfect harmony."
},
{
  title :"EVENT INTEGRATION",
  text :" Our expertise lies in seamlessly blending brands into the fabric of music events, ensuring maximum impact and visibility so that your message resonates harmoniously with the audience experience."
},
{
  title :"CUSTOM SOLUTIONS",
  text :" We pride ourselves on crafting tailor-made partnership opportunities that speak directly to diverse audiences, ensuring brand alignment and resonance."
},

]

const InfoSection = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-32 text-center  border-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        <p className="mb-4 text-sm md:text-xl">
        Love Music Global is your premier destination for connecting brands with the pulsating 
        energy of live music. We specialize in curating unforgettable experiences by seamlessly 
        integrating forward-thinking brands into iconic live music events, fostering authentic 
        connections fueled by passion and creativity        
        </p>
        <p className="text-center pt-24 -mb-20 text-3xl  md:text-5xl font-bold">
            What we do
        </p>

        
            { whatwedo.map((item) => {
              return (
                <div className="">
                  <p className="text-center pt-24 text-xl   md:text-4xl font-bold ">{item.title}</p>
                  <p className="mb-4 text-base md:text-2xl">{item.text}</p>
                </div>
              );
              })}
        
      </div>
    </div>
  );
};

export default InfoSection;
