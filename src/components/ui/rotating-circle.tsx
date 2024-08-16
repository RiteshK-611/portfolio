import React from "react";

const RotatingCircle = () => {
  const boxes = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center -z-10">
      <div className="absolute w-full h-full flex justify-center items-center bottom-[25%]">
        {boxes.map((index) => (
          <div
            key={index}
            className="absolute w-[110px] h-[110px] bg-white/10 rounded-[15px] backdrop-blur-[10px] border border-white/20"
            style={{
              transformOrigin: "center 650px",
              transform: `rotate(calc(360deg / 24 * ${index})) translateY(-250px)`,
              animation: `rotate 30s linear infinite`,
              animationDelay: `calc(-30s / 24 * ${index})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingCircle;
