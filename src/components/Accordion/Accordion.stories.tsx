import React, {useState} from "react";

import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion Stories',
    component: UncontrolledAccordion,
}
const callback = action("Change")
const Clicked = action("Item was CLICKED")
export const MenuCollapsed = () => <UncontrolledAccordion collapsed={true} titleValue={"--Menu--"} onChange={callback}
                                                          numbersInBody={[]} OnClick={Clicked}/>
export const MenuUnCollapsed = () => <UncontrolledAccordion collapsed={false} titleValue={"--Body--"}
                                                            onChange={callback} numbersInBody={[
    {title: "Maga", value: 1},
    {title: "Serega", value: 2},
    {title: "Dima", value: 3},
    {title: "Valera", value: 4}]} OnClick={Clicked}
/>
export const NewMode = () => {
    const [value, SetValue] = useState(true)
    return (
        <UncontrolledAccordion collapsed={value} titleValue={"--Menu--"} onChange={() => {
            SetValue(!value)
        }} numbersInBody={[
            {title: "Maga", value: 1},
            {title: "Serega", value: 2},
            {title: "Dima", value: 3},
            {title: "Valera", value: 4},]}
                               OnClick={Clicked}
        />
    )

}