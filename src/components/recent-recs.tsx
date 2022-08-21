
import React from 'react'
import Result from '../types/results'


type indexedLinks = {
    indexed(results: Array<Result>): null;
}

export default function RecentRecs () {
  
  return (
    // const terms = props.terms; 
    
    <div className="recentRecs">
        <h2>Recent recommendations </h2>
      <div className="item">Recent rec 1</div>
      <div className="item">Recent rec 2</div>
      <div className="item">Recent rec 3</div>
      <div className="item">Recent rec 4</div>
      <div className="item">Recent rec 5</div>
      <div className="item">Recent rec 6</div>
    </div>
  )
}