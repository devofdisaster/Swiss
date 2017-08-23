import 'react-native';
import React from 'react'
import Swiss from '../src/Swiss'
import renderer from 'react-test-renderer'

jest.mock('TouchableNativeFeedback', () => {
    const mock = require('react-native/jest/mockComponent')
    const mocked = mock('TouchableNativeFeedback')

    mocked.Ripple = () => ({ type: 'Ripple' })
    mocked.canUseNativeForeground = () => false

    return mocked
})

it('renders correctly', () => {
    renderer.create(
        <Swiss />
    );
})

