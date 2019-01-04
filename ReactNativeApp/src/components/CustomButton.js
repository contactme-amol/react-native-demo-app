import React, {Component} from 'react';
import {Text, TouchableOpacity, Linking} from 'react-native';

class CustomButton extends Component {

    componentWillMount() {

    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.onClickMeButton()} style = {styles.buttonStyle}>
                <Text style={styles.textStyle}> Click Me!!</Text>
            </TouchableOpacity>
        );
    }

    onClickMeButton() {
        Linking.openURL(this.props.imageUrl)
    }

}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default CustomButton;