import React, { useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from './components/search-bar';
import { SearchResultComponent } from './components/search-results';
import Result from './types/results';
import RecentSearches from './components/recent-searches'
import RecentRecs from './components/recent-recs'
import { Link } from 'react-router-dom'


function App() {
  const [results, setResults] = useState(
    {results: new Array<Result>()}
  )
  return (
    <div className="App">
      <div className = "App-logo"> <img src="BLOOP-together.svg" /></div>
      <div className = "App-searchwrap"> 
      <SearchBar onSearchResults={
      (inputResults: Array<Result>) => {
        setResults({results: inputResults})
      }}>
      </SearchBar>
      </div>
      <Link  className="App-button"  to="/recs">Want to index something?</Link><br/>
      {results.results.length ? <h2> <br></br>Search Results </h2> : <h3> <br></br>Nothing indexed yet. You can index something with the button above :D </h3>}
      <SearchResultComponent results={results.results}></SearchResultComponent>
      
      <hr></hr>
      <RecentSearches/>
      <hr></hr>
      <RecentRecs/>
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
