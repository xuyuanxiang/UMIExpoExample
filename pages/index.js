import React from 'react';
import {View, Text} from 'react-native';
import {List, WhiteSpace} from '@ant-design/react-native';
import {connect, Link} from 'umi';

const Item = List.Item;

const ConnectedIndexPage = connect(({foo, loading: {effects}}) => ({
  text: foo.text,
  loading: effects['foo/fetch'],
}))(({text, loading}) => (
  <View style={{paddingTop: 88}}>
    <WhiteSpace size="xl" />
    <List renderHeader={() => <Text>{loading ? 'Loading...' : text}</Text>}>
      <Link to="/home" component={Item} arrow="horizontal">
        主页
      </Link>
      <Link to="/login" component={Item} arrow="horizontal">
        登录页
      </Link>
    </List>
  </View>
));

export default ConnectedIndexPage;
