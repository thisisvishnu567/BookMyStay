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