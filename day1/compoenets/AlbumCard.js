// Import libraries
import React, {Component} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

// Make component
class AlbumCard extends Component {
 render() {
    console.log("render");
    const album = this.props.album;
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{album.id}</Text>
            <Text style={styles.textStyle}>{album.title}</Text>
            <Image source={{uri: album.url}}
                style={{width:100, height: 100}}/>
        </View>
    );
 }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    viewStyle: {
        backgroundColor: 'blue'
    }
});


export default AlbumCard;