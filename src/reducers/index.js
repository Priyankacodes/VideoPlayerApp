import { combineReducers } from 'redux';
import videos from './videos';
import currentVideo from './currentVideo';

const rootReducer = combineReducers({
    videos,
    currentVideo
});

export default rootReducer;