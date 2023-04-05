import React, {FC} from 'react';
import {Button, Modal, Paper} from "@mui/material";
import {useMutation} from "@apollo/client";
import {DELETE_SONG} from "@/utils/apolloClient/mutations/songMutation";
import {useRouter} from "next/router";

interface IDeleteModal {
    id: string,
    visible: boolean
    onClose: () => void
}

const DeleteModal:FC<IDeleteModal> = ({id,visible, onClose}) => {

    const [deleteSong] = useMutation(DELETE_SONG)
    const router = useRouter()


    const onDeleteHandler = async () => {
       await deleteSong({variables: {id}})
        onClose()
       await router.back()
    }

    return (
        <Modal open={visible} onClose={onClose}>
            <Paper className={'modal'}>
                <h3>Are you sure you want to delete this song ?</h3>
                <div style={{display: "flex", justifyContent:'space-between', alignItems: 'center', marginTop: '10px'}}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button color={'error'} onClick={onDeleteHandler}>Delete</Button>
                </div>

            </Paper>
        </Modal>

    );
};

export default DeleteModal;