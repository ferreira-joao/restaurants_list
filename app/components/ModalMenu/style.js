import { StyleSheet } from 'react-native';
import commons from '../../commons';

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        paddingVertical: 26
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 13,
        justifyContent: 'space-between',
        marginBottom: 5
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: commons.defaultBorderColor,
        borderBottomColor: commons.defaultBorderColor,
        paddingVertical: 13,
        paddingHorizontal: 13,
    }
});