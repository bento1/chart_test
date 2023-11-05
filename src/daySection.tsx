
// import React from 'react';
// import BasicDateRangeCalendar from './dayPickerRange';

// import { useState } from "react";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardContent from "@mui/material/CardContent";
// import Container from "@mui/material/Container";
// import IconButton from "@mui/material/IconButton";
// import Collapse from "@mui/material/Collapse";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";



// export default function daySection() {
//     const [open, setOpen] = useState(false);
//     return (
//     <>
//         <Card sx={{ minWidth: 300, border: "1px solid rgba(211,211,211,0.6)" }}>
//         <CardHeader
//             title="Expand Me!"
//             action={
//             <IconButton
//                 onClick={() => setOpen(!open)}
//                 aria-label="expand"
//                 size="small"
//             >
//                 {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//             </IconButton>
//             }
//         >
//         </CardHeader>
//         <div style={{ backgroundColor: 'rgba(211,211,211,0.4)'}}>
//         <Collapse in={open} timeout="auto" unmountOnExit>
//             <CardContent>
//             <Container sx={{ height: 36, lineHeight: 2 }}>This is the Card Content Area
//                 <BasicDateRangeCalendar/>
//             </Container>
//             </CardContent>
//         </Collapse>
//         </div>
//         </Card>
//     </>
//     );
// }