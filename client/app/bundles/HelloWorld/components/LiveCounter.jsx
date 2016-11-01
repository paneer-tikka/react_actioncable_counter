import React, { PropTypes } from 'react';

export default class LiveCounter extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    label: PropTypes.string,
  };

  render() {
    const { count, label } = this.props;
    return (
      <div className="live_counter_container">
        <div className="live_counter_count">
          {count}
        </div>
        <div className="live_counter_label">
          {label}
        </div>
      </div>
    );
  }
}
