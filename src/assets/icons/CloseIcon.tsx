import React from "react";

export const CloseIcon = ({
  width = "56",
  height = "56",
  fill = "#313037",
}) => {
  return (
    <svg
        width={width}
        height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="56" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.6569 32.2429L29.4142 28.0002L33.6569 23.7576C34.0472 23.3673 34.0472 22.7337 33.6569 22.3434C33.2665 21.9531 32.633 21.9531 32.2426 22.3434L28 26.586L23.7574 22.3434C23.367 21.9531 22.7335 21.9531 22.3431 22.3434C21.9528 22.7337 21.9528 23.3673 22.3431 23.7576L26.5858 28.0002L22.3431 32.2429C21.9521 32.6339 21.9528 33.2668 22.3431 33.6571C22.7335 34.0474 23.3663 34.0481 23.7574 33.6571L28 29.4144L32.2426 33.6571C32.6337 34.0481 33.2665 34.0474 33.6569 33.6571C34.0472 33.2668 34.0479 32.6339 33.6569 32.2429"
        fill={fill}
      />
    </svg>
  );
};
