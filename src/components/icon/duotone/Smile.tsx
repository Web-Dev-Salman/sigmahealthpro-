import React, { SVGProps } from 'react';

const SvgSmile = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					x={2}
					y={2}
					width={20}
					height={20}
					rx={10}
				/>
				<path
					d='M6.168 14.555a1 1 0 011.664-1.11C8.99 15.181 10.354 16 12 16c1.646 0 3.01-.82 4.168-2.555a1 1 0 111.664 1.11C16.322 16.819 14.354 18 12 18c-2.354 0-4.322-1.18-5.832-3.445z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgSmile;
