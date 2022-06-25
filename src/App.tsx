import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./components/Rating/Star";
import Accordion from "./components/Accordion/Accordion";
import {stringify} from "querystring";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/Star";


const App = () => {
    return (
        <div className={"App"}>
          {/*  <OnOff/>
            <OnOff/>
            <OnOff/>
*/}


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
