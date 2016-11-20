import React, { Component, PropTypes } from 'react';
import HelloWorldWidget from '../components/HelloWorldWidget';
import LiveCounter from '../components/LiveCounter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as helloWorldActionCreators from '../actions/helloWorldActionCreators';
import ActionCable from 'actioncable';

// This is also referred to as mapStateToProps in some examples.
function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$helloWorldStore: state.$$helloWorldStore };
}

// Simple example of a React "smart" component
// Modified from the original example because we need to access lifecycle methods.
class HelloWorld extends Component {

  //We need this lifecycle method to subscribe to actioncable events.
  componentWillMount() {
    console.log('subscribing to actioncable events...');
    const actions = bindActionCreators(helloWorldActionCreators, this.props.dispatch);
    const { updateStats } = actions;
    const cable = ActionCable.createConsumer('ws://localhost:3000/cable');
    cable.subscriptions.create({ channel: "StatsChannel" }, {
      received: (data) => {
        updateStats(Immutable.Map(data));
      }
    });
  }

  //Unsubscribe from actioncable here...
  componentWillUnmount() {
    console.log('unsubscribing from actioncable events...');
    App.cable.subscriptions.remove({ channel: "StatsChannel" });
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, $$helloWorldStore } = this.props;
    const actions = bindActionCreators(helloWorldActionCreators, dispatch);
    const { updateName } = actions;
    const name = $$helloWorldStore.get('name');
    const stats = $$helloWorldStore.get('stats');

    // This uses the ES2015 spread operator to pass properties as it is more DRY
    // This is equivalent to:
    // <HelloWorldWidget $$helloWorldStore={$$helloWorldStore} actions={actions} />
    return (
      <div>
        <HelloWorldWidget {...{ updateName, name }} />
        <hr/>
        <LiveCounter {...{count:stats.get('apples'), label:'Apples' }} />
        <hr/>
        <LiveCounter {...{count:stats.get('oranges'), label:'Oranges' }} />
      </div>
      );
  }
}

HelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$helloWorldStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$helloWorldStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(HelloWorld);
