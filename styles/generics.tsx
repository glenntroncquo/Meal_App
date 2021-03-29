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
        paddingBottom: 18,
        paddingTop: 18,
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        minWidth: 60,
        maxWidth: 60,
    },
    inactiveDay: {
        backgroundColor: 'white',
        paddingRight:16,
        paddingLeft:16,
        paddingBottom: 18,
        paddingTop: 18,
        borderRadius:50,
        alignItems:'center',
        justifyContent: 'center',
    }
})


export default styles;