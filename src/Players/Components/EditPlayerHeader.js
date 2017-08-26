import React from 'react'
import ScreenHeader from '../../Shared/Components/ScreenHeader'

export default function EditPlayerHeader(props) {
    return (
        <ScreenHeader
            navIcon={{
                image: require('material-design-icons/navigation/drawable-hdpi/ic_arrow_back_black_24dp.png'),
                onPress: props.onBackClick
            }}
            menu={{
                items: [
                    {
                        name: 'SavePlayer',
                        image: require('material-design-icons/action/drawable-hdpi/ic_done_black_24dp.png'),
                        onPress: props.onSaveClick,
                        title: 'Save'
                    }
                ]
            }}
            title={props.title}
        />
    )
}
