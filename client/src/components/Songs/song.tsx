import React from 'react';
import {SongType} from "@/utils/types/commonTypes";
import style from './song.module.scss'
import Link from "next/link";

interface ISong {
    song: SongType
}
const Song: React.FC<ISong> = ({song}) => {
    return (
        <Link href={`song/${song.id}`} legacyBehavior>
        <div className={style.container}>
            {song.title}
        </div>
        </Link>
    );
};

export default Song;