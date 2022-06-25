export const LargePersonListItem = ({person}) => {
    const {name, age, hairColor, hobbies} = person;

    return (
        <>
        <h3 style={{backgroundColor: "gold"}}>{name}</h3> 
        <p style={{backgroundColor: "gold"}}>Age: {age} years</p> 
        <p style={{backgroundColor: "gold"}}>Hair Color: {hairColor}</p> 
        <h3 style={{backgroundColor: "gold"}}>hobbies</h3>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul> 
        </>
    );
}