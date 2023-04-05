import React, {FC} from 'react';
import {LyricsType} from "@/utils/types/commonTypes";
import {Paper} from "@mui/material";
import style from './lyric.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useMutation} from "@apollo/client";
import {ADD_LIKE} from "@/utils/apolloClient/mutations/lyricMutation";

interface ILyric {
    lyric: LyricsType
}



const Lyric:FC<ILyric> = ({lyric}) => {

    const [addLike] = useMutation(ADD_LIKE, {variables: {id: lyric.id}})

    const likeHandler = async () => {
        await addLike()
    }

    return (
        <Paper className={style.container}>
         <div>
             {lyric.content}
         </div>
            <div>{lyric.likes} <FavoriteIcon onClick={likeHandler}/></div>
        </Paper>
    );
};

export default Lyric;