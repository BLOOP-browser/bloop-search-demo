import React, { useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from './components/search-bar';
import { SearchResultComponent } from './components/search-results';
import Result from './types/results';
import RecentSearches from './components/recent-searches'
import RecentRecs from './components/recent-recs'



function App() {
  const [results, setResults] = useState(
    {results: new Array<Result>()}
  )

  const onSearchResults = (results: Array<Result>) => {
    setResults({results: results})
  }
  return (
    <div className="App">
      <div className = "App-logo"> <img src="BLOOP-together.svg" /></div>
      <div className = "App-searchwrap"> <SearchBar onSearchResults={onSearchResults}></SearchBar></div>
      <SearchResultComponent results={results.results}></SearchResultComponent>
      <RecentSearches/>
      <RecentRecs/>
      
    </div>
  );
}

export default App;
