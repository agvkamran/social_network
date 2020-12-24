import React from 'react';
import MusicItem from '../music/music-item/music-item';
import {addMusicAC, addMusicTextAC} from '../../redux/music-reducer';

const Music = (props) => {
    
    let musicElement = props.state.sound.map((m) => <MusicItem id={m.id} soundtrack={m.soundtrack}/>)
    let musicRef = React.createRef();

    const addMusic = () => {
        // let a = musicRef.current.value;
        props.dispatch(addMusicAC());
    }
    
    const addMusicText = () => {
        let m = musicRef.current.value;
        props.dispatch(addMusicTextAC(m))
    }

    return (
        <div>
            <p>{musicElement}</p>
            <textarea ref={musicRef} value={props.state.musicText} onChange={addMusicText}></textarea>
            <button onClick={addMusic}>add music</button>
        </div>
    )
}


export default Music;
