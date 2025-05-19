import { gql } from '@apollo/client';

export const GET_POKEMON_INFO = gql`
query pokemon($id: String, $name: String){
  pokemon(id: $id, name: $name){
    id
    number
      name
      classification
      types
      resistant
      weaknesses
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
      fleeRate
      maxCP
      maxHP
      image
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
    evolutions{
      id
      number
      name
      classification
      types
      
    }
  }
}
`;
