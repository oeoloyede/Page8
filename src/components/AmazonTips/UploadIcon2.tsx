import { memo, SVGProps } from 'react';

const UploadIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 75 43' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_117_192)'>
      <rect width={74.2905} height={42.6608} rx={20} fill='url(#paint0_linear_117_192)' />
      <path
        d='M37.6299 7.12198L40.3652 16.6368H49.2168L42.0557 22.5173L44.791 32.0321L37.6299 26.1516L30.4688 32.0321L33.2041 22.5173L26.0429 16.6368H34.8946L37.6299 7.12198Z'
        fill='#D9D9D9'
      />
    </g>
    <defs>
      <linearGradient
        id='paint0_linear_117_192'
        x1={52.2785}
        y1={-3.30794e-7}
        x2={41.2453}
        y2={47.1604}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF00D6' />
        <stop offset={1} stopColor='#FF4D00' />
      </linearGradient>
      <clipPath id='clip0_117_192'>
        <rect width={74.2905} height={42.6608} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(UploadIcon2);
export { Memo as UploadIcon2 };
