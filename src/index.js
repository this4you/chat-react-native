import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

const Test = () => (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={styles.title}>
                This layout strategy lets the title define the width of the button.
            </Text>
            <View style={styles.fixToText}>
                <Button
                    title="Left button TEST"
                    onPress={() => Alert.alert('Left button pressed')}
                />
                <Button
                    title="Right button"
                    onPress={() => Alert.alert('Right button pressed')}
                />
            </View>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default Test;
