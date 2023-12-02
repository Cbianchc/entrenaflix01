import useSwr from 'swr';
//esto es algo parecido a react query, no hace falta redux ni nada
//lo que hace es guardar el cache para no cargar de nuevo
import fetcher from '@/lib/fetcher';

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSwr('/api/current',  fetcher)
    return {
        data,
        error,
        isLoading,
        mutate
    }
    
}
export default useCurrentUser;