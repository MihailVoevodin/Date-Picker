import React, {useState} from 'react';
import {RangePicker} from 'components/RangePicker/RangePicker';
import commonStyles from 'App.module.scss';


function App() {
    const [startDate, setStartDate] = useState<Date>(() => new Date())
    const [endDate, setEndDate] = useState<Date>(() => new Date(new Date().setMinutes(new Date().getMinutes() + 15)))

  return (
    <div className={commonStyles.App}>
      <h1>Date Picker</h1>
      <RangePicker startDate={startDate} endDate={endDate} onStartDateChange={setStartDate} onEndDateChange={setEndDate} />
    </div>
  );
}

export default App;
