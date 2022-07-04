
import {useState} from 'react';
import {UncontrolledOnboardingFlow} from './UncontrolledOnboardingFlow'

const SetpOne = ({goToNext}) => ( 
<>
<h1>Setp 1</h1>
<button onClick={goToNext}>Next</button>
</>
);

const SetpTwo = ({goToNext}) => ( 
<>
<h1>Setp 2</h1>
<button onClick={goToNext}>Next</button>
</>
);

const SetpThree = ({goToNext}) => ( 
<>
<h1>Setp 3</h1>
<button onClick={goToNext}>Next</button>
</>
);





function App() {
	return (
		<UncontrolledOnboardingFlow>
			<SetpOne/>
			<SetpTwo/>
			<SetpThree/>
		</UncontrolledOnboardingFlow>
	);
	
}

export default App;