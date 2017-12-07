import { connect } from 'react-redux';

import VideoList from '../components/VideoList';
import { selectVideo } from '../actions/currentVideo';

const mapStateToProps = ({ videos }) =>
    ({ videos });

const mapDispatchToProps = (dispatch) => ({
    selectVideo: (video) => dispatch(selectVideo(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);