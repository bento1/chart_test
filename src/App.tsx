import React from 'react';
import LineChart from './lineChart';
import ScatterChart from './scatterChart';
import BasicDateRangeCalendar from './dayPickerRange';
// import ScatterChart from './scatterChart';


function App() {
  return (
    <>
        <div>
          <BasicDateRangeCalendar />
        </div>
        <div>
        <ScatterChart/>
        </div>
        <div>
        <LineChart/>
        </div>
    </>


  );
}

export default App;
