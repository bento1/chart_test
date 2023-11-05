import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function dayPicker() {
    return (
        <LocalizationProvider dateAdapter={AdapterLuxon}>
            <DatePicker />
        </LocalizationProvider>
);
}