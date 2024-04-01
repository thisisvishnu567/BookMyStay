<<<<<<< HEAD
import './featuredProperties.css';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFeaturedPropertiesData } from '../../../sever';
import { Rating } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FeaturedProperties = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredPropertiesData, setFeaturedPropertiesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef();
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetchFeaturedPropertiesData();
      setFeaturedPropertiesData(prevData => [...prevData, ...response.data]);
      setCurrentPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching featured properties data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = () => {
    if (
      containerRef.current &&
      containerRef.current.scrollWidth - containerRef.current.scrollLeft === containerRef.current.clientWidth
    ) {
      if (!loading && currentPage <= 1) {
        fetchData();
      }
    }
  };

  const handleButtonClick = () => {
    navigate('/more-items');
  };

  return (
    <div ref={containerRef} onScroll={handleScroll} style={{ overflowX: 'auto', whiteSpace: 'nowrap', maxWidth: '100%' }}>
      <ul className='fp'>
        {featuredPropertiesData.map((item, index) => (
          <li key={index}>
            <div className="fpItem">
              <img src={item.image} alt="reload" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from {item.price}</span>
              <div className="fpRating">
                <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
              </div>
            </div>
          </li>
        ))}
        {loading && <p>Loading...</p>}
        {currentPage > 1 && (
          <div className="scroll-to-more-button" onClick={handleButtonClick}>
            <ArrowForwardIcon style={{ fontSize: 36, color: '#000', cursor: 'pointer' }} />
          </div>
        )}
      </ul>
    </div>
  );
};

export default FeaturedProperties;
 
=======
import './featuredProperties.css';
import Pic1 from "./pic5.jpg";
import Pic3 from "./Pic1.jpg";
import Pic2 from "./pic6.jpg";
import Pic4 from "./Pic3.jpg";
import { Rating } from '@mui/material';

const Featuredproperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src={Pic1} alt="" className="fpImg" />
            <span className="fpName">Vivanta Taj</span>
            <span className="fpCity">Coimbatore</span>
            <span className="fpPrice">Starting from ₹15,000</span>
            <div className="fpRating">
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly/>
            </div>
        </div>
        
        <div className="fpItem">
            <img src={Pic2} alt="" className="fpImg" />
            <span className="fpName">Vivanta Taj</span>
            <span className="fpCity">Coimbatore</span>
            <span className="fpPrice">Starting from ₹15,000</span>
            <div className="fpRating">
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            </div>
        </div>

        <div className="fpItem">
            <img src={Pic3} alt="" className="fpImg" />
            <span className="fpName">Vivanta Taj</span>
            <span className="fpCity">Coimbatore</span>
            <span className="fpPrice">Starting from ₹15,000</span>
            <div className="fpRating">
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            </div>
        </div>

        <div className="fpItem">
            <img src={Pic4} alt="" className="fpImg" />
            <span className="fpName">Vivanta Taj</span>
            <span className="fpCity">Coimbatore</span>
            <span className="fpPrice">Starting from ₹15,000</span>
            <div className="fpRating">
                <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
            </div>
        </div>
    </div>
  )
}

export default Featuredproperties
>>>>>>> 107386e2c56d5dde13920e4917298ac6fabd25ad
