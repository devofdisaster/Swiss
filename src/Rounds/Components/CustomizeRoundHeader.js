import React from 'react'
import { ToastAndroid } from 'react-native'
import ScreenHeader from '../../Shared/Components/ScreenHeader'

export default function CustomizeRoundHeader(props) {
    return (
        <ScreenHeader
            navIcon={{
                image: require('material-design-icons/navigation/drawable-hdpi/ic_arrow_back_black_24dp.png'),
                onPress: props.onBackClick
            }}
            menu={{
                items: [
                    {
                        name: 'Autofill',
                        image: require('material-design-icons/content/drawable-hdpi/ic_add_circle_outline_black_36dp.png'),
                        onPress: props.onAutofillClick,
                        onLongPress: () => ToastAndroid.show('Fill automatically', ToastAndroid.SHORT)
                    },
                    {
                        name: 'SaveRound',
                        image: require('material-design-icons/action/drawable-hdpi/ic_done_black_24dp.png'),
                        onPress: props.onSaveClick,
                        onLongPress: () => ToastAndroid.show('Accept custom round', ToastAndroid.SHORT)
                    }
                ]
            }}
            title="Customize round"
        />
    )
}
