import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../../Text';
import style from './style.js';

function ApplyButton({onPress}) {
    return (
        <TouchableOpacity style={style.applyButtonContainer} onPress={onPress}>
            <Text style={style.applyButtonText}>Apply</Text>
        </TouchableOpacity>
    );
}

export default ApplyButton;