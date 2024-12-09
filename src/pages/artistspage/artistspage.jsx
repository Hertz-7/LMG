import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import LMGNavbar from '../../components/navbar/navbar';
import Footerlmg from '../../components/footer/footer';
//import { addTourDate, getTourDates, clearTourDates } from './indexedDB';
import initialData from './tourdates.json'; // Import the JSON file
import Banner from '../../components/banner/banner';
import backgroundImage from '../../assets/BACKGROUND.png'; // Replace with your actual path
import emailIcon from '../../assets/MAIL RED.png'; // Replace with your actual path
import linkedinIcon from '../../assets/LINKEDIN RED.png'; // Replace with your actual path
import instagramIcon from '../../assets/INSTA RED.png'; // Replace with your actual path
import facebookIcon from '../../assets/FB RED.png'; // Replace with your actual path


const TourDates = ({name,info,video,previousArtist}) => {
  const [continent, setContinent] = useState('');
  const [city, setCity] = useState('');
  const [tourDates, setTourDates] = useState([]);
  const [filteredDates, setFilteredDates] = useState([]);
  const [continents, setContinents] = useState([]);
  const [cities, setCities] = useState([]);

  // const fetchTourDates = async () => {
  //   try {
  //     const dates = await getTourDates();
  //     if (dates.length === 0) {
  //       // Load initial data from JSON file
  //       for (const date of initialData) {
  //         await addTourDate(date);
  //       }
  //       const updatedDates = await getTourDates();
  //       setTourDates(updatedDates);
  //       extractContinentsAndCities(updatedDates);
  //     } else {
  //       setTourDates(dates);
  //       extractContinentsAndCities(dates);
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch tour dates:", error);
  //   }
  // };

  const extractContinentsAndCities = (dates) => {
    const uniqueContinents = [...new Set(dates.map(date => date.continent))];
    const uniqueCities = [...new Set(dates.map(date => date.city))];
    setContinents(uniqueContinents);
    setCities(uniqueCities);
  };

  useEffect(() => {
    // fetchTourDates();
    //console.log(initialData);
    extractContinentsAndCities(initialData);
    setTourDates(initialData);
  }, []);

  const handleSearch = () => {
    const filtered = tourDates.filter(
      (date) => 
        (continent ? date.continent === continent : true) && 
        (city ? date.city === city : true) && (
          name ? date.artist === name : true
        )
    );
    setFilteredDates(filtered);
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <LMGNavbar />
        <video className="d-block w-100" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div
          className="bg-cover bg-center text-white py-32 text-center border-t-2 border-white"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="container mx-auto px-4 flex justify-center flex-col items-center">
            <a href='/contactus' className='bg-gradient-redblack text-xl md:text-4xl text-inherit no-underline border-solid rounded-xl border-2 py-2 px-2 mb-5 max-w-96'>
              PARTNER WITH US
            </a>
            <p className="mb-4 text-xl">
              {info}
            </p>
            <div className="flex justify-center mb-4">
              <img src={emailIcon} alt="Email" className="mx-2 w-10" />
              <img src={linkedinIcon} alt="LinkedIn" className="mx-2 w-10" />
              <img src={instagramIcon} alt="Instagram" className="mx-2 w-10" />
              <img src={facebookIcon} alt="Facebook" className="mx-2 w-10" />
            </div>
          </div>
        </div>
        { !previousArtist && <><Banner title="TOUR DATES" />
        <div className="flex flex-col items-center justify-center w-full py-8">
          <div className="flex flex-wrap justify-start align-middle items-start  mb-4 gap-2 ml-20 md:ml-0 ">
            <div className='flex justify-between min-w-60 md:min-w-0'>
            <label>Continent:</label>
              <select value={continent} onChange={(e) => setContinent(e.target.value)} className="bg-black text-white border border-white w-3/5 md:w-fit">
                <option value="">-Select-</option>
                {continents.map(cont => (
                  <option key={cont} value={cont}>{cont}</option>
                ))}
              </select>
            </div>
            <div  className='flex justify-between min-w-60 md:min-w-0'>
              <label>City:</label>
              <select value={city} onChange={(e) => setCity(e.target.value)} className="bg-black text-white border border-white w-3/5 md:w-fit">
                <option value="">-Select-</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <button onClick={handleSearch} className="bg-gradient-redblack border-1 text-white px-5 py-2  mt--12 md:-mt-3 rounded">Search</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredDates.map((date) => (
              <div key={date.date} className="border border-white rounded-xl flex-col justify-center items-center text-center">
                <h2 className="text-2xl bg-gradient-redblack rounded-t-xl">{date.city}, {date.state}</h2>
                <p className="text-6xl font-bold py-4">{date.date}</p>
                <p className="mb-0 text-2xl bg-gradient-redblack rounded-b-xl">{date.venue}</p>
              </div>
            ))}
          </div>
        </div></>}
        <Footerlmg />
      </div>
    </>
  );
};

export default TourDates;
