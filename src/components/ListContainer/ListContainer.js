import React, {Component} from 'react';
import { StyleSheet, ScrollView, FlatList, Text, View} from 'react-native';
import styles from '../../styles/styles';

import ListItem from '../ListItem/ListItem';

class ListContainer extends Component{
	render(){
		return(
			<View style={styles.listHeight}>
			<FlatList style={styles.listContainer}
	      		data={this.props.users}
	      		renderItem={(info) => (
	      			<ListItem 
	      				key={info.item.id}
			  			userId={info.item.id}
			  			userEmail={info.item.email} 
			  			onItemPressed={()=>{
			  				this.props.onItemSelected(info.item.name)
			  			}}
	  				/>
	      		)}
	      		keyExtractor={item => item.id}
	      		onEndReached={() => {
	      			if (!this.onEndReachedCalledDuringMomentum) {
	      				if(this.props.users.length !== 0){
		      				this.props.endReached();
		      			}
	      			}
	      		}}
	      		onEndReachedThreshold={0.1}
	      		bounces={false}
	      		onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
	      	/>
	      	</View>
		);
	}
}

export default ListContainer;