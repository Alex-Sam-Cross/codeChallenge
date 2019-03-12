import React from 'react';

function Pagination (props) {
    return (
        <div className="pagination">
            <span ></span>    
            <span ></span>
            <span onClick={props.changePage} >1</span>
            <span onClick={props.changePage} >2</span>
            <span onClick={props.changePage} >3</span>
            <span onClick={props.changePage} >4</span>
            <span onClick={props.changePage} >5</span>
            <span onClick={props.changePage} >6</span>
            <span onClick={props.changePage} >7</span>
            <span onClick={props.changePage} >8</span>
            <span ></span>
            <span ></span>  
        </div>
    )
}

export default Pagination;