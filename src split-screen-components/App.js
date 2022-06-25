import { SplitScreen } from "./Components/SplitScreen";

const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor:'gold'}}>{name}</h1>
}
const RightHandComponent = ({message}) => {
  return <h1 style={{backgroundColor:'green'}}>{message}!</h1>
}

function App() {
  return (
    // <SplitScreen 
    // left={LeftHandComponent}
    // right={RightHandComponent}
    // leftWeight={1}
    // rightWeight={3}
    // />
    <SplitScreen  leftWeight={3} rightWeight={3}>
      <LeftHandComponent name='Bak'/>
      <RightHandComponent message='Hello World'/>
    </SplitScreen>
     
    
  );
}

export default App;
