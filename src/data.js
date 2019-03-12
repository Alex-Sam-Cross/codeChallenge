import React from 'react';

function Data (props) {
	return props.parentState.map(function(displayList,i){
		return (
			<div className='dataRow'
				key={displayList._id}
				id={displayList._id}>
				<span 
					style={{width:63+'%'}}
					className="dataColoum"
					onClick={props.selectionHandler}
					>{displayList.title}
				</span>
				<span 
					className="dataColoum"
					onClick={props.selectionHandler}
					>{displayList.impact}
				</span>
				<span 
					className="dataColoum"
					onClick={props.selectionHandler}
					>{displayList.host}
				</span>
			</div>
		)
	})
}

export default Data;