
import { useState, useEffect } from "react";

//the controll form permit use to check the user input 
export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState('');

    //nothing inside useState because it is a number
    
    // const [ageInputError, setAgeInputError] = useState();

    const [name, setName] = useState('');
    const [age, setAge] = useState();
    const [hairColor, setHairColor] = useState('');

    //we use useEffect to display message
    useEffect(() =>{
        if(name.length<2){
            setNameInputError('Name must be two or more characters');
        }else{
            setNameInputError('');
        }
    },[name])

    // useEffect(() =>{
    //     if(age < 18){
    //         setAgeInputError('Age must be more then 18');
    //     }else{
    //         setAgeInputError('');
    //     }
    // },[age])

    return(
        <form>
            {nameInputError && <p>{nameInputError}</p>}
            {/* {ageInputError && <p>{ageInputError}</p>} */}
             <input
              name="name" 
              type="text" 
              placeholder="Name"
              value={name} 
              onChange={e => setName(e.target.value)}/>
            <input 
              name="age" 
              type="number" 
              placeholder="Age" 
              value={age} 
              //We need to add number to convert e.target.value
              onChange={e => setAge(Number(e.target.value))}/>
            <input 
              name="hairColor" 
              type="text" 
              placeholder="Hair Color" 
              value={hairColor} 
              onChange={e => setHairColor(e.target.value)}/>
            <button>Submit</button>
        </form>
    )
}

