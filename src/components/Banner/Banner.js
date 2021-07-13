import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./Banner.css";
const Banner = () => {
  const [time, setTime] = useState({});
  const [date, setDate] = useState("");
  const TEXT = "< SPE / FRONT END >";

  useEffect(() => {
    const getTime = () => {
      const today = new Date();
      const hour = today.getHours();
      const minute = today.getMinutes();
      const second = today.getSeconds();
      setTime({ today, hour, minute, second });
      setDate(format(today, "PPP"));
    };

    var timerID = setInterval(() => getTime(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return (
    <div id="banner-container">
      <div id="square" style={{ display: "flex" }}>
        <h1 style={{ fontSize: "80px", float: "bottom", color: "#00FF00", marginLeft: "80px" }}>{TEXT}</h1>
      </div>
      <div className="date-container">
        <p className="text">{TEXT}</p>
        <p className="text-date">{`${date} - ${time.hour}: ${time.minute} : ${time.second}`}</p>
      </div>
    </div>
  );
};

export default Banner;
