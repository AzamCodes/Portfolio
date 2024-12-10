"use client";

import { useEffect, useState } from "react";
import moment from "moment-timezone";

const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Update the date based on the user's time zone or set to a specific one
    const userTimeZone = "Asia/Kolkata"; // Mumbai's time zone

    const updateDate = () => {
      const formattedDate = moment()
        .tz(userTimeZone)
        .format("dddd, DD MMMM YYYY");
      setCurrentDate(formattedDate);
    };

    updateDate(); // Initialize immediately
    const interval = setInterval(updateDate, 1000 * 60); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="text-white flex-col md:flex-row font-agrandirTextBold flex items-end  md:items-center justify-end gap-2 md:gap-4 text-[14px]">
      <span>{currentDate}</span>
      <span className="justify-end ">Mumbai, Maharashtra</span>
    </div>
  );
};

export default DateDisplay;
