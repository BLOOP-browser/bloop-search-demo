import React, {useEffect, useState} from 'react';
import Result from '../types/results';
import IndividualResultComponent from './individual-result'
import { peformQueryRecent } from "../utils/elastic-utils";

export default function RecentRecs() {
    const [recentResults, setResentResults] = useState({results: new Array<Result>()})
    useEffect(() => {
      peformQueryRecent((response: any) => {
        let resultsFromQuery: Array<Result> = [];
        let counter = 0;
        response.data.hits.hits.forEach((hit: any) => {
          if (counter < 3) {
            resultsFromQuery.push(hit._source)
          }
          counter += 1
        })
        setResentResults({results: resultsFromQuery}) 
      })
    }, [])
    const listItems = recentResults.results.map((result) => {
        return <IndividualResultComponent result={result}></IndividualResultComponent>
    });
    return (
      <div>
      <h2>Recent recommendations </h2>
        <ul  className="App-recentRecs">{listItems}</ul>
      </div>
    );
}

type indexedLinks = {
    indexed(results: Array<Result>): null;
}