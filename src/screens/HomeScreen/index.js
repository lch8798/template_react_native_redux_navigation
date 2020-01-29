import React, { Component } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setWorking } from './../../redux/app';

class HomScreen extends Component {
  constructor(props) {
    super(props);
  }

  toggleWorking = () => {
    const { working, setWorking } = this.props;
    console.log('press Toggle Working!!!');
    setWorking(!working);
  }

  render = () => {
    const { working } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Text>{working ? 'Working...' : 'Not Working'}</Text>
          <Button title={'Toggle Working'} onPress={this.toggleWorking} />
      </SafeAreaView>
    );
  };
}

function mapStateToProps(state) {
  return {
    working: state.app.working,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setWorking }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomScreen);