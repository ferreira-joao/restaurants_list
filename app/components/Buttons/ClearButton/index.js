import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../../Text';
import style from './style.js';

function ClearButton({onPress}) {
    return (
        <TouchableOpacity style={style.clearButtonContainer} onPress={onPress}>
            <Text style={style.clearButtonText}>CLEAR ALL</Text>
        </TouchableOpacity>
    );
}

export default ClearButton;