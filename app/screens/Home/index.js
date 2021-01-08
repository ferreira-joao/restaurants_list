import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Text from '../../components/Text';
import ModalButton from '../../components/Buttons/ModalButton';
import ModalMenu from '../../components/ModalMenu';
import Restaurant from '../../components/Restaurant';
import restaurant_data from './data';
import style from './style.js';

function Home() {
    const [visible, setVisible] = useState(false);

    function toogleModal() {
        setVisible(!visible);
    };

    function renderRestaurant({ item }) {
        return <Restaurant name={item.name} 
        rating={item.rating}
        categories={item.categories}
        price={item.price}
        available={item.available} />
    }

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

            <Text type="bold" style={style.allTitle}>All Restaurants</Text>

            <View style={style.listContainer}>
                <FlatList 
                    data={restaurant_data}
                    renderItem={renderRestaurant}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

        </View>
    );
}

export default Home;