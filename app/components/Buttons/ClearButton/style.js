import { StyleSheet } from 'react-native';
import commons from '../../../commons';

export default StyleSheet.create({
    clearButtonContainer: {
        width: 90,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: commons.mainColor,
    },
    clearButtonText: {
        color: commons.mainColor
    }
});