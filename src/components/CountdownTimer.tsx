
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = '' }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0
    };

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeDisplay = [
    { value: timeLeft.dias, label: "DIAS" },
    { value: timeLeft.horas, label: "HORAS" },
    { value: timeLeft.minutos, label: "MIN" },
    { value: timeLeft.segundos, label: "SEG" }
  ];

  return (
    <div className={`flex justify-center space-x-3 md:space-x-4 ${className}`}>
      {timeDisplay.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-white rounded-lg shadow-md w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold text-yebatech-blue">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs mt-1 text-yebatech-lightText font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
