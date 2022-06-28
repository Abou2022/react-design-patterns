export const SmallPersonListItem = ({person}) => {
    const {name, age} = person;

    return (
        <p style={{backgroundColor: "lightblue"}}>Name: {name}, Age: {age} years</p>
    );
}