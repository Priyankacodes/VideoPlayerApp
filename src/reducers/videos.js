import { SET_VIDEOS } from '../actions/actionTypes';

const videos = (state = [], action) => {
    switch (action.type) {
        case SET_VIDEOS:
            return action.videos;
        default:
            return state;
    }
};

export default videos;