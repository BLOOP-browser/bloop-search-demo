
import React from 'react'
import Result from '../types/results'
import '../App.css';

// const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type searchTerms = {
    terms(results: Array<Result>): null;
}

export default function RecentSearches () {
  
  return (
    // const terms = props.terms; 
    
    <div >
        <h2>Community curated resources for </h2>
        <div className="App-recentSearches">
            <div className="item">HNS</div>
            <div className="item">IPFS</div>
            <div className="item">Vc</div>
            <div className="item">Search</div>
        </div>
      
    </div>
  )
}