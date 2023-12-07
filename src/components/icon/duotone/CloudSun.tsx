import React, { SVGProps } from 'react';

const SvgCloudSun = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M13 16a4 4 0 110-8 4 4 0 010 8zm7.5-5.5H22a1.5 1.5 0 010 3h-1.5a1.5 1.5 0 010-3zm-3.44-4.629l1.061-1.06a1.5 1.5 0 012.122 2.121l-1.061 1.06a1.5 1.5 0 11-2.121-2.12zM13 1.5A1.5 1.5 0 0114.5 3v1.5a1.5 1.5 0 01-3 0V3A1.5 1.5 0 0113 1.5zM5.81 4.81a1.5 1.5 0 012.122 0l1.06 1.061a1.5 1.5 0 01-2.12 2.122L5.81 6.932a1.5 1.5 0 010-2.121z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M4.747 20.043a6 6 0 119.064-6.543h2.439a3.75 3.75 0 010 7.5h-9c-.962 0-1.84-.362-2.503-.957z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgCloudSun;
