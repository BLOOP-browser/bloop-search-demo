import React, { useState, useEffect, createRef } from 'react';
import FormInput from './form-input';
import { postContent } from '../utils/elastic-utils'
export default function Recommendations() {
    let formRef = createRef<HTMLFormElement>()
    const [linkValue, setLinkValue] = useState({value: "Please Enter Link"})
    const [descriptionValue, setDescriptionValue] = useState({value: "Please Enter Description"})
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

    }
    
    return(
    <div>
        <h2> Recommendation Form </h2>
        <form ref={formRef} onSubmit={submit}>
            <FormInput value={linkValue.value} setValue={setLinkValue}></FormInput><br/>
            <FormInput value={descriptionValue.value} setValue={setDescriptionValue} 
                style={{"width": 300, "height": 150}}/><br/>
        </form>
        <button onClick={submit}> ENTER </button> 
        { !visValue.visibility ? '' : <p> Thanks for your suggestion!</p>}
    </div>
    )
}