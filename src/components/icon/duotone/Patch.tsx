import React, { SVGProps } from 'react';

const SvgPatch = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M11.293 5.636l7.071 7.071L12 19.071 4.929 12l6.364-6.364zm-2.829 5.657a1 1 0 101.415 1.414 1 1 0 00-1.415-1.414zm2.829-2.829a1 1 0 101.414 1.415 1 1 0 00-1.414-1.415zm0 5.657a1 1 0 101.414 1.415 1 1 0 00-1.414-1.415zm2.828-2.828a1 1 0 101.415 1.414 1 1 0 00-1.415-1.414z'
					fill='currentColor'
				/>
				<path
					d='M10.515 20.415a5.002 5.002 0 01-6.93-6.93l6.93 6.93zM12.778 4.293a5.002 5.002 0 016.93 6.93l-6.93-6.93z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgPatch;
