import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Accordion from "./components/Accordion/Accordion";
import {stringify} from "querystring";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {RatingProps, RatingValueType, UncontrolledRating} from "./components/Rating/Star";


const App = () => {
    let [Tvalue, setValue] = useState<RatingValueType>(0)
    return (
        <div className={"App"}>
            <OnOff/>
            <OnOff/>
            <OnOff/>

            <UncontrolledRating Tvalue={Tvalue} OnClick={setValue}/>

            <UncontrolledAccordion titleValue={"Menu"}/>


        </div>
    );
}

type PageTitlePropsType = {

    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}


export default App;
