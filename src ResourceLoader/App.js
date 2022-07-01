
import { UserLoader } from './UserLoader';
import {UserInfo} from './UserInfo'
import { ProductInfo } from './ProductInfo';

function App() {
	// return (
	// 	<UserLoader userId='234'>
  //     <UserInfo/>
  //   </UserLoader>
	// );
	return (
		<UserLoader productId='1234'>
      <ProductInfo/>
    </UserLoader>
	);
}

export default App;