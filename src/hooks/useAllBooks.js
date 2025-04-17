import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchAllBooks = () => {
    return api.get('/subjects/love.json')
}

export const useAllBooks = () => {
    return useQuery({
        queryKey:['/subjects/love'],
        queryFn: fetchAllBooks,
        select: (result) => result.works
    })
}