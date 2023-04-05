
export interface LyricsType {
    id: string
    likes: number
    content: string
    song: SongType
}



export interface SongType {
    title: string
    id: string
    lyrics: LyricsType[]

}