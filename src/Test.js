import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

/** Using Class we have made this one */
class Test extends Component {
    constructor(){
        super();

        this.state = {
            avengers: [
                {
                    name: 'Humans',
                    id: 'human'
                },
                {
                    name: 'Gods',
                    id: 'god'
                },
                {
                    name: 'Eternals',
                    id: 'eternal'
                }
            ]
        };

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(testing => this.setState({ avengers: testing }));
    }

    render() {
        return (
            <div className="App">
                <CardList>
                    {this.state.avengers.map(avenger => (
                        <h1 key={avenger.id}> { avenger.name}</h1>
                        ))
                    }
                </CardList>
                
            </div>
        );
    }
    
}

export default Test;
