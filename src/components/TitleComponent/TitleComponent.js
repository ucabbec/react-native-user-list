import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/styles';

const TitleComponent = () => {
	return(
		<View style={styles.titleView}>
			<Text style={styles.titleText}>User Information</Text>
		</View>
	);
}

export default TitleComponent;