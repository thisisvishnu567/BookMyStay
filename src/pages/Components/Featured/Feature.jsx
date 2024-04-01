<<<<<<< HEAD
import React from 'react';
import './feature.css';
import logo1 from './sweden.jpg';
import logo2 from './germany.jpg';
import logo3 from './den2.jpg';
import logo4 from './switz.jpg';

const Feature = () => {
  return (
    <section className='featured'>
      <div className="featuredItem">
        <img src={logo1} alt="PIC1" className="FeatureImg" />
        <div className="featuredTitles">
          <h1>Sweden</h1>
          <h2>25 Things to do</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={logo2} alt="PIC2" className="FeatureImg" />
        <div className="featuredTitles">
          <h1>Germany</h1>
          <h2>12 Things to do</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={logo3} alt="PIC3" className="FeatureImg" />
        <div className="featuredTitles">
          <h1>Denmark</h1>
          <h2>46 Things to do</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={logo4} alt="PIC4 " className="FeatureImg" />
        <div className="featuredTitles">
          <h1>Switzerland</h1>
          <h2>34 Things to do</h2>
        </div>
      </div>
    </section>
  );
}

export default Feature;
=======
import './feature.css';
import logo1 from './Pic1.jpg'
import logo2 from './pic6.jpg'
import logo3 from './Pic3.jpg'
import logo4 from './pic4.jpg'

const Feature = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
          <img src={logo1} alt="PIC1" className="FeatureImg" />
          <div className="featuredTitles">
            <h1>Coimbatore</h1>
            <h2>123 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src={logo2} alt="PIC2" className="FeatureImg" />
          <div className="featuredTitles">
            <h1>Chennai</h1>
            <h2>12 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src={logo3} alt="PIC3" className="FeatureImg" />
          <div className="featuredTitles">
            <h1>Puducherry</h1>
            <h2>54 properties</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img src={logo4} alt="PIC4 " className="FeatureImg" />
          <div className="featuredTitles">
            <h1>Salem</h1>
            <h2>34 properties</h2>
          </div>
        </div>
    </div>
  );
}

export default Feature;
>>>>>>> 107386e2c56d5dde13920e4917298ac6fabd25ad
