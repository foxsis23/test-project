import { TextField } from '@mui/material';
import React from 'react';

interface Props{
    searchTerm:string
    setSearchTerm:React.Dispatch<React.SetStateAction<string>>
}

const Search:React.FC<Props> = ({searchTerm,setSearchTerm}) =>{
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <TextField variant="standard" label='Search'
            sx={{width:'50%'}}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
             />
        </div>
    );
}

export default Search;