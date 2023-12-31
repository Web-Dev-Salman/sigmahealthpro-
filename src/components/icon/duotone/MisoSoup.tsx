import React, { SVGProps } from 'react';

const SvgMisoSoup = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path d='M2 14h20a9 9 0 01-9 9h-2a9 9 0 01-9-9z' fill='currentColor' />
				<path
					d='M16.723 1.418a.964.964 0 01.335 1.347l-6.52 10.402a.518.518 0 01-.897-.518l5.748-10.848a.964.964 0 011.334-.383zm5.154 2.799a.964.964 0 01-.098 1.385l-9.416 7.878a.518.518 0 01-.693-.77l8.82-8.54a.964.964 0 011.387.047z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgMisoSoup;
