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
        paddingHorizontal: 13
    },
    openNowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 13,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: commons.defaultBorderColor,
    },
    priceContainer: {
        paddingVertical: 15,
        paddingHorizontal: 13,
        borderBottomWidth: 1,
        borderBottomColor: commons.defaultBorderColor,
    },
    priceContainerText: {
        marginBottom: 15
    },
    categoryContainer: {
        paddingVertical: 15,
        paddingHorizontal: 13,
        borderBottomWidth: 1,
        borderBottomColor: commons.defaultBorderColor,
    },
    categoryTexts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    }
});