import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

/*  + Components: such as "CardList", "SearchBox" and "Scroll".
    + Containers: such as "App", smart components the containing components, that have state
     in them, have lifecycle hooks, have the class syntax.
*/
class App extends Component {
    constructor() {
        super();
        this.state = {  // state: something that can changes and affects our "App" (this: is the "App")
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        // Fetch API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

        /* The code above means:
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users });
            });
        */
    }

    /* Any time we make our own methods on a component, use the arrow functions syntax
    to make sure that the "this" value is according to where it was created, which is the "App"
    */
    onSearchChange = (event) => {
        // Never do this.state.searchfield = ..., we need to use setState() to change state
        this.setState({ searchfield: event.target.value }); // change state

        // console.log(event.target.value); // value of the search term
        // console.log(filteredRobots);
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        if (robots.length === 0) {
            return <h1 className='tc'>Loading</h1>;
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
