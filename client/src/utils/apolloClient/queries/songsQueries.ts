import gql from "graphql-tag";
export const GET_ALL_SONGS = gql`
     {
        songs {
            title
            id
         }
    }
`

export const GET_SONGS_IDS = gql`
     {
        songs {
            id
         }
    }
`
export const GET_CURRENT_SONG = gql`
 query song($id: ID!) {
   song(id: $id) {
    id,
    title,
    lyrics {
      id,
      likes,
      content
            }
    }
  }
`

