import React, { SVGProps } from 'react';

const SvgGamepad2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M12.949 8.316l-1.898-.632c.765-2.294 1.992-3.725 3.706-4.154C15.65 3.307 17 1.87 17 1h2c0 1.797-1.984 4.027-3.757 4.47-.952.238-1.726 1.14-2.294 2.846z'
					fill='currentColor'
					opacity={0.3}
				/>
				<path
					d='M7.818 7h8.385a3 3 0 013.323 1.72l3.424 7.674a3 3 0 01-.666 3.39l-.445.426a2.642 2.642 0 01-3.793-.146L15.299 17H8.865l-2.747 3.064a2.642 2.642 0 01-3.793.146l-.467-.447a3 3 0 01-.684-3.352l3.287-7.655A3 3 0 017.818 7zM8 14a2 2 0 100-4 2 2 0 000 4zm9-2a1 1 0 100-2 1 1 0 000 2zm-2 2a1 1 0 100-2 1 1 0 000 2z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgGamepad2;
