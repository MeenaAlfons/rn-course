// Import libraries
import React, {Component} from 'react';
import { FlatList, View, Text, Button } from 'react-native';
import AlbumCard from './AlbumCard';

const mydata =  [
    {
      "id": 1,
      "title": "quidem molestiae enim",
      "description": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://picsum.photos/id/237/200/300"
    },
    {
      "id": 2,
      "title": "sunt qui excepturi placeat culpa",
      "description": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796"
    },
    {
      "id": 3,
      "title": "omnis laborum odio",
      "description": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355"
    },
    {
      "id": 4,
      "title": "non esse culpa molestiae omnis sed optio",
      "description": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776"
    },
    {
      "id": 5,
      "title": "eaque aut omnis a",
      "description": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97"
    },
    {
      "id": 6,
      "title": "natus impedit quibusdam illo est",
      "description": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2"
    },
    {
      "id": 7,
      "title": "quibusdam autem aliquid et et quia",
      "description": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://via.placeholder.com/600/b0f7cc"
    },
    {
      "id": 8,
      "title": "qui fuga est a eum",
      "description": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://via.placeholder.com/600/54176f"
    },
    {
      "id": 9,
      "title": "saepe unde necessitatibus rem",
      "description": "qui eius qui autem sed",
      "url": "https://via.placeholder.com/600/51aa97"
    },
    {
      "id": 10,
      "title": "distinctio laborum qui",
      "description": "beatae et provident et ut vel",
      "url": "https://via.placeholder.com/600/810b14"
    }
  ];

// Make component
class Albums extends Component {

    state = {
        albums: []
    }

    render() {

        return (<View style={{flex:1}}>
            <Text>This is my album list</Text>
            {
                (this.state.albums.length > 0) ?
                this.renderAlbums() :
                this.renderButton()
            }
        </View>);
    }

    renderAlbums() {
        return (
                <FlatList
                    data={this.state.albums}
                    renderItem={({item}) => {
                        return (<AlbumCard album={item}/>);
                    }}
                    keyExtractor={(item) => `${item.id}`}
                />
        );
    }

    renderButton() {
        return (<Button title="Load Data" onPress={() =>{
            this.setState({
                albums: mydata
            });
            // console.log("Button press");
            // fetch('https://meena-iti.getsandbox.com/albums')
            // .then(response => {
            //     console.log("response");
            //     return response.json()
            // })
            // .then(body => {
            //     console.log("API response");
            //     this.setState({
            //         albums: body
            //     });
            // }).catch(error => console.log(error))
        }}/>);

    }

    componentDidMount() {
        // console.log("Albums -> componentDidMount");
        // setTimeout(() => {
        //     console.log("API response");
        //     this.setState({
        //         albums: mydata
        //     });
        // }, 2000);

        // fetch('https://meena-iti.getsandbox.com/albums')
        //     .then(response => response.json())
        //     .then((body) => {
        //         console.log(body);

        //         this.setState({
        //             albums: body
        //         });
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    }
}
const styles = {
    
};

export default Albums;