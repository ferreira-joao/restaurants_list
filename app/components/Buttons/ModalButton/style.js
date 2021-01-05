import { StyleSheet } from 'react-native';
import commons from '../../../commons';

export default StyleSheet.create({
    modal_button_container: {
        width: '50%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: commons.defaultBorderColor,
        justifyContent: 'space-between'
    },
    modal_button_text: {
        color: commons.mainColor
    }
});