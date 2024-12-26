import React from "react";

export default function RightArrow({clr='#F3F3F4'}:{clr?: string}) {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7767 8.06743C15.9198 8.21703 16 8.41908 16 8.62965C16 8.84022 15.9198 9.04228 15.7767 9.19189L8.92138 16.2938C8.77516 16.4386 8.58094 16.5198 8.37867 16.5206C8.27759 16.5201 8.17746 16.5002 8.08351 16.4614C7.94489 16.4012 7.8266 16.2996 7.74358 16.1697C7.66056 16.0398 7.61651 15.8873 7.61698 15.7316V9.41876H0.761697C0.559684 9.41876 0.365942 9.33563 0.223096 9.18764C0.0802502 9.03964 0 8.83894 0 8.62965C0 8.42038 0.0802502 8.21966 0.223096 8.07168C0.365942 7.92369 0.559684 7.84056 0.761697 7.84056H7.61698V1.52777C7.61651 1.37198 7.66056 1.21953 7.74358 1.08964C7.8266 0.959746 7.94489 0.858218 8.08351 0.797851C8.2242 0.741 8.37756 0.726577 8.52585 0.756252C8.67412 0.785926 8.81125 0.858486 8.92138 0.965535L15.7767 8.06743Z"
        fill={clr}
      />
    </svg>
  );
}

