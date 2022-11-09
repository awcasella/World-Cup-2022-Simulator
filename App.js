import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import GroupPhase from './screens/groupPhase/GroupPhase';
import Round16 from './screens/knockOutStage/Round16';
import QuarterFinal from './screens/knockOutStage/QuarterFinal';
import SemiFinal from './screens/knockOutStage/SemiFinal';
import Final from './screens/knockOutStage/Final';

function GroupStage() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<GroupPhase/>
		</View>
	);
}

function Round16Stage() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Round16/>
		</View>
	);
}

function QuarterFinalStage() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<QuarterFinal/>
		</View>
	);
}

function SemiFinalStage() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<SemiFinal/>
		</View>
	);
}

function FinalStage() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Final/>
		</View>
	);
}

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="GroupStage" component={GroupPhase} options={{ title: 'Fase de Grupos', headerStyle: styles.header }} />
				<Stack.Screen name="Round16" component={Round16} options={{ title: 'Oitavas de Final', headerStyle: styles.header }} />
				<Stack.Screen name="QuarterFinal" component={QuarterFinal} options={{ title: 'Quartas de Final', headerStyle: styles.header }} />
				<Stack.Screen name="SemiFinal" component={SemiFinal} options={{ title: 'Semi Final', headerStyle: styles.header }} />
				<Stack.Screen name="Final" component={Final} options={{ title: 'Final', headerStyle: styles.header }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		flex: 1,
		paddingTop: 30,
		paddingBottom: 30,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		// backgroundColor: '#D2042D',
		// color: '#FFF',
	}
});
