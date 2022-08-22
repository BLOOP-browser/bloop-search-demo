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
      <Link to="/recs">Recommendations?</Link><br/>
      {results.results.length ? <h2> Search Results </h2> : ""}
      <SearchResultComponent results={results.results}></SearchResultComponent>
      {/* <RecentSearches/> */}
      <RecentRecs/>
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
