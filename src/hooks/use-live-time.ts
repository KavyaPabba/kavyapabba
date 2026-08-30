import { useEffect, useState } from "react";

const useLiveTime = () => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return time.toLocaleTimeString("en-GB", { hour12: false });
};

export default useLiveTime;
