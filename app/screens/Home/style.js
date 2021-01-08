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
        borderBottomColor: commons.defaultBorderColor,
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
    },
    filterText: {
        marginRight: 5
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 13,
    },
    allTitle: {
        fontSize: 30,
        paddingHorizontal: 13,
        marginTop: 10,
        marginBottom: 10
    },
    listContainer: {
        paddingHorizontal: 13,
    }
});