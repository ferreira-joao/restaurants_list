import { StyleSheet } from 'react-native';
import commons from '../../commons';

export default StyleSheet.create({
    tabStyle: {
        borderColor: commons.mainColor,
        height: 50,
    },
    tabTextStyle: {
        color: commons.mainColor
    },
    activeTabStyle: {
        backgroundColor: commons.mainColor
    }
})