import * as React from "react";
// import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const CalendarCmp = () => {
  return (
    <div className="p-4 ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem>
            <DateCalendar />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};
export default CalendarCmp;
// import  { useState } from 'react';
// import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

// import {scheduleData} from "../utils/constant"
// // import { Header } from '../components';

// // eslint-disable-next-line react/destructuring-assignment
// const PropertyPane = (props:any) => <div className="mt-5">{props.children}</div>;

// const CalendarCmp = () => {
//   const [scheduleObj, setScheduleObj] = useState<any>();

//   const change = (args:any) => {
//     scheduleObj.selectedDate = args.value;
//     scheduleObj.dataBind();
//   };

//   const onDragStart = (arg:any) => {
//     // eslint-disable-next-line no-param-reassign
//     arg.navigation.enable = true;
//   };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       {/* <Header category="App" title="Calendar" /> */}
//       <ScheduleComponent
//         height="650px"
//         ref={(schedule) => setScheduleObj(schedule)}
//         selectedDate={new Date(2021, 0, 10)}
//         eventSettings={{ dataSource: scheduleData }}
//         dragStart={onDragStart}
//       >
//         <ViewsDirective>
//           { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} />)}
//         </ViewsDirective>
//         <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
//       </ScheduleComponent>
//       <PropertyPane>
//         <table
//           style={{ width: '100%', background: 'white' }}
//         >
//           <tbody>
//             <tr style={{ height: '50px' }}>
//               <td style={{ width: '100%' }}>
//                 <DatePickerComponent
//                   value={new Date(2021, 0, 10)}
//                   showClearButton={false}
//                   placeholder="Current Date"
//                   floatLabelType="Always"
//                   change={change}
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </PropertyPane>
//     </div>
//   );
// };

// export default CalendarCmp;
