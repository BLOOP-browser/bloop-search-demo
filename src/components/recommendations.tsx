import React, { useState, useEffect, createRef } from 'react';
import FormInput from './form-input';
import { postContent } from '../utils/elastic-utils'
export default function Recommendations() {
    let formRef = createRef<HTMLFormElement>()
    const [linkValue, setLinkValue] = useState({value: "The URL of your recommendation"})
    const [descriptionValue, setDescriptionValue] = useState({value: "Any comments and #tags"})
    const [visValue, setVisValue] = useState({visibility: false})
    useEffect(() => {
        if (formRef.current) {
            formRef.current.addEventListener("click", function(event) {
                event.preventDefault()
            });
            formRef.current.addEventListener("submit", function(event) {
                event.preventDefault()
            });
        }
    })

    const submit = () => {
        let description = descriptionValue.value
        description = description.replace('Please Enter Link', '')
        let link = linkValue.value
        link = link.replace('Please Enter Link', '')
        postContent({description: description, link: link}, (response: any) => {
            console.log(response)
        })
        setVisValue({visibility: true})
        console.log("what does the submit do?")

    }
    
    return(
    <div>
        <h2> Recommend to BLOOP </h2>
        <form ref={formRef} onSubmit={submit}>
            <FormInput value={linkValue.value} setValue={setLinkValue}></FormInput><br/>
            <FormInput value={descriptionValue.value} setValue={setDescriptionValue} 
                style={{"width": 800, "height": 200}}/><br/>
        </form>
        <button onClick={submit} > SUBMIT </button> {        
            !visValue.visibility ? '' : <h3> Thanks for your suggestion! This is now searchable at demo.getbloop.co</h3>}
            
    </div>
    )
}