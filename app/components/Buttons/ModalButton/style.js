import { StyleSheet } from 'react-native';
import commons from '../../../commons';

export default StyleSheet.create({
    modalButtonContainer: {
        width: '50%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: commons.defaultBorderColor,
        justifyContent: 'space-between'
    },
    modalButtonText: {
        color: commons.mainColor
    }
});