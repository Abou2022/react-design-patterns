
import {useState} from 'react';
import {UncontrolledOnboardingFlow} from './UncontrolledOnboardingFlow'

const SetpOne = ({goToNext}) => ( 
<>
<h1>Setp 1</h1>
{/* We can add input to collecte the data */}
<button onClick ={() => goToNext({name : 'bak syl'})}>Next</button>
</>
);

const SetpTwo = ({goToNext}) => ( 
<>
<h1>Setp 2</h1>
{/* We can add input to collecte the data */}
<button onClick ={() => goToNext({age : 25})}>Next</button>
</>
);

const SetpThree = ({goToNext}) => ( 
<>
<h1>Setp 3</h1>
{/* We can add input to collecte the data */}
<button onClick ={() => goToNext({hairColor : 'brown'})}>Next</button>
</>
);





function App() {
	return (
		<UncontrolledOnboardingFlow onFinish={data => {
		console.log(data) 
		alert('Onboarding complete')
		}}>

			<SetpOne/>
			<SetpTwo/>
			<SetpThree/>
		</UncontrolledOnboardingFlow>
	);
	
}

export default App;