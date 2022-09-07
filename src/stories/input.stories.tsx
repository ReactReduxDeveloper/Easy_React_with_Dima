import React, {ChangeEvent, useRef, useState} from 'react';
import OnOff from "../components/OnOff/OnOff";

export default {
    title: 'input',
    // component: OnOff

}
export const UncontrolledInput = () => {
    const [value, Setvalue] = useState("")

    return <>
        <input onChange={(event) => {
            const QWER = event.currentTarget.value;
            Setvalue(QWER)

        }
        }/>
        - {value}

    </>
}
export const ControlledInput = () => {
    return <input value={"IT-INC"}/>

}

export const SecondInput = () => {
    const [value, Setvalue] = useState("")
    const InputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = InputRef.current as HTMLInputElement;
        Setvalue(el.value)
    }
    return <>

        <input ref={InputRef}/>
        <button onClick={save}>Save</button>
        -AV {value}


    </>
}
export const ControlledInput12 = () => {
    const [parentValue, SetparentValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        SetparentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}