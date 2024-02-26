import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Color} from '../styles/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
type Props = {
  children: React.ReactNode;
  name: string;
};

type State = {
  hasError: boolean;
};
class ErrorBoundary extends React.Component<Props, State> {
  name: string;
  constructor(props: any) {
    super(props);
    this.name = props.name;
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <SafeAreaView style={styles.container}>
          <Icon size={96} color={Color.MainText} name="alert-octagon" />
          <Text style={styles.text}>{`Failed to load ${this.name}`}</Text>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: Color.MainText,
    textAlign: 'center',
  },
});

export default ErrorBoundary;
