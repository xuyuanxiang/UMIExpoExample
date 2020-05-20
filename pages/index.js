import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'umi';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ConnectedIndexPage = connect(({foo, loading: {effects}}) => ({
  text: foo.text,
  loading: effects['foo/fetch'],
}))(({text, loading}) => (
  <View style={styles.container}>
    <Text>{loading ? 'Loading...' : text}</Text>
  </View>
));

export default ConnectedIndexPage;
