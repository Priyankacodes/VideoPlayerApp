import { connect } from 'react-redux';

import SearchBar from '../components/SearchBar';
import { fetchVideos } from '../actions/videos';

const mapStateToProps = ({ videos }) =>
    ({ videos });

const mapDispatchToProps = (dispatch) => ({
    fetchVideos: (query) => dispatch(fetchVideos(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);