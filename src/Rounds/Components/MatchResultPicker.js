import React from 'react'
import {Picker, View} from 'react-native'
import Results from '../../Shared/Domain/Statistic/Results'

const pickerStyle = {
    width: '20%',
    borderColor: 'grey',
    borderWidth: 1
}

export default function MatchResultPicker(props) {
    return (
        <View style={pickerStyle}>
            <Picker
                selectedValue={props.selected}
                onValueChange={props.onChange}
                enabled={props.enabled}
            >
                <Picker.Item value={null} label="_-_"/>
                <Picker.Item value={Results.PLAYER_1_WIN} label={Results.PLAYER_1_WIN}/>
                <Picker.Item value={Results.PLAYER_2_WIN} label={Results.PLAYER_2_WIN}/>
            </Picker>
        </View>
    )
}
