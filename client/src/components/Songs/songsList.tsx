import React from 'react';
import {ISongs} from "@/pages";
import Song from "@/components/Songs/song";



const SongsList: React.FC<ISongs> = ({songs}) => {
    return (
        <div>
            {songs.map(song => <Song song={song} key={song.id} />)}
        </div>
    );
};

export default SongsList;