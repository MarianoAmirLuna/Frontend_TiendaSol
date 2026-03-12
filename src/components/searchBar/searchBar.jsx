import './searchBar.css'
import {FaSearch} from 'react-icons/fa'
import {Button, TextField} from '@mui/material'
import {useState} from 'react'

function SearchBar({filtrarProductos}) {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="search">
            <div className='search-field'>
                <div className='input-wrapper'>
                    <TextField
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        fullWidth
                        variant="standard"
                        placeholder="¿Qué buscas?"
                    />
                </div>
            </div>

            <Button variant='outlined' onClick={() => filtrarProductos(searchText)}>
                <FaSearch className='button-icon' />
                Buscar
            </Button>
        </div>
    )
}
export default SearchBar
