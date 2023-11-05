import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BasicDateRangeCalendar from './dayPickerRange';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <div>
      <BasicDateRangeCalendar />
    </div>
    <div>
      <h1>"EQP"</h1>
    </div>
    <div>
      <h1>"RECIPEID"</h1>
    </div>
    <div>
      <h1>"PROCESSID"</h1>
    </div>
    <div>
      <h1>"STEPSEQ"</h1>
    </div>
    
    <div>
      <App />
    </div>
  </>
);

