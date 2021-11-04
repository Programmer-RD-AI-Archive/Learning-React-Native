import React from 'react';
import { View,StyleSheet } from 'react-native';
import colors from '../config/colors';

function ListItemSperator() {
    return (
        <View style={styles.sperator}></View>
    );
}

const styles = StyleSheet.create({
    separator:{width : "100%", height : 1, backgroundColor : colors.light}
})
export default ListItemSperator;
