import React from 'react';

function Tabs (props) {
		return (
			<div className='sortTabs'>
				<span 
					className='sortTab' 
					style={{width:63+'%'}}
					//onClick={props.handleTabs}
					>Title</span>
				<span 
					className='sortTab'
					//onClick={props.handleTabs}
					>Impact</span>
				<span 
					className='sortTab'
					//onClick={props.handleTabs}
					>Host</span>
			</div>
		)
}

export default Tabs;