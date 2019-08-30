import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Layout, Text} from 'react-native-ui-kitten';

const HomeScreen = () => (
  <Layout style={styles.container}>
    <Text style={styles.text} category="h4">
      Welcome to UI Kitten
    </Text>
    <Button appearance="outline">BUTTON</Button>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 16,
  },
});
export default HomeScreen;
