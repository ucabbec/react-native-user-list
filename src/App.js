import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/styles';

//Importing all action creators
import * as actions from './store/actions/index';

//Custom Components
import ListContainer from './components/ListContainer/ListContainer';
import TitleComponent from './components/TitleComponent/TitleComponent';

class App extends React.Component {

  //When component mounts api call is made
  //
  componentWillMount = () => {
  	this.props.onfetchUsers()
  }

  //Function used to alert string
  //Used to alert name of selected user
  alertName = (name) => {
    Alert.alert('Name',name);
  }

  //function that gets called when user scrolls to end of list
  endOfListReached = () => {
    this.props.onfetchUsers()
  }

  render() {
    return (
      <View style = {styles.container}>
        <TitleComponent />
      	<ListContainer users={this.props.userlist} onItemSelected={this.alertName} endReached={this.endOfListReached} />
      </View>
    );
  }
}

const mapStateToProps = state => {
	return {
		userlist: state.users.users,
		selectedUsers: state.users.selectedUsers
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onfetchUsers: () => dispatch(actions.fetchUsers()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
