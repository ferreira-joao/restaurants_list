import { StyleSheet } from 'react-native';
import commons from '../../commons';

export default StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: commons.defaultBackgroundColor,
        paddingVertical: 26,
    },
    header: {
        paddingHorizontal: 13,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    }
});