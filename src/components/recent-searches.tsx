
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
        <h2>Things we have searched for...</h2>
        <div className="App-recentSearches">
            <div className="item">heal</div>
            <div className="item">indigenous</div>
            <div className="item">wikipedia</div>
            <div className="item">technology</div>
            <div className="item">salad</div>
            <div className="item">current events</div>
        </div>
      
    </div>
  )
}