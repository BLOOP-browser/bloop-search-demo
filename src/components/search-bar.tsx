import React, { useEffect, useRef, useState } from 'react';
import Result from '../types/results'
import axios from 'axios'


const ES_CLUSTER_HOST = 'https://bloop-demo-search.es.us-east-2.aws.elastic-cloud.com/bloop-search-demo/_search/';
const READONLY_API_KEY = 'T0QzLXNZSUIxZ2d1ZFYyYk1PaEY6MEx0T0ZtM2dSV215SExKcHlzRk54Zw=='

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
            placeholder= "See what people recommend for..."
            value={inputData.search} 
            onKeyDown={
                (e: any) => {
                    if (e.key === 'Enter' && inputData.search.length > 0) {
                        let results: Array<Result> = []
                        props.onSearchResults([])
                        axios.get(ES_CLUSTER_HOST, {
                            headers: {
                                "Content-Type" : "application/json",
                                "Authorization" : "ApiKey " + READONLY_API_KEY
                            },
                            params: {
                                source: JSON.stringify({query: {query_string: {query: inputData.search}}}), source_content_type: 'application/json'
                            },
                        }).then((response) => {
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