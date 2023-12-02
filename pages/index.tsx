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
  //const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();


  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <MovieList title='Rutinas'data={movies} />
        {/* <MovieList title='Mi lista'data={favorites} /> */}
        {/* <script src="https://player.vimeo.com/api/player.js"></script> */}

      </div>
    </>
  )
}
