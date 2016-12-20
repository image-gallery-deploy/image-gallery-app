albumService.$inject = [ '$http', 'apiUrl' ];

export default function albumService( $http, apiUrl ) {
  return {
    getAlbums() {
      return $http.get( `${apiUrl}/albums` )
      .then( res => res.data );
    },
    get(album) {
      return $http.get( `${apiUrl}/albums/${album}` )
      .then( res => res.data );
    },
    remove(id) {
      return $http.delete( `${apiUrl}/albums/${id}` )
      .then( res => res.data );
    }, 
    add(album) {
      return $http.post( `${apiUrl}/albums`, album )
      .then( res => res.data );
    }
  };
}