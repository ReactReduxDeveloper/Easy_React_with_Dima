import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./Star";
import Accordion from "./Accordion/Accordion";
import {stringify} from "querystring";
import OnOff from "./OnOff/OnOff";
import UncontrolledAccordion from "./Accordion/UncontrolledAccordion";
import UncontrolledRating from "./Star";


const App = () => {
    return (
        <div className={"App"}>
            <OnOff/>
            <OnOff/>
            <OnOff/>

            <UncontrolledRating />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>

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
