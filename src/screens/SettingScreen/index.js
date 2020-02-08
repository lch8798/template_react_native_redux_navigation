import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setWorking } from './../../redux/app';

class SettingScreen extends Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    const { working } = this.props;
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Text>Setting Screen</Text>
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

export default connect(mapStateToProps, matchDispatchToProps)(SettingScreen);