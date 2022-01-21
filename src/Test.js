import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

/** Using Class we have made this one */
class Test extends Component {
    constructor(){
        super();

        this.state = {
            avengers: [ ],
            searchField: ''
        };

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(testing => this.setState({ avengers: testing }));
    }

    render() {
        const { avengers, searchField } = this.state;
        const filteredAvengers = avengers.filter(avenger => avenger.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className="App">
                <input type="search" placeholder="Search Avengers" onChange={e => this.setState({ searchField: e.target.value})}></input>
                <CardList avengers={filteredAvengers}>
                </CardList>
            </div>
        );
    }
    
}

export default Test;
