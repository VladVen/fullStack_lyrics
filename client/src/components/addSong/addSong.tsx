import React, {FC, useState} from 'react';
import style from './addSong.module.scss'
import {Button, Fab, Modal, Paper, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useMutation} from "@apollo/client";
import {ADD_SONG} from "@/utils/apolloClient/mutations/songMutation";

interface IAddSong {
    refetch: () => void
}

const AddSong:FC<IAddSong> = ({refetch}) => {

    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState('')

    const visibleHandler = () => setVisible(prevState => !prevState)

    const [addSong] = useMutation(ADD_SONG,{variables: {title: title}});


    const onSubmit = async (e) => {
        e.preventDefault()
        await addSong()
        refetch()
        setTitle('')
            visibleHandler()

    }

    return (
        <div className={style.container}>
            <Fab color={'primary'} aria-label="add" onClick={visibleHandler}>
                <AddIcon/>
            </Fab>
            <Modal open={visible} onClose={visibleHandler}>
                <Paper className={style.modal}>
                    <h3 style={{textAlign: "center"}}>Create new Song</h3>
                    <form>
                        <TextField placeholder={'Write title of the song'} size={"medium"} value={title}
                                   onChange={(e) => setTitle(e.currentTarget.value)}/>
                        <div>
                            <Button onClick={visibleHandler}>Close</Button>
                            <Button onClick={(e) => onSubmit(e)} type={'submit'} disabled={!title}>Post</Button>
                        </div>
                    </form>
                </Paper>
            </Modal>
        </div>
    );
};

export default AddSong;