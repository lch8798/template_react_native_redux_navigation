import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setWorking } from './../../redux/app';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNickname: ''
    }
    this.inputNickname = React.createRef();
  }

  toggleWorking = () => {
    const { working, setWorking } = this.props;
    console.log('press Toggle Working!!!');
    setWorking(!working);
  }

  handleInputNickname = (value) => {
    this.setState({ inputNickname: value });
  }

  handleErrorInputNickname = () => {
    const { inputNickname } = this.state;

    if(inputNickname.length < 3)
      return 'minimum input text length is 3 byte';
  }

  handleFocusInputNickname = () => {
    this.inputNickname.current.focus();
  }
  
  handleBlurInputNickname = () => {
    this.inputNickname.current.blur();
  }

  handleShakeInputNickname = () => {
    this.inputNickname.current.shake();
  }

  openAgreementScreen = () => {
    this.props.navigation.navigate('AgreementScreen');
  }

  render = () => {
    const { working } = this.props;
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <Text style={{ textAlign: 'center' }}>{working ? 'Working...' : 'Not Working'}</Text>
          <Button title={'Toggle Working test redux'} onPress={this.toggleWorking} />

          <Input
            label={'Nickname'}
            ref={this.inputNickname}
            labelStyle={{ paddingLeft: 15 }}
            placeholder={'INPUT Nickname'}
            inputStyle={{ fontSize: 14, paddingLeft: 15 }}
            leftIcon={
                <Icon
                name='user'
                size={20}
                color='black'
                />
            }
            onChangeText={this.handleInputNickname}
            errorStyle={{ color: 'red', fontSize: 12, textAlign: 'right' }}
            errorMessage={this.handleErrorInputNickname()}
          />

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
            <Button title={'Focusing Input'} onPress={this.handleFocusInputNickname} />
            <Button title={'Blur Input'} onPress={this.handleBlurInputNickname} />
            <Button title={'Shake Input'} onPress={this.handleShakeInputNickname} />
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
            <Button title={'Open Stack Screen'} onPress={this.openAgreementScreen} />
          </View>
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

export default connect(mapStateToProps, matchDispatchToProps)(HomeScreen);