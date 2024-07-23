import React from "react";
import { StyleSheet, View } from "react-native";
import params from "../params";

export default porps => {
    const styleField = [styles.field]
    // another styles here !!!
    if (styleField.length === 1) styleField.push(styles.regular)

    return (
        <View style={styleField}>

        </View>
    )
}

const styles = StyleSheet.create ({
    field: {
        height: params.blockSize,
        width: params.blockSize
    }
})