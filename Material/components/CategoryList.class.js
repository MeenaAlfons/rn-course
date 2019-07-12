// Import libraries
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// Make component
class CategoryList extends Component {
    state = {
        categories: []
    }


    render() {
        console.log(this.state);

        return (
            <View>
                {this.state.categories.map((category) => (
                    <View key={category.id}>
                        <Text >{category.title}</Text>
                        <Image style={{width:50, height:50}} source={{uri:category.url}}/>
                    </View>
                ))}
            </View>
        );
    }

    componentDidMount() {
        console.log("CategoryList did mount");
        fetch('https://meena-iti.getsandbox.com/albums')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                categories: responseJson
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }
}

// Make component available to other parts of the app
export default CategoryList;