import axios from 'axios';
import { SELECT_VIDEO } from './actionTypes';

export const selectVideo = video => ({
    type: SELECT_VIDEO,
    video
})