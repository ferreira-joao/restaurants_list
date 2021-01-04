import React from 'react';
import { View } from 'react-native';
import Text from '../../components/Text';
import style from './style.js';

function Home() {
    return(
        <View style={style.body}>

            <View style={style.header}>
                <Text type="medium" style={style.title}>Restaurants</Text>
            </View>

        </View>
    );
}

export default Home;