import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends Component {

    getColor = () => {
        if (this.props.percent === 100) return 'green';
        return this.props.percent > 50 ? 'lightgreen' : 'red';
    };

    getWidthAsPercentOfTotalWidth = () => {
        return parseInt(this.props.width * (this.props.percent / 100), 10);
    };

    render() {
        const { percent, width, height } = this.props;
        return (
            <div style={{border: 'solid 1px lightgray', width: width}}>
                <div style={{
                    width: this.getWidthAsPercentOfTotalWidth(),
                    height,
                    backgroundColor: this.getColor(percent)
                }} />
            </div>
        )
    }
}
ProgressBar.propTypes = {
    /** Percent of progress completed */
    percent: PropTypes.number.isRequired,

    /** Width of progress bar */
    width: PropTypes.number.isRequired,

    /** Height of progress bar */
    height: PropTypes.number
};

ProgressBar.defaultProps = {
    height: 5
};

export default ProgressBar;