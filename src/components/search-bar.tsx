import React, { useRef, useState } from 'react';
import Result from '../types/results';
import { performFuzzyQuery } from '../utils/elastic-utils';
/* UNCOMMMENT */
import { datadogLogs } from '@datadog/browser-logs'

datadogLogs.init({
  clientToken: 'pubc45e0dc2931024cf7bb1d5593f656a5a',
  site: 'datadoghq.com',
  forwardErrorsToLogs: false,
  sampleRate: 100,
})
console.log("APP_STARTED")
datadogLogs.logger.info("APP_STARTED")


type SearchBarProps = {
    onSearchresults(results: Array<Result>): null;
}

export function SearchBar(props: any) {
    let ref = useRef<HTMLDivElement>(null);
    const [inputData, setInputData ] = useState({search: ''})

    const handleOnChange = (e: any) => {
        return setInputData(() => {
            return {search: e.target.value}
        })
    }

    return <div  ref={ref}>
        <input className="App-searchbarcss"
            placeholder= "Search community resources..."
            type="search"
            value={inputData.search} 
            onKeyDown={
                (e: any) => {
                    if (e.key === 'Enter' && inputData.search.length > 0) {
                        let results: Array<Result> = []
                        props.onSearchResults([])
                        performFuzzyQuery(inputData.search, (response: any) => {
                            response.data.hits.hits.forEach((hit: any) => {
                                results.push(hit._source)
                            })
                            props.onSearchResults(results)
                            /* UNCOMMENT  */datadogLogs.logger.info("SEARCH_RESULTS", {
                                searchTerm: inputData.search,
                                results: results,
                            })
                            console.log("should have ran")
                        })
                    }
                }
            }
            onChange={(e) => {
                handleOnChange(e)}}>
        </input>
    </div>
}