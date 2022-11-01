import React, { useRef, useState } from 'react';
import Result from '../types/results';
import '../App.css';

// const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type searchTerms = {
    terms(results: Array<Result>): null;
}

// const [clickedTag, setClickedTag ] = useState('');


// This function will be triggered when the headline is clicked
const tagClickedHandler = (
  event: React.MouseEvent<HTMLElement>
) => {
  event.stopPropagation();
  
  
  const tag : HTMLElement= event.currentTarget;  
    
  console.log(
    "Element text content: ",
    tag.textContent,
    " Width: ",
    tag.clientWidth,
    " Height: ",
    tag.clientHeight,
    // " Clicked tag: ",
    /* clickedTag */  /* this is undefined, meaning the if loop up  there didn't work. The if loop for !==null is necessary for the export, so can't get rid of it. Maybe there's a formatting thing that went wrong in the if loop. Okay, after commenting out the clickedTag, it seems clear that there is an issue with the for loop. will push this just for legacy purposes, and undo to last commit. There could also be an issue with how I declared the variable clickedTag*/
  );

  /* export const */
};

/* export const tagstr = clickedTag;  this has an issue where the export is initiated before the click event. problem is that when i try to put this export within the tagClickedHandler, there is an error that modifiers are not allowed here*/

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