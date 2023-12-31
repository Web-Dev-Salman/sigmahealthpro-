import React, { SVGProps } from 'react';

const SvgCookie = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					fill='currentColor'
					opacity={0.3}
					d='M12 20.66l-2.536-.025-2.146-1.35-2.12-1.391-1.075-2.297-1.031-2.316.336-2.513.385-2.507L5.455 6.33l1.68-1.9L9.56 3.69 12 3l2.44.69 2.426.739 1.679 1.9 1.642 1.932.385 2.507.336 2.513-1.03 2.316-1.076 2.297-2.12 1.391-2.146 1.35z'
				/>
				<circle fill='currentColor' opacity={0.3} cx={8.5} cy={13.5} r={1.5} />
				<circle fill='currentColor' opacity={0.3} cx={13.5} cy={7.5} r={1.5} />
				<circle fill='currentColor' opacity={0.3} cx={14.5} cy={15.5} r={1.5} />
			</g>
		</svg>
	);
};

export default SvgCookie;
