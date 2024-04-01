<<<<<<< HEAD
import './propertyList.css';
import Logo1 from './hotel.jpg';
import Logo2 from './cabin.jpg';
import Logo3 from './villa.jpg';
import Logo4 from './apt4.jpg';

const propertyList = () => {
  return (
    <div className='PList'>
        <div className="pListItem">
            <img src={Logo1} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Hotels </h1>
                <h2> 33 variants</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Logo2} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Cabins </h1>
                <h2> 21 variants</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Logo3} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Villas </h1>
                <h2> 12 variants</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Logo4} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Apartments </h1>
                <h2> 103 variants</h2>
            </div>
        </div>
    </div>
  )
}

=======
import './propertyList.css';
import Logo1 from './Pic1.jpg';
import Logo2 from './pic6.jpg';
import Logo3 from './pic5.jpg';
import Logo4 from './pic4.jpg';

const propertyList = () => {
  return (
    <div className='PList'>
        <div className="pListItem">
            <img src={Logo1} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Hotels </h1>
                <h2> 233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Logo2} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Cabins </h1>
                <h2> 233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Logo3} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Villas </h1>
                <h2> 233 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Logo4} alt="Pic1" className="pListImg" />
            <div className="pListTitles">
                <h1> Apartments </h1>
                <h2> 233 Hotels</h2>
            </div>
        </div>
    </div>
  )
}

>>>>>>> 107386e2c56d5dde13920e4917298ac6fabd25ad
export default propertyList;