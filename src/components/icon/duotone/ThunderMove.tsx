import React, { SVGProps } from 'react';

const SvgThunderMove = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M16.374 19.939l5.849-8.773A.75.75 0 0021.599 10H17V4.477a.75.75 0 00-1.374-.416l-5.849 8.773A.75.75 0 0010.401 14H15v5.523a.75.75 0 001.374.416z'
					fill='currentColor'
				/>
				<path
					d='M4.5 5h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm0 12h5a1.5 1.5 0 010 3h-5a1.5 1.5 0 010-3zm-2-6h4a1.5 1.5 0 010 3h-4a1.5 1.5 0 010-3z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgThunderMove;
