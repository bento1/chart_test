import { Box } from "@chakra-ui/react";
import { RangeCalendarPanel } from "chakra-dayzed-datepicker";
import { DateObj } from "dayzed";
import { useState } from "react";
import { format } from 'date-fns';

// type DateTime = luxon.DateTime;

// function getDate(props : DateRange<DateTime>): void{
//     const DATETIME_ISO_FORMAT_START = "yyyy-MM-dd HH:mm:ss";
//     const DATETIME_ISO_FORMAT_END = "yyyy-MM-dd 23:59:59";
//     if (props[0]){
//         const start_date : DateTime  =props[0]
//         const start_date_string = start_date.toFormat(DATETIME_ISO_FORMAT_START);

//         console.log(start_date_string)
//     }

//     if (props[1]){
//         const end_date : DateTime  =props[1]
//         const end_date_string = end_date.toFormat(DATETIME_ISO_FORMAT_END);

//         console.log(end_date_string)
//     }



// }
export const Month_Names_Full = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const Month_Names_Short = [
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec',
];

export const Weekday_Names_Short = [
'Sun',
'Mon',
'Tue',
'Wed',
'Thu',
'Fri',
'Sat',
];
export default function BasicDateRangeCalendar() {
    const [selectedDates, setSelectedDates] = useState<Date[]>([new Date(), new Date()]);

    const handleOnDateSelected = (selectable:DateObj) => {
        let newDates = [...selectedDates];
        const date= selectable.date;
        if (selectedDates.length) {
            if (selectedDates.length === 1) {
                let firstTime = selectedDates[0];
                if (firstTime < date) {
                    newDates.push(date);
                } else {
                    newDates.unshift(date);
                }
                setSelectedDates(newDates);
                return;
            }

            if (newDates.length === 2) {
                setSelectedDates([date]);
                return;
            }
            } else {
                newDates.push(date);
                setSelectedDates(newDates);
            }
            };
    let intVal = selectedDates[0]
    ? `${format(selectedDates[0], 'yyyy-MM-dd')}`
    : '';
    intVal += selectedDates[1]
    ? ` - ${format(selectedDates[1], 'yyyy-MM-dd')}`
    : '';
    
    return (
        <>
            <Box>{intVal}</Box>
            <RangeCalendarPanel
            selected={selectedDates}
            dayzedHookProps={{
                showOutsideDays: false,
                onDateSelected: (e:DateObj)=>handleOnDateSelected(e),
                selected: selectedDates,
                monthsToDisplay: 2,
            }}
            configs={{
            monthNames:Month_Names_Short, dayNames:Weekday_Names_Short,
            dateFormat: 'yyyy-MM-dd',
            firstDayOfWeek: 0,
            }}
            />
        </>

    );
}