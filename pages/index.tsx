import { getSession } from 'next-auth/react'
import { NextPageContext } from 'next';
import useCurrentUser from '@/hooks/useCurrentUser';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';
import InfoModal from '@/components/InfoModal';
import useInfoModalStore from '@/hooks/useInfoModal';
// import useFavorites from '@/hooks/useFavorites';
import StreachingList from '@/components/StreachList';
import useStreachList from '@/hooks/useStreachList';
import JuegoList from '@/components/JuegoList';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanet: false,
      }
    }
  }
  return {
    props: {}
  }
}
 
export default function Home() {
  const { data: user } = useCurrentUser();
//user es el alias de data.
  const { data: movies = [] } = useMovieList();
  const { data: streaching = [] } = useStreachList();
  //const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();


  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList title='Rutinas'data={movies} />
        <StreachingList title='Estiramentos'data={movies} />
        <JuegoList title='Juegos'data={movies} />
        {/* <MovieList title='Mi lista'data={favorites} /> */}

      </div>
    </>
  )
}
