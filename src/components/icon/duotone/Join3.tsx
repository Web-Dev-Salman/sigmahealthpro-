import React, { SVGProps } from 'react';

const SvgJoin3 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<circle fill='currentColor' opacity={0.3} cx={8} cy={16} r={2} />
				<path
					d='M14.004 19h4c.037-4.64-1.045-8.039-3.412-10.1C12.33 6.93 9.11 5.993 5 6l.006 4c3.223-.005 5.52.663 6.959 1.916 1.332 1.16 2.068 3.5 2.039 7.084z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgJoin3;
