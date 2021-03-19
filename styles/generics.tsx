import { StyleSheet } from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({});

// TEXTSTYLES
export const textStyles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    normal: {
        fontSize: 16,
    },
    normalBold:{
        fontSize: 16,
        fontWeight: 'bold'
    }
});

//CONTAINERS
export const container = StyleSheet.create({
    basicContainer: {
        padding: 16
    }
});

//WEEKDAY STYLE
export const calendarStyle = StyleSheet.create({
    activeDay: {
        backgroundColor: colors.lightGreen,
        paddingRight:16,
        paddingLeft:16,
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius:50,
        justifyContent: 'center'
    },
    inactiveDay: {
        backgroundColor: colors.lightGreen,
        paddingRight:16,
        paddingLeft:16,
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius:50,
        justifyContent: 'center'
    }
})



export default styles;