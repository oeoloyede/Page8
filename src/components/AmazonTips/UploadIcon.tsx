import { memo, SVGProps } from 'react';

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 74 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M37.1497 16.7386H36.1497V22.7386H30.1497V23.7386H36.1497V29.7386H37.1497V23.7386H43.1497V22.7386H37.1497V16.7386Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(UploadIcon);
export { Memo as UploadIcon };
