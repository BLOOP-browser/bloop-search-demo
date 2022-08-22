import React, { useState, useEffect, createRef } from 'react';

type FormInputProps = {
    value: string;
    setValue(value: any): any;
    style?:any
}
export default function FormInput(props: FormInputProps) {
    
    const [valueClearedOnce, setValueClearedOnce] = useState({cleared: false})
    const handleOnChange = (e: any) => {
        return props.setValue({value: e.target.value})
    }
    return(
        <input onClick={() => {
            if (!valueClearedOnce.cleared) {
                props.setValue({value: ""})
                setValueClearedOnce({cleared: true})
            }
        }} onChange={(e) => {
            handleOnChange(e)}
        } value={props.value} type="text" id="fname" name="fname" style={props.style}/>

    )
}