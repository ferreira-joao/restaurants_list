import React from 'react';
import { View, Modal, Alert, TouchableOpacity } from 'react-native';
import Text from '../Text';
import Icon from 'react-native-vector-icons/Feather';
import ClearButton from '../Buttons/ClearButton';
import ApplyButton from '../Buttons/ApplyButton';
import style from './style.js';

function ModalMenu({visible, onPress}) {
    return (
        <Modal
            animationType="slide"
            visible={visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={style.modalContainer}>

                <View style={style.modalHeader}>
                    <Text type="regular">Filter By</Text>
                    <TouchableOpacity onPress={onPress}>
                        <View>
                            <Icon name="x" size={30} color="#999" />
                        </View> 
                    </TouchableOpacity>
                </View>

                <View style={style.buttonsContainer}>
                    <ClearButton />
                    <ApplyButton />
                </View>
                
            </View>
        </Modal>
    );
}

export default ModalMenu;