import React, { SVGProps } from 'react';

const SvgUpRight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(45 11.646 12.854)'
					x={10.646}
					y={5.854}
					width={2}
					height={14}
					rx={1}
				/>
				<path
					d='M8.11 8.904a1 1 0 110-2h8.486a1 1 0 011 .956l.353 8.132a1 1 0 11-1.998.087l-.312-7.175H8.11z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgUpRight;
