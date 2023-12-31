import React, { SVGProps } from 'react';

const SvgSaturation = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M7 14a5 5 0 0010 0c0-1.626-1.63-4.131-5-7.3-3.37 3.169-5 5.674-5 7.3zm5 7a7 7 0 01-7-7c0-2.577 2.333-5.91 7-10 4.667 4.09 7 7.423 7 10a7 7 0 01-7 7z'
					fill='currentColor'
				/>
				<path d='M12 4c4.667 4.09 7 7.423 7 10a7 7 0 01-7 7V4z' fill='currentColor' />
			</g>
		</svg>
	);
};

export default SvgSaturation;
