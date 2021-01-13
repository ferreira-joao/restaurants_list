import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Text from '../../components/Text';
import ModalButton from '../../components/Buttons/ModalButton';
import ModalMenu from '../../components/ModalMenu';
import Restaurant from '../../components/Restaurant';
import LoadButton from '../../components/Buttons/LoadButton';
import style from './style.js';
import api from '../../services/api';
import { API_KEY } from '@env';

function Home() {
    const [visible, setVisible] = useState(false);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    });

    async function getRestaurants() {
        await api.get('/v3/businesses/search?location=las-vegas', {
            headers: { Authorization: `Bearer ${API_KEY}` }
        }).then((response) => {
            setRestaurants(response.data.businesses);
        });
    }

    function toogleModal() {
        setVisible(!visible);
    };

    function renderRestaurant({ item }) {
        return <Restaurant image={item.image_url}
        name={item.name} 
        rating={item.rating}
        categories={item.categories}
        price={item.price}
        available={item.is_closed} />
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
                    data={restaurants}
                    renderItem={renderRestaurant}
                    keyExtractor={(item) => item.id.toString()}
                    ListFooterComponent={() => 
                        <View style={style.loadMoreContainer}>
                            <LoadButton />
                        </View>
                    }
                />
            </View>

            

        </View>
    );
}

export default Home;