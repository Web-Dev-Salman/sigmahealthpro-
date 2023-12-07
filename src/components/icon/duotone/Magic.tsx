import React, { SVGProps } from 'react';

const SvgMagic = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M17.071 7.343L15.657 5.93 12.12 9.464l1.415 1.415 3.535-3.536zm2.121.707L5.05 22.192a1 1 0 01-1.414 0L.808 19.364a1 1 0 010-1.414L14.95 3.808a1 1 0 011.414 0l2.828 2.828a1 1 0 010 1.414z'
					fill='currentColor'
				/>
				<path
					d='M17.5 12h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm3-3h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zm1 4h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgMagic;
