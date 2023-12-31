import React, { SVGProps } from 'react';

const SvgMediaFolder = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3.5 21h17a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0020.5 7H10L7.44 4.44A1.5 1.5 0 006.378 4H3.5A1.5 1.5 0 002 5.5v14A1.5 1.5 0 003.5 21z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M10.782 17.51l4.404-3.01a.5.5 0 000-.825l-4.403-3.029a.5.5 0 00-.783.412v6.04a.5.5 0 00.782.412z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgMediaFolder;
