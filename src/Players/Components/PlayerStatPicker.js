import React from 'react'
import { Picker } from 'react-native'
import Games from '../../Shared/Domain/Statistic/Games'
import Points from '../../Shared/Domain/Statistic/Points'
import Results from '../../Shared/Domain/Statistic/Results'
import SoS from '../../Shared/Domain/Statistic/SoS'
import SSoS from '../../Shared/Domain/Statistic/SSoS'
import Comparison from '../../Shared/Domain/Statistic/Comparison'

export default function PlayerStatPicker(props) {
    return (
        <Picker
            selectedValue={props.selected}
            onValueChange={props.onChange}
            style={{ minWidth: 100 }}
        >
            <Picker.Item label={Points.renderName()} value="points"/>
            <Picker.Item label={Results.renderName()} value="results"/>
            <Picker.Item label={Games.renderName()} value="games"/>
            <Picker.Item label={SoS.renderName()} value="sos"/>
            <Picker.Item label={SSoS.renderName()} value="ssos"/>
            <Picker.Item label={Comparison.renderName()} value="comparison"/>
        </Picker>
    )
}
