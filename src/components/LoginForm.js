import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';

const LoginForm = ({ emailChanged, passwordChanged, loginUser, email, password, error, loading }) => {
  const onEmailChange = text => {
    emailChanged(text);
  };

  const onPasswordChange = text => {
    passwordChanged(text);
  };

  const onButtonPress = text => {
    loginUser({ email, password });
  };

  const showError = () => {
    if (error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
      );
    }
  };

  const showButton = () => {
    if (loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onClick={onButtonPress}>
        Login
      </Button>
    );
  };

  return (
    <Card>
      <CardSection>
        <Input
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={onEmailChange}
          value={email}
        />
      </CardSection>
      <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          onChangeText={onPasswordChange}
          value={password}
        />
      </CardSection>
      {showError()}
      <CardSection>
        {showButton()}
      </CardSection>
    </Card>
  );
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
