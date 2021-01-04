import { StyleSheet } from 'react-native';
import commons from '../../commons';

export default StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: commons.defaultBackgroundColor,
        paddingVertical: 26,
        paddingHorizontal: 13
    },
    header: {
        paddingBottom: 10,
    },
    title: {
        fontSize: 30,
    }
});