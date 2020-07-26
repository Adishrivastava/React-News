import React from 'react';
import ReactLoading from 'react-loading';

function Loading() {
	return (
		<div>
			<ReactLoading
				type={'balls'}
				color={'#333'}
				height={'10%'}
				width={'10%'}
			/>
		</div>
	);
}

export default Loading;
