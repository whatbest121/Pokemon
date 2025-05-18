import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
interface SearchPokemonProps {
    setName: (name: string) => void
    handleOnClickSearch: () => void
}
export const SearchPokemon = ({ setName, handleOnClickSearch }: SearchPokemonProps) => {
    return (
        <div className='flex'>
            <Input onChange={(e) => setName(e.target.value)} placeholder='Search Pokemon Name or Id' />
            <Button onClick={handleOnClickSearch}><Search /></Button>
        </div>
    )
}
