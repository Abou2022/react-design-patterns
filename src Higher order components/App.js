
import {useState} from 'react';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';
// import {UncontrolledOnboardingFlow} from './UncontrolledOnboardingFlow'

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
<button onClick ={() => goToNext({age : 70})}>Next</button>
</>
);

const SetpThree = ({goToNext}) => ( 
<>
<h1>Setp 3</h1>
{/* We can add input to collecte the data */}
<p>Congratulation! You got discount</p>
<button onClick ={() => goToNext({})}>Next</button>
</>
);

const SetpFour = ({goToNext}) => ( 
<>
<h1>Setp 4</h1>
{/* We can add input to collecte the data */}
<button onClick ={() => goToNext({hairColor : 'brown'})}>Next</button>
</>
);

function App() {

	const [onbordingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

	const onNext = stepData => {
		setOnboardingData({...onbordingData, ...stepData});
		setCurrentIndex(currentIndex + 1);
    }
	return (
		<ControlledOnboardingFlow 
		currentIndex = {currentIndex}
		onNext = {onNext}
		>

			<SetpOne/>
			<SetpTwo/>
			{/* We can add the conditional*/}
			{onbordingData.age >= 62 && <SetpThree/>}
			<SetpFour/>
		</ControlledOnboardingFlow>
	);
	
}

export default App;