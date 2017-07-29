import 'react-native';
import React from 'react';
import Swiss from '../src/Swiss';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    renderer.create(
        <Swiss />
    );
});

