import React, { useState } from "react";
// import {Calendar as Cl} from 'react-calendar'
// npm install react-calendar
const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      {/* <Cl value={value} onChange={onChange} /> */}
    </div>
  );
};

export default Calendar;
