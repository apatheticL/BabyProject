import {
  Button,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {LabelInputTextComponent} from '../../components/label-input-text.component';
import {ButtonComponent} from '../../components/button.component';
import {BoxComponent} from '../../components/box.component';
import {ImageSource} from '../../assets/images';
import {ContentViewAuthComponent} from './component/conent-view-auth.component';
import {HeaderAuth} from './component/header.component';
import {LabelHeaderComponent} from './component/label.header.componet';
import {LabelLinkComponent} from './component/label-link.component';
interface Props {
  handleSignUp: (email: string, password: string) => void;
  onLogin: () => void;
  message: string;
}
export const SignUpComponent = (props: Props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const handleSignUp = () => {
    props.handleSignUp(email, password);
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
            label="Sign Up"
            title="Input information for Sign Up"
          />
          <LabelInputTextComponent
            label="Email"
            value={email}
            onChangeText={setEmail}
          />
          <LabelInputTextComponent
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
          <BoxComponent style={styles.box} />
          <View style={styles.btnSignUp}>
            <ButtonComponent
              label="Sign Up"
              onPress={handleSignUp}
              backgroundColor="blue"
            />
          </View>

          <LabelLinkComponent
            label="Already have an account?"
            link="Sign In"
            onPress={props.onLogin}
          />
        </ContentViewAuthComponent>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  imageLogo: {width: 100, height: 100, resizeMode: 'contain'},

  viewHeader: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewContent: {
    width: '100%',
    flex: 2,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  box: {marginVertical: 15},
  btnSignUp: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#625FC3',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});
