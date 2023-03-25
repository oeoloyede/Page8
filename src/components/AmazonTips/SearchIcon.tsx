import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.5279 18.7386C12.5279 15.4249 15.2142 12.7386 18.5279 12.7386C21.8416 12.7386 24.5279 15.4249 24.5279 18.7386C24.5279 20.2154 23.9944 21.5677 23.1095 22.613L22.8815 22.385L22.1744 23.0921L22.4024 23.3201C21.357 24.205 20.0048 24.7386 18.5279 24.7386C15.2142 24.7386 12.5279 22.0523 12.5279 18.7386ZM23.1116 24.0293C21.8835 25.0942 20.281 25.7386 18.5279 25.7386C14.6619 25.7386 11.5279 22.6046 11.5279 18.7386C11.5279 14.8726 14.6619 11.7386 18.5279 11.7386C22.3939 11.7386 25.5279 14.8726 25.5279 18.7386C25.5279 20.4916 24.8835 22.0942 23.8187 23.3222L27.8815 27.385L27.1744 28.0921L23.1116 24.0293Z'
      fill='black'
      fillOpacity={0.8}
    />
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
