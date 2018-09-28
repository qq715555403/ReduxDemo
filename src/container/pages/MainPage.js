import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Counter from '../../components/Counter';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import *as counterAction from '../../redux/actions/counterAction';

// const resetAction = NavigationActions.setParams({
//   index: 0,
//   actions: [
//     NavigationActions.navigate({ routeName: 'Login'})
//   ]
// })

class MainPage extends Component {

  static navigationOptions = {
    title: '首页'
  };

  logout() {
    this.props.navigation.goBack()
    // this.props.navigation.dispatch(resetAction)
  }

  render() {
    const { user } = this.props.navigation;
    const { count, incrementFn, decrementFn } = this.props;
    return(
      <View style={styles.container}>
        <Counter incrementFn={incrementFn} decrementFn={decrementFn} counter={count}>
        </Counter>
        <TouchableOpacity onPress={this.logout.bind(this)} style={{marginTop: 50}}>
          <View>
            <Text>退出登录
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FFFF'
  }
})


function mapStateToProps(state){
  return {
    count: state.counter.count,
  }
}

function mapDispatchToProps(dispatch){
  return {
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
