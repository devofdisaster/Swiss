import React from 'react'
import { Text, View } from 'react-native'
import Statistic from '../../Shared/Domain/Statistic'

const viewStyle = { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
const cellStyle = { borderWidth: 1, borderColor: 'grey', fontSize: 18, paddingTop: 5, paddingBottom: 5 }
const numberStyle = { width: '10%', textAlign: 'center', overflow: 'hidden', fontWeight: 'bold' }
const nameStyle = { width: '65%', textAlign: 'center', overflow: 'hidden', fontWeight: 'bold'}
const statStyle = { width: '25%', textAlign: 'center', overflow: 'hidden', fontWeight: 'bold' }

export default function PlayerTableHeader(props) {
    return (
        <View style={{...viewStyle, ...props.style}}>
            <Text style={{...cellStyle, ...numberStyle}}>No.</Text>
            <Text style={{...cellStyle, ...nameStyle}}>Name</Text>
            <Text style={{...cellStyle, ...statStyle}}>{Statistic.renderName(props.visibleStat)}</Text>
        </View>
    )
}
