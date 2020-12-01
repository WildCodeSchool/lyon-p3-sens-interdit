import React from 'react';
import twitterIco from '../../../assets/img/twitter.svg'

function Twitter() {
	return (
		<div className='twitwrapper'>
			<a
				href='https://twitter.com/share?ref_src=twsrc%5Etfw'
				class='twitter-share-button'
				data-show-count='false'>
				<img src={twitterIco} alt='twitter' width="50px" height="50px" />
			</a>
			<script
				async
				src='https://platform.twitter.com/widgets.js'
				charset='utf-8'></script>

		</div>
	);
}
export default Twitter;