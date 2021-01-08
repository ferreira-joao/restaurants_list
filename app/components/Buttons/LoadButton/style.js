import { StyleSheet } from 'react-native';
import commons from '../../../commons';

export default StyleSheet.create({
    loadContainer: {
        width: 150,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: commons.mainColor,
    },
    loadButtonText: {
        color: commons.mainColor
    }
});