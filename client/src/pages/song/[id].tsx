import React, {FC, useEffect, useState} from 'react';
import {SongType} from "@/utils/types/commonTypes";
import client from "@/utils/apolloClient/apolloClient";
import {GET_CURRENT_SONG, GET_SONGS_IDS} from "@/utils/apolloClient/queries/songsQueries";
import {useQuery} from "@apollo/client";
import {Button, CircularProgress} from "@mui/material";
import Lyric from "@/components/lyrics/lyric";
import AddLyric from "@/components/addLyric/addLyric";
import style from './id.module.scss'
import DeleteModal from "@/components/deleteModal/deleteModal";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useRouter} from "next/router";
import Head from "next/head";

interface ISong {
    id: string
}

const Song: FC<ISong> = ({id}) => {

    const {data, loading, error} = useQuery(GET_CURRENT_SONG, {variables: {id}})

    const [visible, setVisible] = useState(false)
    const navigation = useRouter()

    const song: SongType = data?.song

   if(error) {
       navigation.push('/404')
   }

    if (loading || error) return <div className={'loading'}><CircularProgress/></div>

    const onModal = () => {
        setVisible(prevState => !prevState)
    }

    return (
        <>
            <Head>
                <title>{song?.title}</title>
            </Head>
            <div className={style.container}>
                <div> <ArrowBackIosIcon onClick={()=> navigation.back()}/> {song.title} <Button color={'error'} onClick={onModal}>Delete</Button></div>
                <hr/>
                <div className={style.lyrics}>
                    {
                        song.lyrics?.map(item => <Lyric lyric={item} key={item.id}/>)
                    }
                </div>
                <AddLyric songId={song.id}/>
                <DeleteModal id={song.id} onClose={onModal} visible={visible}/>
            </div>
        </>

    );
};

export default Song;


export async function getStaticPaths(context) {

    const ids = await client.query({
        query: GET_SONGS_IDS,
    })

    const paths = ids.data.songs?.map(item => ({params: {id: item.id}}))

    return {
        paths,
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    return {
        props: {id: params.id},
    }
}