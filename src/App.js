import React, { Component } from 'react';
import './App.css';
import dataList from './Appcheck.json';
import Tabs from './tabs.js';
import Data from './data.js';
import Details from './details.js';
import Pagination from './pagination.js';

class App extends Component { 
    //constructor
    constructor (props) {
        super(props);
        //set states
        this.state = {
            //Data
            list: [],

            // Pagination, By default let's start the page by 0...
            displayList:[],
            currentPage: 0,
            itemsPerPage:10,
            paginatedList:[],
            //current data for the details view
            currentSelection: [],
            currentTitle:'Please select a report from the left to show its title here',
            currentDetails:'Please select a report from the right to show its details here',
            currentDescription:'Please select a report from the right to show its details here',
            currentSolution:'Please select a report from the right to show its details here',
            currentDDS:'Please select a report from the right to show its details here'
        }
        //setuping your own custom functions
        this.selectionHandler = this.selectionHandler.bind(this);
        this.changePage = this.changePage.bind(this);
        this.detailsTabHandler = this.detailsTabHandler.bind(this);
    }
    //methods;

    //pagination
    changePage(event){
        let pageNumber = (event.target.innerHTML - 1)
        this.setState({
            displayList : this.state.paginatedList[pageNumber],
            currentPage : pageNumber
        })

    }
    detailsTabHandler(event){
        clearInterval(this.interval)
        let selected = event.target.innerHTML
        if (selected === 'Details'){
            this.setState({
                currentDDS : this.state.currentDetails
            })
        }else if (selected === 'Description'){
            this.setState({
                currentDDS : this.state.currentDescription
            })
        }else if (selected === 'Solution'){
            this.setState({
                currentDDS : this.state.currentSolution
            })
        }
    }
    selectionHandler(event){
        let  dataNodeID = event.target.parentNode.id;
        this.setState({
            currentSelection: this.state.list.filter(list => list._id === dataNodeID )
        });
        let populateCurrentSelection  = (currentSelection) => {
            if (currentSelection.length > 0) {
                var description = currentSelection[0].description,
                solution = currentSelection[0].solution,
                details = currentSelection[0].details,
                title = currentSelection[0].title;
                this.setState({
                    currentDescription : description,
                    currentSolution : solution,
                    currentDetails : details,
                    currentTitle : title,
                    currentDDS: description
                })
            }
        }
        setTimeout(() => {
            populateCurrentSelection(this.state.currentSelection);
            document.getElementsByClassName('detailsDisplay')[0].style.visibility = 'visible';
        }, 50)
        
    }
    //populate data list on load
    componentWillMount() {
        this.setState({
            list : dataList
        })
        
    }
    //split list for paintaion and set initial display list.
    componentDidMount(){
        const itemsPerPage = this.state.itemsPerPage
        const items = this.state.list

        var paginatedList = items.map(function(e,i){
            return i % itemsPerPage === 0 ? items.slice(i , i+itemsPerPage) : null; 
        }).filter(function(e){ 
           return e; 
        });
        this.setState({
            paginatedList : paginatedList,
            displayList : paginatedList[0]
        })
    }
    //render
    render () {
        return (
            <div>
                <div className='welcome'>To view any report in further detail, select a report from the list on the right.</div>
                <div className='dataGrid'>
                    {<Tabs 
                        parentState={this.state.displayList}
                    />}
                    {<Data 
                        parentState={this.state.displayList}
                        selectionHandler={this.selectionHandler}
                    />}
                    <div className = 'pagination'>
                        {<Pagination
                            parentState={this.state.paginatedList}
                            changePage={this.changePage}
                        />}
                    </div>
                </div>
                <div className='detailsDisplay'>
                    {<Details 
                        currentDDS={this.state.currentDDS}
                        currentTitle={this.state.currentTitle}
                        detailsTabHandler={this.detailsTabHandler}
                    />}
                </div>
            </div>
        )
    }
}

export default App;