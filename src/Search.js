import React, { Component } from "react";
import './Search.css';

class Search extends Component {
    
    //state of the app

    state = {
        
        SearchValue: '',
        hits: []

    };

    //functions to handle events

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleSearch = () => {

        this.makeApiCall(this.state.searchValue);

    }

    //function to perform a get request from api

    makeApiCall = searchInput => {
        
        var searchUrl = `https://stacc-code-challenge-2021.azurewebsites.net/api/pep?name=${searchInput}`;
        
        fetch(searchUrl)
        
        .then(response => {
        
            return response.json();
        
        })
        
        //saving results from search in the empty array in "state"

        .then(jsonData => {
        
            console.log(jsonData.hits);
            this.setState({ hits: jsonData.hits });
        
        });
        
    };

    //render for the website

    render() {
        return (
            <div>
                <h1>Welcome to the PEP search app</h1>
                <h2>Find out if a person is a politically exposed person</h2>
                
                {/* search bar */}
                <input
                    name="text"
                    type="text"
                    placeholder="Search"
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                />
                
                {/* button which when pressed uses the handleSearch function */}
                <button onClick={this.handleSearch}>Search</button>
                
                {/* checks if there are no results */}
                {!this.state.hits ? (
                    <h1 id='hits' >0 hits</h1>

                /* else, checks if there are too many results */
                ) : this.state.hits.length > 15 ? (
                    <div>
                        <h1 id='hits' >{this.state.hits.length} hits</h1>
                        <p>Too many hits, try searching a spesific name</p>
                    </div>

                /* else, prints out the result(s) */
                ) : (
                <div>
                    <h1 id='hits' >{this.state.hits.length} hits</h1>
                    {this.state.hits.map((hit) => (
                    <div id='res' key={hit.id}>
                        <h1>{hit.name} is a PEP, found in the dataset "{hit.dataset}"</h1>
                    </div>
                    ))}
                </div>
                )}
            </div>
        );
    }
}
export default Search;