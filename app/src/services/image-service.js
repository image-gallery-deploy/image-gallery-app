imageService.$inject = [ '$http', 'apiUrl' ];

export default function imageService( $http, apiUrl ) {
  return {
    getImages() {
      return $http.get( `${apiUrl}/images` )
      .then( res => res.data );
    },
    get(album) {
      console.log('image-service GET request for album: ', album);
      return $http.get( `${apiUrl}/images/${album}` )
      .then( res => res.data );
    },
    remove(id) {
      return $http.delete( `${apiUrl}/images/${id}` )
      .then( res => res.data );
    }, 
    add(image) {
      return $http.post( `${apiUrl}/images`, image )
      .then( res => res.data );
    }
  };
}