const ADD_MUSIC = 'ADD-MUSIC';
const ADD_MUSIC_TEXT = 'ADD-MUSIC-TEXT';

const musicReducer = (state, action) => {
    if(action.type === ADD_MUSIC){
        let newMusic = {
            id: '3',
            soundtrack: state.musicText
        }
       state.sound.push(newMusic);
       state.musicText = '';
    }
    else if(action.type === ADD_MUSIC_TEXT){
       state.musicText = action.mText;
    }
    return state;
}

export const addMusicAC = () => {
    return {
        type: ADD_MUSIC
    }
}

export const addMusicTextAC = (m) => {
    return {
        type: ADD_MUSIC_TEXT, mText: m
    }
}

export default musicReducer;
