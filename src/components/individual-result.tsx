
import React, { useState } from 'react';
import Result from '../types/results';
import axios from 'axios'
import cheerio from 'cheerio'

type IndividualResultComponentProps = {
    result: Result;
}

export default function IndividualResultComponent(props: IndividualResultComponentProps) {
    let [title, setTitle] = useState({title: props.result.link})
    let [workingLink, setWorkingLink] = useState({link: props.result.link})
    try {
        axios.get(props.result.link.startsWith('http') ? props.result.link : 'https://' + props.result.link).then((response)=> {
            let html = response.data
            onTitleUpdate(cheerio.load(html)("title").text())
        })
    } catch (exception: any) {
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
        if (title.length > 0 && title !== ' ') {
            setTitle({title: title})
        }
    }
    return <div>
        <a href={workingLink.link} target="_blank" rel="noopener noreferrer">{title.title.length > 0 ? title.title : workingLink.link}</a>
        <p>{props.result.description}</p> 
    </div>
}