import React from 'react';
import MusicItem from '../music/music-item/music-item';

const Music = (props) => {
    let musicPage = props.musicPage;
    let musicElement = musicPage.sound.map((m) => <MusicItem id={m.id} soundtrack={m.soundtrack}/>)
    let musicRef = React.createRef();

    const addMusic = () => {
        // let a = musicRef.current.value;
        // props.dispatch(addMusicAC());
        props.addNewMusic();
    }
    
    const addMusicText = () => {
        let m = musicRef.current.value;
        // props.dispatch(addMusicTextAC(m));
        props.addMusicText(m);
    }

    return (
        <div>
            <p>{musicElement}</p>
            <textarea ref={musicRef} value={props.musicPage.musicText} onChange={addMusicText}></textarea>
            <button onClick={addMusic}>add music</button>
        </div>
    )
}


export default Music;
