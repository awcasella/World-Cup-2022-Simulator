import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function KnockOutMatch({times, setTimes, idMatch}) {

    const timesMataMata = times?.filter(time => time.idMatch === idMatch);

    const [first, setFirst] = useState(undefined);
    
    function onSelectWinner(selectFirst, teamId){
        setFirst(selectFirst);

        let timesAtualizados = times;
        timesAtualizados.forEach(time => {
            if (time.idMatch === idMatch && time.id === teamId){
                time.isVencedor = true;
            } else if (time.idMatch === idMatch && time.id !== teamId) {
                time.isVencedor = false;
            }
        });

        setTimes(timesAtualizados)
    }

    return (<View style={styles.container}>
        <Text style={styles.borderCard}> Match {idMatch}</Text>
        {/* Team A */}
        <View style={styles.time}>
            <Text>{timesMataMata[0].name}</Text>
            <View style={styles.radioButtons}>
                <RadioButton
                    value="A"
                    uncheckedColor='#239B56'
                    color='#17202A'
                    status={ first === 'A' ? 'checked' : 'unchecked' }
                    onPress={() => onSelectWinner('A', timesMataMata[0].id)}
                />
            </View>
        </View>
        
        {/* Team B */}
        <View style={styles.time}>
            <Text>{timesMataMata[1].name}</Text>
            <View style={styles.radioButtons}>
                <RadioButton
                    value="B"
                    uncheckedColor='#239B56'
                    color='#17202A'
                    status={ first === 'B' ? 'checked' : 'unchecked' }
                    onPress={() => onSelectWinner('B', timesMataMata[1].id)}
                />
            </View>
        </View>
    </View>);
}

const styles = StyleSheet.create({
	container: {
		height: '70%',
		width: '50%',
		flex: 1,
        margin: 2,
        marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
        marginBottom: '10%',
	},
	time: {
		height: '25%',
		width: '100%',
		backgroundColor: '#fff',
        marginBottom: 1,
        paddingLeft: 10,
		borderColor: '#641E16',
		alignItems: 'center',
		justifyContent: 'center',
        display:'flex', 
        flex: 1,
		flexDirection:'row',
	},
    borderCard: {
        width: '100%',
        backgroundColor: '#17202A',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        color: '#FFFFFF'
    },
	grupo: {
		height: '100%',
		width: '50%',
		padding: 1,
		margin: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
    radioButtons: {
        justifyContent: 'flex-end', 
        flex: 1,
        flexDirection:'row'
    }
});
