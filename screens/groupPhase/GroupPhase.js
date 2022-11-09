import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Groups from './Groups';
import Builder from '../Builder';

export default function GroupPhase({ navigation}) {

	const [times, setTimes] = useState(Builder.buildTeamsAtGroupStage());


	return (
	<View style={styles.container}>
		<StatusBar style="auto" />

		{/* Grupos A e B */}
		<View style={styles.groupsSameRow}>
			<Groups times={times}
					setTimes={setTimes}
					grupo={'A'}/>
			<Groups times={times}
					setTimes={setTimes}
					grupo={'B'}/>
		</View>
		{/* Grupos C e D */}
		<View style={styles.groupsSameRow}>
			<Groups times={times}
					setTimes={setTimes}
					grupo={'C'}/>
			<Groups times={times}
					setTimes={setTimes}
					grupo={'D'}/>
		</View>
		{/* Grupos E e F */}
		<View style={styles.groupsSameRow}>
			<Groups times={times}
					setTimes={setTimes}
					grupo={'E'}/>
			<Groups times={times}
					setTimes={setTimes}
					grupo={'F'}/>
		</View>
		{/* Grupos G e H */}
		<View style={styles.groupsSameRow}>
			<Groups times={times}
					setTimes={setTimes}
					grupo={'G'}/>
			<Groups times={times}
					setTimes={setTimes}
					grupo={'H'}/>
		</View>
		<View style={{width: '100%', backgroundColor: '#D2042D'}}>
			<Button title="Avançar"
					onPress={ () => navigation.navigate('Round16', {times: times}) }/>
		</View>
	</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	time: {
		height: '25%',
		width: '100%',
		backgroundColor: '#95A5A6',	
		borderColor: '#641E16',
		alignItems: 'center',
		justifyContent: 'center',
	},
	grupo: {
		height: '100%',
		width: '50%',
		padding: 1,
		margin: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	groupsSameRow: { 
		height: '25%',
		width: '100%',
		flex: 1, 
		padding: 2,
		backgroundColor: '#D2042D',
		color: '#FDFEFE',
		display:'flex', 
		flexDirection:'row',
	},
});
