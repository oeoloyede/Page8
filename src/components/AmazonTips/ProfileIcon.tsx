import { memo, SVGProps } from 'react';

const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.1815 20.7169C18.3 20.7169 15.9641 23.0528 15.9641 25.9343V27.2386H26.3989V25.9343C26.3989 23.0528 24.063 20.7169 21.1815 20.7169Z'
      stroke='black'
    />
    <ellipse cx={21.1816} cy={16.1516} rx={3.91307} ry={3.91304} stroke='black' strokeLinecap='square' />
  </svg>
);

const Memo = memo(ProfileIcon);
export { Memo as ProfileIcon };
