// graphql/test.ts
import { gql } from '@apollo/client';

export const GET_POKEMON_Attack = gql`
query pokemon($id: String, $name: String){
  pokemon(id: $id, name: $name){
    id
    name
    attacks{
      fast{
        name
        type
        damage
      }
      special{
        name
        type
        damage
      }
    }
  }
}
`;
