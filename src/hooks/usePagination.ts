

export const usePagination = (totalCount:number,limit:number):number[] =>{
    const totalPages = Math.ceil(totalCount / limit)

    return [totalPages]
}