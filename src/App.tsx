import { useState } from 'react'

import Container from '../src/components/Container/Container';
import TheHeader from '../src/components/TheHeader/TheHeader';
import Search from '../src/components/Search/Search';
import UserCard from './components/UserCard/UserCard'
import { isGithubUser } from '../src/utils/typeguards'
import { extractLocalUser } from './utils/extractLocalUser'
import { GithubUser, LocalGithubUser, NotFoundUserError } from 'type';
import { defaultUser } from 'mock';


const BASE_URL = 'http://api.github.com/users/'

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser)

  const fetchUser = async(username: string) => {
    const url = `${BASE_URL}${username}`

    const res = await fetch(url)
    const user = await res.json() as (GithubUser | NotFoundUserError)
    if(isGithubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }

  return (
      <Container >
        <TheHeader />
        <Search hasError={!user} onSubmit={fetchUser}/>
        {
          user && (
            <UserCard {...user}/>
          )
        }
      </Container>
  );
}

export default App;
