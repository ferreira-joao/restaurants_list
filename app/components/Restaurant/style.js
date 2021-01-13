import { StyleSheet } from 'react-native';
import commons from '../../commons';

export default StyleSheet.create({
    restaurantContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    image: {
        width: 110,
        height: 110
    },
    information: {
        marginLeft: 20,
    },
    nameTitle: {
        fontSize: 20,
        width: 190,
        flexWrap: 'wrap',
        flex: 1,
    },
    ratingContainer: {
        backgroundColor: commons.defaultBackgroundColor
    },
    informationGroup: {
        flexDirection: 'row'
    },
    availableTextContainer: {
        padding: 3,
        marginLeft: 50,
        borderRadius: 8,
    },
    availableText: {
        color: commons.defaultBorderColor
    },
    learnButton: {
        flexDirection: 'row',
    },
    learnText: {
        color: commons.mainColor,
        marginRight: 5
    }
});