import React, { useEffect, useState } from "react";

const SkillsSlider = ({ title, percentage }) => {
  const [animate, setAnimate] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    let animationTimeout;

    if (animate) {
      let counter = 0;
      const step = percentage / 50;

      animationTimeout = setInterval(() => {
        counter += step;
        setCurrentPercentage(Math.min(counter, percentage));
      }, 20);
    }

    return () => {
      clearInterval(animationTimeout);
    };
  }, [animate, percentage]);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 5);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className="">
      <div className="flex justify-between">
        <p className="font-bold text-xl">{title}</p>
        <p>{`${Math.round(currentPercentage)}%`}</p>
      </div>
      <div className="h-2 rounded-md bg-[#ffffff4b] relative">
        <div
          style={{
            width: `${currentPercentage}%`,
            transition: "width 1s",
          }}
          className="absolute rounded-md top-0 left-0 h-full bg-white"
        ></div>
      </div>
    </div>
  );
};

export default SkillsSlider;
