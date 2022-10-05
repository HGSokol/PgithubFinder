import Container from '../src/components/Container/Container';
import TheHeader from '../src/components/TheHeader/TheHeader';
import Search from '../src/components/Search/Search';
import {UserCard} from './components/UserCard/UserCard'

import { defaultUser } from 'mock';

function App() {
  return (
      <Container >
        <TheHeader />
        <Search hasError onSubmit={() => {}}/>
        <UserCard {...defaultUser}/>
      </Container>
  );
}

export default App;
