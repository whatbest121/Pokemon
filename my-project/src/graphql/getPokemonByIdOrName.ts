// graphql/test.ts
import { gql } from '@apollo/client';

export const GET_POKEMON_BY_NAME = gql`
 query pokemon($id: String, $name: String){
  pokemon(id: $id, name: $name){
    id
    number
    name
    types
  }
}
`;
