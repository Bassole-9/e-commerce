import { useState } from "react";



//bare de recherche
const SearchBar = ({onSearch})=>{
    const [search,setSearch]=useState("")

    const handleChange =(e)=>{
        const value = e.target.value;
        setSearch(value)
        onSearch(value)
    }

    return(
        <div>
            <input
            type="text"
            placeholder="Recherche..."
            value={search}
            className="input_recherche"
            onChange={handleChange}
            />
        </div>
    )
}
export default SearchBar