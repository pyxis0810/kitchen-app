import React, { Component, PropTypes } from 'react';

export default class MyGreatPlace extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='pin'></div>
                <div className='pulse'></div>
            </div>
        );
    }
}