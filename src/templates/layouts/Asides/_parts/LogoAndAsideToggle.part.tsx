import React from 'react';
import { Link } from 'react-router-dom';
import Visible from '../../../../components/utils/Visible';
import Icon from '../../../../components/icon/Icon';
import useAsideStatus from '../../../../hooks/useAsideStatus';
import LogoTemplate from '../../Logo/Logo.template';
// import logo from '../../../../../public/SigmaHealthProWhite.png';

const LogoAndAsideTogglePart = () => {
	const { asideStatus, setAsideStatus } = useAsideStatus();
	return (
		<>
			<Visible is={asideStatus}>
				<Link to='/' aria-label='Logo'>
					<LogoTemplate className='h-12' />
					{/* <img src={logo} alt='Sigma Heath Logo' className=' w-full' /> */}
				</Link>
			</Visible>
			<button
				type='button'
				aria-label='Toggle Aside Menu'
				onClick={() => setAsideStatus(!asideStatus)}
				className='flex h-12 w-12 items-center justify-center'>
				<Icon
					icon={asideStatus ? 'HeroBars3BottomLeft' : 'HeroBars3'}
					className='text-2xl'
				/>
			</button>
		</>
	);
};

export default LogoAndAsideTogglePart;
