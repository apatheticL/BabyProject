import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect} from 'react';
import {LabelInputTextComponent} from '../../components/label-input-text.component';
import {HeaderAuth} from '../signup/component/header.component';
import {ContentViewAuthComponent} from '../signup/component/conent-view-auth.component';
import {ButtonComponent} from '../../components/button.component';
import {BoxComponent} from '../../components/box.component';
import {LabelHeaderComponent} from '../signup/component/label.header.componet';
import {LabelLinkComponent} from '../signup/component/label-link.component';
interface Props {
  onLogin: (email: string, password: string) => void;
  onSignUp: () => void;
  message: string;
}
export const LoginComponent = (props: Props) => {
  const [email, setEmail] = React.useState('le20051998@gmail.com');
  const [password, setPassword] = React.useState('123456');
  const [errorMessage, setErrorMessage] = React.useState('');
  const handleLogin = () => {
    props.onLogin(email, password);
  };
  useEffect(() => {
    setErrorMessage(props.message);
  }, [props.message]);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <HeaderAuth />
        <ContentViewAuthComponent>
          <LabelHeaderComponent
            label="Sign In"
            title="Input information for Sign In"
          />
          <LabelInputTextComponent
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Enter email here..."
          />
          <LabelInputTextComponent
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder="Enter password here..."
          />
          <BoxComponent style={{marginVertical: 16}} />

          {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
          <ButtonComponent
            label="Login"
            onPress={handleLogin}
            backgroundColor="blue"
          />
          <BoxComponent style={{marginBottom: 16}} />
          <LabelLinkComponent
            label="Don't have an account?"
            link="Sign Up"
            onPress={props.onSignUp}
          />
        </ContentViewAuthComponent>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#625FC3',
  },
});
