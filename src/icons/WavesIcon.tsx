import React from "react";
const TAG = "";

type WavesIconProps = {
  width?: number;
};
const WavesIcon: React.FC<WavesIconProps> = ({ width = 500 }) => {
  const twidth = width * 7;
  const timeAnim = "5s";
  const distance = width * 0.8;
  const w3 =
    "M0 402c72 29.6 216 140.6 360 148 144 7.4 216-94.8 360-111 144-16.2 216 39.4 360 30 144-9.4 288-61.6 360-77v168H0z";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={twidth}
      height="500"
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
    >
      <g fill="none" mask='url("#SvgjsMask1325")'></g>
      <defs>
        <mask id="SvgjsMask1325">
          <path fill="#fff" d="M0 0H1440V560H0z"></path>
        </mask>
        <path
          id="wave1"
          fill="rgba(85, 22, 5, 1)"
          d="M0 148C96 125 288 29.2 480 33c192 3.8 288 126.2 480 134 192 7.8 384-76 480-95v488H0z"
        ></path>
        <path
          id="wave2"
          fill="rgba(214, 115, 34, 1)"
          d="M0 353c57.6-24.8 172.8-126.2 288-124 115.2 2.2 172.8 132 288 135 115.2 3 172.8-105.4 288-120 115.2-14.6 172.8 54.8 288 47 115.2-7.8 230.4-68.8 288-86v355H0z"
        ></path>
        <path id="wave3" fill="rgba(165, 54, 9, 1)" d={w3}></path>
      </defs>
      <use href="#wave1" x="0" y="0">
        <animate
          attributeName="x"
          from="0"
          to={"-" + distance}
          dur={timeAnim}
          repeatCount="indefinite"
        />
      </use>
      <use href="#wave2" x="0" y="0">
        <animate
          attributeName="x"
          from="0"
          to={"-" + distance}
          dur={timeAnim}
          repeatCount="indefinite"
        />
      </use>
      <use href="#wave3" x="0" y="0">
        <animate
          attributeName="x"
          from="0"
          to={"-" + distance}
          dur={timeAnim}
          repeatCount="indefinite"
        />
      </use>
    </svg>
  );
};

export default WavesIcon;
