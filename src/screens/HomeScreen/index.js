import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setWorking } from './../../redux/app';
import { ThemeProvider, Input, Button, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNickname: '',
      visibleModal: false
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

  handleVisibleModal = () => {
    this.setState({ visibleModal: true });
  }
  
  handleDisableModal = () => {
    this.setState({ visibleModal: false });
  }

  render = () => {
    const { visibleModal } = this.state;
    const { working } = this.props;
    const theme = {
      Button: {
        type: 'outline',
        buttonStyle: {
          backgroundColor: '#fff'
        }
      },
    };
    return (
      <ThemeProvider theme={theme}>
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

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
            <Button title={'Open Modal Popup'} onPress={this.handleVisibleModal} />
          </View>

          <Overlay
            isVisible={visibleModal}
            windowBackgroundColor={'rgba(0, 0, 0, .5)'}
            overlayBackgroundColor={'#fff'}
            width={'auto'}
            height={'auto'}
            onBackdropPress={this.handleDisableModal}
          >
            <Text>Hello from Overlay!</Text>
          </Overlay>

        </SafeAreaView>
      </ThemeProvider>
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