
import React from 'react'
import Result from '../types/results'

const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type searchTerms = {
    terms(results: Array<Result>): null;
}

export default function RecentSearches () {
  
  return (
    // const terms = props.terms; 
    
    <div className="recentSearches">
        <h2>Recent searches </h2>
      <div className="item">Recent search query 1</div>
      <div className="item">Recent search query 2</div>
      <div className="item">Recent search query 3</div>
      <div className="item">Recent search query 4</div>
      <div className="item">Recent search query 5</div>
      <div className="item">Recent search query 6</div>
    </div>
  )
}