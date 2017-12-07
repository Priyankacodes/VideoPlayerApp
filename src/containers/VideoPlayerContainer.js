import { connect } from 'react-redux';

import VideoPlayer from '../components/VideoPlayer';

const mapStateToProps = ({ currentVideo }) =>
    ({ currentVideo });

export default connect(mapStateToProps)(VideoPlayer);