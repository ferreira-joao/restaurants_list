import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Text from '../Text';
import Icon from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';
import style from './style';
import commons from '../../commons';

function Restaurant({ image, name, rating, price, is_closed }) {
    const avColor = is_closed ? commons.defaultGreen : commons.defaultRed;
    const available = is_closed ? 'OPEN' : 'CLOSED';

    return (
        <View style={style.restaurantContainer}>

            <View>
                <Image style={style.image} source={{uri:image}} />
            </View>

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