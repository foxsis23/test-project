import { Grid, Pagination } from '@mui/material';
import usePagination from '@mui/material/usePagination/usePagination';
import React from 'react';

interface Props{
    totalPages:number,
    setSkip:React.Dispatch<React.SetStateAction<number>>
}

const ProductPagination:React.FC<Props> = ({totalPages,setSkip}) =>{
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) =>{
        if(value == 1){
            setSkip(0)
        }else{
            setSkip((value * 10) - 10)
        }
        console.log(value)
        
    }
    return (
        <Grid container justifyContent={'center'} mt="50px">
            <Pagination count={totalPages} onChange={handleChange} />
        </Grid>
    );
}

export default ProductPagination;