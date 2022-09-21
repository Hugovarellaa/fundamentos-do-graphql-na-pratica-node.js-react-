import { gql, useQuery } from "@apollo/client";
import { NewUserCreateForm } from "./components/NewUserForm";

type User = {
  id: string;
  name: string;
}

const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`

export function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER)


  if (loading) {
    return <div>Loading...</div>
  }

  return (

    <div>
      <ul>
        {
          data?.users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
      <NewUserCreateForm />
    </div>

  )
}