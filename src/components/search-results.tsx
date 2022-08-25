import React, { useEffect, useState } from 'react';
import Result from '../types/results';
import IndividualResultComponent from './individual-result'
import axios from 'axios'
import cheerio from 'cheerio'
import '../App.css';

type SearchResultComponentProps = {
    results: Array<Result>;
}
type IndividualResultComponentProps = {
    result: Result;
}

export function SearchResultComponent(props: SearchResultComponentProps) {
    const results = props.results;
    useState({title: 'title'})
    const listItems = results.map((result) => {
        
        
        return <IndividualResultComponent result={result}></IndividualResultComponent>
    });
    
    return (
        <ul className='App-results'>{listItems}</ul>
    );
}
