import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { DateTime } from 'luxon';
import { useState } from "react";

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

export default function BasicDateRangeCalendar() {
    const [selectedDates, setSelectedDates] = useState<Date[]>([new Date(), new Date()]);
    
    
    return (
        <>
            <RangeDatepicker
            selectedDates={selectedDates}
            onDateChange={setSelectedDates}
            defaultIsOpen={true} />
        </>

    );
}