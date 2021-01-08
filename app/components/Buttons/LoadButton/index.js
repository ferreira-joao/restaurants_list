import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../../Text';
import style from './style';

function LoadButton() {
    return(
        <TouchableOpacity style={style.loadContainer}>
            <Text type="regular" style={style.loadButtonText}>LOAD MORE</Text>
        </TouchableOpacity>
    );
}

export default LoadButton;