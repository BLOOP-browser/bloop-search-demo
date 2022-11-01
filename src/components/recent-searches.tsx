
import React from 'react'
import Result from '../types/results'
import '../App.css';

// const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type searchTerms = {
    terms(results: Array<Result>): null;
}

// This function will be triggered when the headline is clicked
const tagClickedHandler = (
  event: React.MouseEvent<HTMLElement>
) => {
  event.stopPropagation();

  const tag = event.currentTarget;
  console.log(
    "Element text content: ",
    tag.textContent,
    "Width: ",
    tag.clientWidth,
    "Height: ",
    tag.clientHeight
  );

  /* export const */
};


export default function RecentSearches () {
  
  return (
    // const terms = props.terms; 
    
    <div >
        <h2>Community curated resources for </h2>
        <div className="App-recentSearches">
            <div className="item" onClick={tagClickedHandler}>HNS</div>
            <div className="item" onClick={tagClickedHandler}>IPFS</div>
            <div className="item" onClick={tagClickedHandler}>Vc</div>
            <div className="item" onClick={tagClickedHandler}>Search</div>
        </div>
      
    </div>
  )
}