import React, {useState} from 'react';
import {RatingValueType, UncontrolledRating} from "./Rating";


export default {
    title: 'Rating stories',
    component: UncontrolledRating,
}
export const EmptyStars = () => <UncontrolledRating Tvalue={0} OnClick={x => x}/>
export const OneStar = () => <UncontrolledRating Tvalue={1} OnClick={x => x}/>
export const TwoStar = () => <UncontrolledRating Tvalue={2} OnClick={x => x}/>
export const ThreeStar = () => <UncontrolledRating Tvalue={3} OnClick={x => x}/>
export const FourStar = () => <UncontrolledRating Tvalue={4} OnClick={x => x}/>
export const FiveStar = () => <UncontrolledRating Tvalue={5} OnClick={x => x}/>
export const ClickStart = ()=> {
    const [rating,setRating] = useState<RatingValueType>(0)
    return (
        <UncontrolledRating Tvalue={rating} OnClick={setRating}/>
    )
}