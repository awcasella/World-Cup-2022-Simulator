import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function Groups({times, setTimes, grupo}) {

    const timesGrupo = times.filter(time => time.grupo === grupo);

    const [first, setFirst] = React.useState(undefined);
    const [second, setSecond] = React.useState(undefined);
    
    function onSelectFirstTeam(selectFirst, desselectSecond, teamId){
        setFirst(selectFirst); 
        if(second === desselectSecond){
            setSecond(undefined);
        }

        let timesAtualizados = times;
        timesAtualizados.forEach(time => {
            if (time.id === teamId){
                time.isPrimeiroGrupo = true;
                time.isSegundoGrupo = false;
            } else if(time.grupo === grupo && time.id !== teamId){
                time.isPrimeiroGrupo = false;
            }
        });

        setTimes(timesAtualizados)
    }

    function onSelectSecondTeam(selectSecond, desselectFirst, teamId){
        setSecond(selectSecond); 
        if(first === desselectFirst){
            setFirst(undefined);
        }

        let timesAtualizados = times;
        timesAtualizados.forEach(time => {
            if (time.id === teamId){
                time.isSegundoGrupo = true;
                time.isPrimeiroGrupo = false;
            } else if(time.grupo === grupo && time.id !== teamId){
                time.isSegundoGrupo = false;
            }
        });

        setTimes(timesAtualizados)
    }

    return (
        <View style={styles.grupo}>
            <Text style={styles.borderCard}> Group {grupo}</Text>
            {/* Team A */}
            <View style={styles.time}>
                <Text>{timesGrupo[0].name}</Text>
                <View style={styles.radioButtons}>
                    <RadioButton
                        value="1A"
                        uncheckedColor='#239B56'
                        color='#17202A'
                        status={ first === '1A' ? 'checked' : 'unchecked' }
                        onPress={() => onSelectFirstTeam('1A', '1B', timesGrupo[0].id)}
                    />
                    <RadioButton
                        value="1B"
                        uncheckedColor='#239B56'
                        color='#17202A'
                        status={ second === '1B' ? 'checked' : 'unchecked' }
                        onPress={() => onSelectSecondTeam('1B', '1A', timesGrupo[0].id)}
                    />
                </View>
            </View>
            
            {/* Team B */}
            <View style={styles.time}>
                <Text>{timesGrupo[1].name}</Text>
                <View style={styles.radioButtons}>
                    <RadioButton
                        value="2A"
                        uncheckedColor='#239B56'
                        color='#17202A'
                        status={ first === '2A' ? 'checked' : 'unchecked' }
                        onPress={() => onSelectFirstTeam('2A', '2B', timesGrupo[1].id)}
                    />
                    <RadioButton
                        value="2B"
                        uncheckedColor='#239B56'
                        color='#17202A'
                        status={ second === '2B' ? 'checked' : 'unchecked' }
                        onPress={() => onSelectSecondTeam('2B', '2A', timesGrupo[1].id)}
                    />
                </View>
            </View>

            {/* Team C */}
            <View style={styles.time}>
                <Text>{timesGrupo[2].name}</Text>
                <View style={styles.radioButtons}>
                    <RadioButton
                        value="3A"
                        uncheckedColor='#239B56'
                        color='#17202A'
                        status={ first === '3A' ? 'checked' : 'unchecked' }
                        onPress={() => onSelectFirstTeam('3A', '3B', timesGrupo[2].id)}
                    />
                    <RadioButton
                        value="3B"
                        uncheckedColor='#239B56'
                        color='#17202A'
                        status={ second === '3B' ? 'checked' : 'unchecked' }
                        onPress={() => onSelectSecondTeam('3B', '3A', timesGrupo[2].id)}
                    />
                </View>
            </View>

            {/* Team D */}
            <View style={styles.time}>
                <Text style={styles.text}>{timesGrupo[3].name}</Text>
                <View style={styles.radioButtons}>
                    <RadioButton
                        value="4A"
                        uncheckedColor='#239B56'
                        color='#17202A'
                        status={ first === '4A' ? 'checked' : 'unchecked' }
                        onPress={() => onSelectFirstTeam('4A', '4B', timesGrupo[3].id)}
                    />
                    <RadioButton
                        value="4B"
                        uncheckedColor='#239B56'
                        color='#17202A'
                        status={ second === '4B' ? 'checked' : 'unchecked' }
                        onPress={() => onSelectSecondTeam('4B', '4A', timesGrupo[3].id)}
                    />
                </View>
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
        marginBottom: 1,
        paddingLeft: 10,
		backgroundColor: '#FFFFFF',	//#E5E7E9
		borderColor: '#641E16',
		alignItems: 'center',
		justifyContent: 'space-between',
        display:'flex', 
        flex: 1,
		flexDirection:'row',
	},
    borderCard: {
        backgroundColor: '#17202A',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        color: '#FFFFFF'
    },
	grupo: {
		height: '100%',
		width: '49%',
        padding: 1,
		margin: 2,
	},
    text: {
        justifyContent: 'flex-start'
    },
    radioButtons: {
        justifyContent: 'flex-end', 
        flex: 1,
        flexDirection:'row'
    }
});
