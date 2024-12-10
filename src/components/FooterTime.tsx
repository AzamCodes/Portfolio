"use client";
import { useEffect, useState } from "react";
import moment from "moment-timezone";

const FooterTime = () => {
  const [visitorTime, setVisitorTime] = useState("");
  const [timeZoneAbbreviation, setTimeZoneAbbreviation] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Get the user's time zone
      const userTimeZone = moment.tz.guess();

      // Format the time and extract the abbreviation
      const currentTime = moment().tz(userTimeZone).format("hh:mm:ss A");
      const abbreviation = moment().tz(userTimeZone).format("z"); // Get abbreviation

      setVisitorTime(currentTime);
      setTimeZoneAbbreviation(abbreviation);
    };

    updateTime(); // Initialize immediately
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  return (
    <div className="text-white">
      {/* <h1 className="font-bold text-base mb-2">Time</h1> */}
      <p className="text-xs md:text-sm">
        {visitorTime} ({timeZoneAbbreviation})
      </p>
    </div>
  );
};

export default FooterTime;
