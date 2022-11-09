import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import KnockOutMatch from './KnockOutMatch';
import Builder from '../Builder';
import AnimatedLottieView from 'lottie-react-native';

export default function Final({navigation, route}) {

    const [times, setTimes] = useState(Builder.buildTeamsAtFinal(route.params.times));
	const [winner, setWinner] = useState(false);

	function onSetTimes(timesAtualizados){
		setTimes(timesAtualizados);
		let timeVencedor = times.filter(time => time.isVencedor)[0];
		setWinner(timeVencedor.name);
	}

    return (<View style={styles.container}>
		<Text style={styles.title}>Final</Text>
        
		<View style={styles.finalMatch}>
			<KnockOutMatch times={times}
						setTimes={onSetTimes}
						idMatch={64}/>
		</View>
		<View style={styles.animation}>
			{!!winner && 	
			<AnimatedLottieView source={require('../../imgs/trophy.json')}
								autoPlay={true}
								loop={true}/>
			}
			{!!winner && 	
			<Text style={styles.title}>{winner} é o campeão!</Text>
			}
		</View>
		<View style={{width: '100%', backgroundColor: '#D2042D'}}>
			<Button title="Simular de novo"
					onPress={ () => navigation.popToTop() }/>
		</View>
    </View>);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		flex: 1,
		backgroundColor: '#D2042D',
		alignItems: 'center',
	},
	title: {
		textAlignVertical: 'top',
		fontSize: 30,
		color: '#FFFFFF',
		marginVertical: 20,
	},
	animation: {
		height: '50%',
		alignItems: 'center',
		alignContent: 'center',
		marginVertical: 20,
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
	finalMatch: { 
		height: '25%',
		width: '100%',
		padding: 2,
		backgroundColor: '#D2042D',
		color: '#FDFEFE',
		display:'flex', 
		flexDirection:'row',
	},
});
