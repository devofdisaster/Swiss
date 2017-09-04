import React from 'react'
import {Picker, View} from 'react-native'

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
            >
                <Picker.Item value={null} label="_-_"/>
                <Picker.Item value="5-0" label="5-0"/>
                <Picker.Item value="0-5" label="0-5"/>
                <Picker.Item value="2-2" label="2-2"/>
            </Picker>
        </View>
    )
}
