import React from 'react';

function Details (props) {
		return (
			<div>
				<div className='detailsHeader'>
  					<button className="detailButtons" onClick={props.detailsTabHandler}>Description</button>
					<button className="detailButtons" onClick={props.detailsTabHandler}>Details</button>
  					<button className="detailButtons" onClick={props.detailsTabHandler}>Solution</button>	
				</div>
				<div className='currentTitle'>
					{props.currentTitle}
				</div>
				<div className='currentDetails'>
					{props.currentDDS}
				</div>
			</div>
		)
}

export default Details;