import React from 'react'
import ScreenHeader from '../../Shared/Components/ScreenHeader'

export default function PlayerDetailsHeader(props) {
    return (
        <ScreenHeader
            navIcon={{
                image: require('material-design-icons/navigation/drawable-hdpi/ic_arrow_back_black_24dp.png'),
                onPress: props.onBackClick
            }}
            menu={{}}
            title="Player details"
        />
    )
}
