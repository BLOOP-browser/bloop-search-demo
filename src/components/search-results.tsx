import React, { useEffect, useState } from 'react';
import Result from '../types/results';
import axios from 'axios'
import cheerio from 'cheerio'
import '../App.css';

type SearchResultComponentProps = {
    results: Array<Result>;
}
type IndividualResultComponentProps = {
    result: Result;
}

export function IndividualResultComponent(props: IndividualResultComponentProps) {
    let [title, setTitle] = useState({title: props.result.link})
    let [workingLink, setWorkingLink] = useState({link: props.result.link})
    try {
        axios.get(props.result.link.startsWith('http') ? props.result.link : 'https://' + props.result.link).then((response)=> {
            let html = response.data
            onTitleUpdate(cheerio.load(html)("title").text())
        })
    } catch (exception: any) {
        console.log("is this running?")
        if (exception.code === "ERR_BAD_REQUEST") {
            try {
                axios.get(props.result.link.replace("https", "http")).then((response)=> {
                let html = response.data
                onTitleUpdate(cheerio.load(html)("title").text())
                })
                setWorkingLink({link: props.result.link.replace("https", "http")})
            } catch {
                console.log(exception)
            }
        } else {
            console.log(exception)
        }
    }
    
    const onTitleUpdate = (title: string) => {
        setTitle({title: title})
    }
    return <li>
        <a href={workingLink.link}>{title.title}</a>
        <p>{props.result.description}</p> 
    </li>
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
