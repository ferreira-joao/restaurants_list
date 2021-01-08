import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../Text';
import Icon from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';
import style from './style';
import commons from '../../commons';

function Restaurant({ name, rating, categories, price, available }) {
    const avColor = available == 'OPEN' ? commons.defaultGreen : commons.defaultRed;

    return (
        <View style={style.restaurantContainer}>

            <View style={style.image}></View>

            <View style={style.information}>

                <Text type="bold" style={style.nameTitle} numberOfLines={1} ellipsizeMode='tail'>
                    {name}
                </Text>

                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={rating}
                    starSize={15}
                    fullStarColor={commons.mainColor}
                    containerStyle={{paddingVertical: 5, width: 80}}
                />

                <View style={style.informationGroup}>
                    <Text>{categories}</Text>
                    <View style={[style.availableTextContainer, { backgroundColor: avColor }]}>
                        <Text type="bold" style={style.availableText}>
                            {available}
                        </Text>
                    </View>

                </View>

                <Text>{price}</Text>

                <TouchableOpacity style={style.learnButton}>
                    <Text type="bold" style={style.learnText}>Learn More</Text>
                    <Icon name="arrow-right" size={20} color={commons.mainColor} />
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Restaurant;