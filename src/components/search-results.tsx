import React from 'react';
import Result from '../types/results';
import IndividualResultComponent from './individual-result'
type SearchResultComponentProps = {
    results: Array<Result>;
}

export function SearchResultComponent(props: SearchResultComponentProps) {
    const results = props.results;
    const listItems = results.map((result) => {
        return <IndividualResultComponent result={result}></IndividualResultComponent>
    });
    return (
        <div>{listItems}</div>
    );
}
