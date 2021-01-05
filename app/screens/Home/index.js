import React from 'react';
import { View } from 'react-native';
import Text from '../../components/Text';
import ModalButton from '../../components/Buttons/ModalButton';
import style from './style.js';

function Home() {
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

                <ModalButton />
            </View>

        </View>
    );
}

export default Home;