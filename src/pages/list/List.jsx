import { useState } from 'react';
import './list.css';
import NavBar from "../Components/navbar/Navbar";
import Header from "../Components/Header/Header";
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';


const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(location.state?.date || null);
  const [opendate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || null);

  return (
    <div>
      <NavBar />
      <Header type='list' />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type='text'/>
            </div>
            <div className='lsItem'>
              <label>Check-In Date </label>
              <span onClick={() => setOpenDate(!opendate)}>
                {date && `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {opendate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  ranges={date}
                />
              )}
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
