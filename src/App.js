import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { RegularList } from "./RegularList";

const people = [
  {
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies:['swimming', 'video game']
},
  {
  name: 'Bremd Smith',
  age: 33,
  hairColor: 'black',
  hobbies:['golf', 'mathematic']
},
  {
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blond',
  hobbies:['medecine', 'gym']
}];

const products =[
  {
    name: 'Flat-Screen TV',
    price: "$300",
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
  },
  {
    name: 'Basketball',
    price: "$100",
    description: 'Just like a pros use',
    rating: 3.8,
  },
  {
    name: 'Runing Shoes',
    price: "$120",
    description: 'Technology for optimum',
    rating: 4.2,
  }];

function App() {
  return (
    <>
    <RegularList
    items={people}
    resourceName='person'
    itemComponent={SmallPersonListItem}/>

    <RegularList
    items={people}
    resourceName='person'
    itemComponent={LargePersonListItem}/>
    </>
  );
}

export default App;
