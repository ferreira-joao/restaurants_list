import React, { useState } from 'react';
import { View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import category_data from './data';

function CategoryFilter() {
    const [radioValue, setRadioValue] = useState(0);

    return (
        <View>
            <RadioForm
                radio_props={category_data}
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