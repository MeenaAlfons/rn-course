// Import libraries
import React, { Component } from 'react';
import { FlatList, View, Text, Image, Button } from 'react-native';

// Make component
class CategoryList extends Component {
    state = {
        categories: []
    }


    render() {
        console.log(this.state);

        if(this.state.categories.length > 0) {
            return this.renderList();
        } else {
            return this.renderButton();
        }

    }

    renderButton() {
        return (
            <Button title="Load Ctegories"
            onPress={()=>{
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
            }}/>
        );
    }

    renderList() {
        return (
            <FlatList 
            style={{borderWidth: 3, borderColor: '#FF0000'}}
            data={this.state.categories}
            keyExtractor={(item) => `${item.id}`}
                renderItem={({item})=>(
                    <View>
                        <Text >{item.title}</Text>
                        <Image style={{width:50, height:50}} source={{uri:item.url}}/>
                    </View>
                )}>
            </FlatList>
        );
    }

    componentDidMount() {
        console.log("CategoryList did mount");

    }
}

// Make component available to other parts of the app
export default CategoryList;