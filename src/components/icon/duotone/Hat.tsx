import React, { SVGProps } from 'react';

const SvgHat = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M18 12.43c-.733.24-1.559.566-2.487.978-2.507-1.132-4.672-1.975-6.513-2.543V9.5A3.5 3.5 0 0112.5 6h2A3.5 3.5 0 0118 9.5v2.93z'
					fill='currentColor'
				/>
				<path
					d='M1.975 15.534c-.452-2.09-2.31-8.847 13.525-.488-.452 0-12.168 7.28-13.525.488zm19.92-.476c.2-.917.558-3.67-6.395 0 .199 0 5.8 2.983 6.396 0z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgHat;
