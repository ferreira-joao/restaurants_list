import React from 'react';
import { View } from 'react-native';
import Text from '../../components/Text';
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

        </View>
    );
}

export default Home;