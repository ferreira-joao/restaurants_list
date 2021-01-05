import { StyleSheet } from 'react-native';
import commons from '../../../commons';

export default StyleSheet.create({
    applyButtonContainer: {
        width: 90,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: commons.mainColor,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: commons.mainColor,
    },
    applyButtonText: {
        color: '#fff'
    }
});