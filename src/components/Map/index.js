import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getInfo } from 'actions/info';
import { FormattedMessage } from 'react-intl';

import GoogleMap from 'google-map-react';
import Marker from './Marker';

class Map extends Component {
    static propTypes = {
        info: PropTypes.object.isRequired
    }

    static defaultProps = {
        center: {lat: 59.938043, lng: 30.337157},
        zoom: 17,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    }

    componentWillMount() {
        const { getInfo } = this.props;

        getInfo();
    }

    static store(state) {
        return {
            info: state.info
        };
    }

    render() {
        const { info } = this.props;

        if(!info.location) { return null; }

        return(
            <div style={{ width: '100%', height: '40vh' }}>
                <GoogleMap
                    bootstrapURLKeys={{
                        key: 'AIzaSyBXSf94vCunJOSd6IF38L0jGlqMaPFtMJI'
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    center={info.location}
                >
                    <Marker lat={info.location.lat} lng={info.location.lng} text={'Here!'} />
                </GoogleMap>
            </div>
        );
    }
}

module.exports = connect(Map.store, { getInfo })(Map);
