import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import KnockOutMatch from './KnockOutMatch';
import Builder from '../Builder';

export default function Round16({navigation, route}) {
    
	const [times, setTimes] = useState(Builder.buildTeamsAtRound16(route.params.times));

    return (
	<View style={styles.container}>
		<Text style={styles.title}>Oitavas de Final</Text>
        <View style={styles.groupsSameRow}>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={49}/>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={50}/>
        </View>
        <View style={styles.groupsSameRow}>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={51}/>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={52}/>
        </View>
        <View style={styles.groupsSameRow}>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={53}/>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={54}/>
        </View>
        <View style={styles.groupsSameRow}>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={55}/>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={56}/>
        </View>

		<View style={{width: '100%', backgroundColor: '#D2042D'}}>
			<Button title="Avançar"
					onPress={ () => navigation.navigate('QuarterFinal', {times: times}) }/>
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
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
		color: '#FFFFFF',
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
