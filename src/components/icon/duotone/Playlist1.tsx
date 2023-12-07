import React, { SVGProps } from 'react';

const SvgPlaylist1 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M8.979 18.8C8.8 20.04 7.535 21 6 21c-1.657 0-3-1.12-3-2.5S4.343 16 6 16c.35 0 .687.05 1 .142V5.932c0-.513.32-.966.79-1.12l5.75-1.758c.724-.236 1.46.328 1.46 1.12v1.758c0 .586-.549.96-1 1.068-.65.155-2.316.488-5 1v10.551c0 .09-.007.173-.021.25z'
					fill='currentColor'
				/>
				<path
					d='M16 9h4a1 1 0 010 2h-4a1 1 0 010-2zm-2 4h6a1 1 0 010 2h-6a1 1 0 010-2zm0 4h6a1 1 0 010 2h-6a1 1 0 010-2z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgPlaylist1;
