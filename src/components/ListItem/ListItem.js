import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import styles from '../../styles/styles';

const listItem = (props) => (

	<TouchableOpacity>
		<View style={styles.listItem}>
      <View style={styles.userDetails}>
			<Text style={styles.CenterAlign}>ID: {props.userId}</Text>
      <Text style={styles.CenterAlign}>Email</Text>
      <Text style={styles.emailStyling}>{props.userEmail}</Text>
      </View>
      <TouchableOpacity
         style={styles.placeButton}
         onPress={props.onItemPressed}
       >
          <Text style={styles.buttonStyling}> Name </Text>
       </TouchableOpacity>
		</View>
	</TouchableOpacity>

);

export default listItem;