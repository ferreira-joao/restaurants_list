import React, { useState } from 'react';
import { View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

function CategoryFilter() {
    const [radioValue, setRadioValue] = useState(0)

    const radio_props = [
        { label: 'param1', value: 0 },
        { label: 'param2', value: 1 }
    ];

    return (
        <View>
            <RadioForm
                radio_props={radio_props}
                initial={radioValue}
                onPress={(value) => setRadioValue(value)}
                buttonColor={'#002B56'}
                labelColor={'#002B56'}
                selectedButtonColor={'#002B56'}
            />
        </View>
    );
}

export default CategoryFilter;