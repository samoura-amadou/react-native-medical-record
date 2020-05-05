import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const CustomButton = props => {
    return (
        <View style={styles.buttonContainer}>
            <Button
                onPress={() => alert('button pressed')}
                title={props.title}
                color="#2db7ff"
            />
         </View>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    buttonContainer: {
        width: '80%',
    }
});
