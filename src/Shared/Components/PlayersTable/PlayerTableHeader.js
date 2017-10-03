import React from 'react'
import {View} from 'react-native'
import Statistic from '../../../../__tests__/Shared/Domain/Statistic'
import PlayerTableHeaderCell from '../../../Players/Components/PlayerTableHeaderCell'

const viewStyle = { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
const numberStyle = { width: '10%' }
const nameStyle = { width: '65%' }
const statStyle = { width: '25%' }

export default function PlayerTableHeader(props) {
    return (
        <View style={{...viewStyle, ...props.style}}>
            <PlayerTableHeaderCell
                cellStyle={numberStyle}
                label="No."
                onClick={props.onNumberClick}
            />
            <PlayerTableHeaderCell
                cellStyle={nameStyle}
                label="Name"
                onClick={props.onNameClick}
            />
            <PlayerTableHeaderCell
                cellStyle={statStyle}
                label={Statistic.renderName(props.visibleStat)}
                onClick={props.onStatClick}
            />
        </View>
    )
}
