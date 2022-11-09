import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import KnockOutMatch from './KnockOutMatch';
import Builder from '../Builder';

export default function QuarterFinal({navigation, route}) {

    const [times, setTimes] = useState(Builder.buildTeamsAtQuarterFinals(route.params?.times));


    return (<View style={styles.container}>
		<Text style={styles.title}>Quartas de Final</Text>
        <View style={styles.groupsSameRow}>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={57}/>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={58}/>
        </View>
        <View style={styles.groupsSameRow}>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={59}/>
            <KnockOutMatch times={times}
                        setTimes={setTimes}
                        idMatch={60}/>
        </View>

		{/* Button to go to next stage */}
		<View style={{width: '100%', backgroundColor: '#D2042D'}}>
			<Button title="Avançar"
					onPress={ () => navigation.navigate('SemiFinal', {times: times}) }/>
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
