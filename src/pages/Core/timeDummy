import React, { useState, useEffect, useTransition } from "react";

const Timer = ({ delayResend }) => {
  let delayResendTime = delayResend * 86400;
  const [delay, setDelay] = useState(+delayResendTime);
  const [days, setDays] = useState(0);
  const [hours, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const timer = setInterval(() => {
      startTransition(() => {
        setDelay(delay - 1);
        setDays(Math.floor(delay / 86400));
        setHour(Math.floor(delay / 3600));
        setMinutes(Math.floor(delay / 60));
        setSeconds(Math.floor(delay % 60));
      });
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <span>
        {days} :{hours} : {minutes}:{seconds}
      </span>
    </>
  );
};

export default Timer;
