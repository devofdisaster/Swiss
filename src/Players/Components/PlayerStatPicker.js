import React from 'react'
import { Picker } from 'react-native'

export default function PlayerStatPicker(props) {
    return (
        <Picker
            selectedValue="points"
            onValueChange={props.onChange}
            style={{ minWidth: 100 }}
        >
            <Picker.Item label="Points" value="points"/>
            <Picker.Item label="W-D-L" value="results"/>
            <Picker.Item label="Games" value="games"/>
            <Picker.Item label="SoS" value="sos"/>
            <Picker.Item label="SSoS" value="ssos"/>
            <Picker.Item label="+/-" value="comparison"/>
        </Picker>
    )
}
