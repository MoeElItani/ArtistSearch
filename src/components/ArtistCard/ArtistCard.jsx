const ArtistCard = ({ artist }) => {
   return (
      //  Card Component of an Artist
      <div key={artist.id} className='p-4 md:p-3'>
         <img
            src={artist.image}
            alt={artist.name}
            className='mb-3 rounded shadow-md h-48 w-48 object-cover object-center'
         />
         <h2 className='font-bold text-xl mb-2'>
            {artist.name}
         </h2>
         <p className='text-gray-700 text-base'>
            {/* number format to add decimals */}
            {new Intl.NumberFormat('en-US').format(
               artist.followers
            )}{' '}
            followers
         </p>
      </div>
   )
}

export default ArtistCard
