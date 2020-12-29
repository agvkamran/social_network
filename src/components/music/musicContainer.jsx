import {addMusicAC, addMusicTextAC} from '../../redux/music-reducer';
import Music from './music';
import { connect } from 'react-redux';
// const MusicContainer = (props) => {

//     let state = props.state;

//     const addMusic = () => {
//         // let a = musicRef.current.value;
//         props.dispatch(addMusicAC());
//     }
    
//     const addMusicText = (m) => {
//         props.dispatch(addMusicTextAC(m));
//     }

//     return <Music addNewMusic={addMusic} addMusicText={addMusicText} state={state}/>
// }

const mapStateToProps = (state) => {
    return {
        musicPage: state.musicPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMusic: () => {
            dispatch(addMusicAC());
        },
        addMusicText: (m) => {
            dispatch(addMusicTextAC(m))
        }
    }
}

const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music);

export default MusicContainer;
