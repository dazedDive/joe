import '../DateSelector/DateSelector.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const DateSelector = () => {
    const [value, onChange] = useState(new Date());   

    const HandleClick=(value) => {
        alert('Week End du : ', new Date(value))
    }

    const disabledDates = [new Date(2024, 0, 1)];

    function tileDisabled({ date, view }) {
     // Disable tiles in month view only
    if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of disabled dates
    return disabledDates.find(dDate => (dDate, date));
        }
    }



  return (
    <div className="container">
        <div className="row">

            <div class="col-6">
                <h1>Selectionnez un week-end</h1>
            </div>
        
            <div class="col-6">
            <Calendar 
            className="shadow p-3 mb-5 bg-body rounded"
            onChange={onChange} 
            value={value} 
            maxDate={new Date(2024, 0, 1)}
            minDate={new Date(2023, 0, 2)}
            showWeekNumbers={true}
            onClickWeekNumber={HandleClick}
            tileDisabled={tileDisabled}
            />
            
            </div>
        
        </div>
    </div>
  );
};

export default DateSelector