import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function CustomDayOfWeekFormat() {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="custom-day-of-week-format">
      <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
        
        <DemoItem label={'"day"'}>
          <DateCalendar views={['day']} />
        </DemoItem>
        
      </DemoContainer>
      </div>
    </LocalizationProvider>
  );
}



