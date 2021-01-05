import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../../Text';
import Icon from 'react-native-vector-icons/Feather';
import style from './style';

function ModalButton({onPress}) {
    return(
        <TouchableOpacity 
            style={style.modalButtonContainer}
            onPress={onPress}
        >
            <Text type="regular" style={style.modalButtonText}>Select...</Text>

            <Icon name="chevron-down" size={20} color="#999" />
        </TouchableOpacity>
    );
};

export default ModalButton;