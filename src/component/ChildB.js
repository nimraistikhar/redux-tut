import React, { useContext } from 'react'
import { data } from '../App'

const ChildB = () => {
    const { name, gender, age } = useContext(data);
    return (
        <div>Hi my name is {name} and my gender is {gender}, and my age is {age}</div>
    )
}

export default ChildB