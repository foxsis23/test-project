import { Grid, Pagination } from '@mui/material';
import usePagination from '@mui/material/usePagination/usePagination';
import React from 'react';

interface Props{
    totalPages:number,
    setSkip:React.Dispatch<React.SetStateAction<number>>,
    setSearchTerm:React.Dispatch<React.SetStateAction<string>>,
}

const ProductPagination:React.FC<Props> = ({totalPages,setSkip,setSearchTerm}) =>{
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) =>{
        setSearchTerm('')
        if(value == 1){
            setSkip(0)
        }else{
            setSkip((value * 10) - 10)
        }
        
    }
    return (
        <Grid container justifyContent={'center'} mt="50px">
            <Pagination count={totalPages} onChange={handleChange} />
        </Grid>
    );
}

export default ProductPagination;