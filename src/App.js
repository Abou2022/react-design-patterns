import { SplitScreen } from "./Components/SplitScreen";

const LeftHandComponent = () => {
  return <h1 style={{backgroundColor:'gold'}}>Left!</h1>
}
const RightHandComponent = () => {
  return <p style={{backgroundColor:'green'}}>Right!</p>
}

function App() {
  return (
    <SplitScreen 
    left={LeftHandComponent}
    right={RightHandComponent}
    />
     
    
  );
}

export default App;
