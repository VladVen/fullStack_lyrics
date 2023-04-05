import {gql} from "@apollo/client";


export const ADD_LIKE = gql`
    mutation likeLyric($id: ID) {
        likeLyric(id: $id) {
            id
            likes
            content
        }
    }
`
export const ADD_LYRIC_TO_THE_SONG = gql`
    mutation addLyricToSong($content: String, $songId: ID) {
        addLyricToSong(content: $content, songId: $songId) {
            id,
            title,
            lyrics {
                id, content, likes
            }
        }
    }
`