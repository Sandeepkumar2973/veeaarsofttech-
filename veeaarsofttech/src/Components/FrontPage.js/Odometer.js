// Odometer.js
import React, { useEffect, useRef, useState } from 'react';
import Odometer from 'odometer'; // Import Odometer library
import 'odometer/themes/odometer-theme-default.css'; // Import Odometer default theme CSS

const OdometerComponent = ({ initialValue }) => {
  const odometerRef = useRef(null);
  const [value, setValue] = useState(initialValue || 0);

  useEffect(() => {
    const loadOdometer = async () => {
      if (typeof Odometer === 'undefined') {
        // Load Odometer library dynamically
        await import('odometer');
        // Initialize Odometer
        new Odometer(odometerRef.current);
      }
    };

    loadOdometer();

    const intervalId = setInterval(() => {
      setValue((prevValue) => prevValue + 100);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Run once on component mount

  useEffect(() => {
    // Update the Odometer value
    const odometerInstance = new Odometer({
      el: odometerRef.current,
      value: value || 0,
    });

    // You might not need to call destroy or remove
    // odometerInstance.destroy(); // or odometerInstance.remove();

    // If the above line doesn't work, you might not need any cleanup

    return () => {
      // Cleanup when the component is unmounted (if necessary)
      // odometerInstance.destroy(); // or odometerInstance.remove();
    };
  }, [value]);

  return <div ref={odometerRef}></div>;
};

export default OdometerComponent;
