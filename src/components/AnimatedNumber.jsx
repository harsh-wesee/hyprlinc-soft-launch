import { useState, useEffect } from "react";

const AnimatedNumber = ({ endValue, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let start = 0;
      const end = parseInt(endValue);
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
  
      const timer = setInterval(() => {
        start += increment;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
  
      return () => clearInterval(timer);
    }, [endValue, duration]);
  
    return (
      <div className="mb-1 text-4xl font-semibold bg-gradient-to-r from-[#153885] to-[#007AFF] text-transparent bg-clip-text">
        {count}
        {suffix}
      </div>
    );
  };

  export default AnimatedNumber;