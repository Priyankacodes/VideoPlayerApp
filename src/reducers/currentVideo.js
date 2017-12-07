import { SELECT_VIDEO } from '../actions/actionTypes';

const currentVideo = (state = {}, action) => {
    switch (action.type) {
        case SELECT_VIDEO:
            return action.video;
        default:
            return state;
    }
};

export default currentVideo;