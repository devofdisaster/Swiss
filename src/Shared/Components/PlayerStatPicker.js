import React from 'react'
import { Picker } from 'react-native'
import Games from '../Domain/Statistic/Games'
import Points from '../Domain/Statistic/Points'
import Results from '../Domain/Statistic/Results'
import SoS from '../Domain/Statistic/SoS'
import SSoS from '../Domain/Statistic/SSoS'
import Comparison from '../Domain/Statistic/Comparison'

export default function PlayerStatPicker(props) {
    return (
        <Picker
            selectedValue={props.selected}
            onValueChange={props.onChange}
            style={{ minWidth: 100 }}
        >
            <Picker.Item label={Points.renderName()} value="points" key="points"/>
            <Picker.Item label={Results.renderName()} value="results" key="results"/>
            <Picker.Item label={Games.renderName()} value="games" key="games"/>
            <Picker.Item label={SoS.renderName()} value="sos" key="sos"/>
            <Picker.Item label={SSoS.renderName()} value="ssos" key="ssos"/>
            <Picker.Item label={Comparison.renderName()} value="comparison" key="results"/>
        </Picker>
    )
}
