import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.1133 21.7239L14.1844 20.6528V26.2949V26.295V27.2949H26.1844V26.295V26.2949V20.6528L27.2555 21.7239L27.9626 21.0167L20.8915 13.9457L20.1844 13.2386L19.4773 13.9457L12.4062 21.0167L13.1133 21.7239ZM15.1844 26.2949V19.6528L20.1844 14.6528L25.1844 19.6528V26.2949H22.1844V22.295V21.295H18.1844V22.295V26.2949H15.1844ZM19.1844 22.295V26.2949H21.1844V22.295H19.1844Z'
      fill='black'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
