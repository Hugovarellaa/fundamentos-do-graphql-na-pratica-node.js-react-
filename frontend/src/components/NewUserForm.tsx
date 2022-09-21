import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { GET_USER } from "../App";
import { client } from "../lib/apollo";

const CREATE_USER = gql`
  mutation ( $name: String!) {
    createUser( name: $name) {
    
      id
      name
    }
  }
`


export function NewUserCreateForm() {
  const [name, setName] = useState('')
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER)


  async function handleCreateUserForm(event: FormEvent) {
    event.preventDefault()
    if (!name) {
      return;
    }
    await createUser({
      variables: {
        name,
      },
      // refetchQueries: [GET_USER] -> faz uma nova chamada e atualizar 

      // Método update trabalha com cache
      update: (cache, { data: { createUser } }) => {
        const { users } = client.readQuery({ query: GET_USER })

        cache.writeQuery({
          query: GET_USER,
          data: {
            users: {
              ...users,
              createUser
            }
          }
        })
      }
    })

  }

  return (
    <form onSubmit={handleCreateUserForm}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Salvar</button>
    </form>
  )
}