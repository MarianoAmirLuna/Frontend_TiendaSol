import './acomodationSearchBar.css'
import {FaSearch} from 'react-icons/fa'

function AcomodationSearchBar() {
    return (
        <div className="accommodation-search">
            <div className='search-field'>
                <div className='input-wrapper'>
                    <input
                        type="text"
                        className='search-input'
                        placeholder="¿Qué buscas?"
                    />
                </div>
            </div>

            <button className='search-button'>
                <FaSearch className='button-icon' />
                Buscar
            </button>
        </div>
    )
}
export default AcomodationSearchBar
