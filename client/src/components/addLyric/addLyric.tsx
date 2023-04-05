import React, {FC, useState} from 'react';
import {Button, TextField} from "@mui/material";
import style from './addLyric.module.scss'
import {useMutation} from "@apollo/client";
import {ADD_LYRIC_TO_THE_SONG} from "@/utils/apolloClient/mutations/lyricMutation";

interface IAddLyric {
    songId: string
}

const AddLyric:FC<IAddLyric> = ({songId}) => {

    const [content, setContent] = useState('')

    const [addLyric] = useMutation(ADD_LYRIC_TO_THE_SONG, {variables: {content, songId}})


    return (
        <form className={style.container}>
            <TextField fullWidth placeholder={'Enter new lyric'} autoComplete={'off'} value={content}
                       onChange={(e) => setContent(e.target.value)}/>
        <Button disabled={!content} onClick={() => addLyric()}>Post</Button>
        </form>
    );
};

export default AddLyric;