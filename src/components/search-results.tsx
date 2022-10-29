import React, { useEffect, useState } from 'react';
import Result from '../types/results';
import IndividualResultComponent from './individual-result'
import axios from 'axios'
import cheerio from 'cheerio'
import '../App.css';
import { Link } from 'react-router-dom'

const DEFAULT_EMPTY = "No results for this search term yet. "  

type SearchResultComponentProps = {
    results: Array<Result>;
}

export function SearchResultComponent(props: SearchResultComponentProps) {
    const results = props.results;
    useState({title: 'title'})
    const listItems = results.map((result) => {
        
        
        return <IndividualResultComponent result={result}></IndividualResultComponent>
    });
    
    return (
        <div>
            { listItems.length > 0 ? <ul className='App-results'>{listItems}</ul> : <h3> {DEFAULT_EMPTY} <Link to="/recs"> Submit something instead? </Link> </h3> }
        </div>
    );
}
