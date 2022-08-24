import React, { useEffect, useRef, useState } from 'react';
import Result from '../types/results';
import axios from 'axios';
import { performFuzzyQuery } from '../utils/elastic-utils';
type SearchBarProps = {
    onSearchresults(results: Array<Result>): null;
}

export function SearchBar(props: any) {
    let ref = useRef<HTMLDivElement>(null);
    const [inputData, setInputData ] = useState({search: ''})

    const handleOnChange = (e: any) => {
        return setInputData((state) => {
            return {search: e.target.value}
        })
    }

    return <div  ref={ref}>
        <input className="App-searchbarcss"
            placeholder= "See what people indexed for →"
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
                        })
                    }
                }
            }
            onChange={(e) => {
                handleOnChange(e)}}>
        </input>
    </div>
}