import React from 'react';
import shareIco from '../../../assets/img/share.svg';

function GenericSharing() {
	return (
		<div className='twitwrapper'>
			<a
				href={"mailto:info@example.com?&subject=&body=" + window.location.href}
				className='share-button'>
				<img src={shareIco} alt='share' width='50px' height='50px' />
			</a>
		</div>
	);
}
export default GenericSharing;

