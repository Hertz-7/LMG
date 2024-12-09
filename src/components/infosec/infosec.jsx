import React from 'react';
import backgroundImage from '../../assets/BACKGROUND.png'; // Replace with your actual path
import emailIcon from '../../assets/MAIL RED.png'; // Replace with your actual path
import linkedinIcon from '../../assets/LINKEDIN RED.png'; // Replace with your actual path
import instagramIcon from '../../assets/INSTA RED.png'; // Replace with your actual path
import facebookIcon from '../../assets/FB RED.png'; // Replace with your actual path

const InfoSection = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-32 text-center border-t-2 border-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4 text-xl">
        <h1 className=" font-bold mb-4  text-base md:text-2xl">
          Welcome to Love Music Global, where we unite brands with the universal language of music!
        </h1>
        <p className="mb-4 text-sm md:text-xl">
          At LMG, our passion lies in blending brands with the electrifying power of music across Europe, North America, and Asia. We create electrifying collaborations between top artists and forward-thinking brands, bringing your message to the world’s most iconic stages.
        </p>
        <p className="mb-4 text-sm md:text-xl">
          Experience the thrill of unforgettable live events and dynamic brand content that engage and inspire. Immerse yourself in the excitement and watch your brand’s story transform into extraordinary musical moments.
        </p>
        <p className="mb-8 text-sm md:text-xl">Stay tuned for our latest updates and exclusive content.</p>
        <div className="flex justify-center mb-4">
          <a href='mailto:contactus@lovemusicglobal.com'><img src={emailIcon}  alt="Email" className="mx-2 w-10" /></a>
          <a href='https://www.linkedin.com/company/love-music-tours'><img src={linkedinIcon} alt="LinkedIn" className="mx-2 w-10" /></a>
          <a href='https://www.instagram.com/lovemusicglobal_official/'><img src={instagramIcon} alt="Instagram" className="mx-2 w-10" /></a>
          <a href=''><img src={facebookIcon} alt="Facebook" className="mx-2 w-10" /></a>
        </div>
        <p className='text-base md:text-2xl font-bold'>Let’s make magic together!</p>
      </div>
    </div>
  );
};

export default InfoSection;
