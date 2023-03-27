const AlbumCard = ({ album }) => {
   return (
      //  Card Component of an album
      <div
         key={album.artistId}
         className='w-1/2 lg:w-1/4 px-4'
      >
         <img
            src={album.images[0].url}
            alt={album.name}
            className='mb-3 w-[60%] rounded shadow-md'
         />
         <h2 className='font-bold text-xl mb-2'>
            {album.name}
         </h2>
      </div>
   )
}

export default AlbumCard
