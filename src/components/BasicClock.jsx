import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';

export default function TimeClockAmPm() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimeClock defaultValue={dayjs('2022-04-17T15:30')} ampm={false} />
    </LocalizationProvider>
  );
}