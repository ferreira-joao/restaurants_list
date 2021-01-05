import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from '../../Text';
import Icon from 'react-native-vector-icons/Feather';
import style from './style';

function ModalButton() {
    return(
        <TouchableOpacity style={style.modal_button_container}>
            <Text type="regular" style={style.modal_button_text}>Select...</Text>

            <Icon name="chevron-down" size={20} color="#999" />
        </TouchableOpacity>
    );
};

export default ModalButton;