import axios from 'axios';
import { SET_VIDEOS, FETCH_VIDEOS } from './actionTypes';
import { selectVideo } from './currentVideo';

export const setVideos = (videos) => ({
    type: SET_VIDEOS,
    videos
});

export const fetchVideos = (query, max = 5) => {
    return (dispatch, getState) => {
        return axios({
            type: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search/',
            'params': {
                'key': 'AIzaSyBwFjtGipxqFwroszbkbW2yVPbLrL8O8Ww',
                'part': 'snippet',
                'maxResults': max,
                'q': query,
                'type': 'video'
            }
        })
        .then(res => {
            if (res.data.items) {
                dispatch(setVideos(res.data.items))
                dispatch(selectVideo(res.data.items[0]))
            }
        }) 
        .catch(err => {
            console.log('Error fetching videos from youTube', err) 
        })
    }
}


