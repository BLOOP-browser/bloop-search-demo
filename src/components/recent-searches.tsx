
import React from 'react'
import Result from '../types/results'

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
            <div className="">12</div>
            <div className="item">wow</div>
            <div className="item">wowowowowowowow</div>
            <div className="item">Recent search query 4</div>
            <div className="item">Recent search query 5</div>
            <div className="item">Recent search query 6</div>
        </div>
      
    </div>
  )
}