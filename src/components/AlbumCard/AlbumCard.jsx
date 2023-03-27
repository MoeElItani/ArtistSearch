const AlbumCard = ({ album }) => {
   console.log(album)
   return (
      //  Card Component of an album
      <div
         key={album.artistId}
         className='w-1/2 lg:w-1/4 px-4 mb-8 flex flex-col'
      >
         <img
            src={album.images[0].url}
            alt={album.name}
            className='mb-3 w-[80%] rounded shadow-md'
         />
         <h2 className='font-bold text-xl mb-2'>
            {album.name}
         </h2>
         <p>{album.artists[0].name}</p>
         <p>{album.release_date}</p>
         <p>
            {album.total_tracks}{' '}
            {album.total_tracks < 2 ? 'track' : 'tracks'}
         </p>
         <button className='w-[80%] h-14 bg-[#1DB954] mt-auto'>
            <a
               href={album.external_urls.spotify}
               target='_blank'
               rel='noreferrer'
               className='text-white font-semibold'
            >
               Preview on Spotify
            </a>
         </button>
      </div>
   )
}

export default AlbumCard
