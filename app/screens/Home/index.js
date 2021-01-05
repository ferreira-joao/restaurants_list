import React, { useState } from 'react';
import { View } from 'react-native';
import Text from '../../components/Text';
import ModalButton from '../../components/Buttons/ModalButton';
import ModalMenu from '../../components/ModalMenu';
import style from './style.js';

function Home() {
    const [visible, setVisible] = useState(false);

    function toogleModal() {
        setVisible(!visible);
    };

    return(
        <View style={style.body}>

            <View style={style.header}>
                <Text type="bold" style={style.title}>Restaurants</Text>
                
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>

            <View style={style.filterContainer}>
                <Text style={style.filterText}>Filter By:</Text>

                <ModalMenu visible={visible} onPress={toogleModal} />
                <ModalButton onPress={toogleModal} />
            </View>

        </View>
    );
}

export default Home;