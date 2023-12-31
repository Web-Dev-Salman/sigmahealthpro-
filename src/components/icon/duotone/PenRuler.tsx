import React, { SVGProps } from 'react';

const SvgPenRuler = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M3 16h2a1 1 0 000-2H3v-2h2a1 1 0 000-2H3V8h2a1 1 0 100-2H3V4a1 1 0 011-1h6a1 1 0 011 1v15a1 1 0 01-1 1H4a1 1 0 01-1-1v-3z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M16 3h3a2 2 0 012 2v10.249a2 2 0 01-.495 1.317l-2.629 3.004a.5.5 0 01-.752 0l-2.63-3.004A2 2 0 0114 15.249V5a2 2 0 012-2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgPenRuler;
