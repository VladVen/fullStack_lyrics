import SongsList from "@/components/Songs/songsList";
import React, {useEffect} from "react";
import AddSong from "@/components/addSong/addSong";
import {GET_ALL_SONGS} from "@/utils/apolloClient/queries/songsQueries";
import {useQuery} from "@apollo/client";
import {CircularProgress} from "@mui/material";
import Head from "next/head";


const Home = () => {

    const {data, refetch, loading} = useQuery(GET_ALL_SONGS)

    useEffect(() => {
        refetch()
    }, [])

    if (loading) {
        return <div className={'loading'}><CircularProgress/></div>
    }

    return (
        <div style={{padding: 10}}>
            <Head>
                <title>My Songs</title>
            </Head>
            <header>
                <h3>My songs</h3>
                <hr />
            </header>
            {
                !data.songs.length ? <div>Nothing here, please add new song</div>
                    : <SongsList songs={data.songs}/>
            }
            <AddSong refetch={refetch}/>

        </div>
    )
}

export default Home

