# Day 1

1. Android SDK & AVD
2. Init project & Run
3. Directory walkthrough
4. index.js & AppRegistery
5. Make a component
6. Use a component
7. Style
8. Flexbox
9. Props (Reusable Header)
10. Class based component
11. Component Lifecycle methods
12. Networking
13. Component State
14. List of items (map & key)
15. FlatList
16. Button


# 1. android SDK & AVD

Android Studio
SDK Manager
AVD

# 2. Init project & Run

```sh
react-native init FirstApp
cd FirstApp
react-native run-android
```

# 3. Directory walkthrough

index.js
ios
andoid
package.json
node_modules

# 4. index.js & AppRegistery

Material/index.js

# 5. Make a component

Material/header.js

# 6. Use a component

Material/index.js

# 7. Style

Material/header.js

```js
const styles = {
    textStyle: {
        fontSize: 30
    }
}
```
```js
const styles = {
    viewStyle: {
        backgroundColor: '#333333'
    }
}
```

# 8. Flexbox

```js
const styles = {
    viewStyle: {
        flex:1,
        flexDirection: 'row',
        height: 100,
    }
}
```

[Learn More about Flexbox](https://facebook.github.io/react-native/docs/flexbox)


# 9. Props (Reusable Header)

```js
{props.text}
```

# 10. Class based component

Material/header.js

# 11. Component Lifecycle methods

componentDidMount

# 12. Networking

```js
fetch('https://api.thecatapi.com/v1/categories')
fetch('https://facebook.github.io/react-native/movies.json')
fetch('https://meena-iti.getsandbox.com/albums')
```

# 13. Component State

```js
this.setState
```

# 14. List of items (map & key)

```js
this.state.categories.map(category => (
    <Text key={ctegory.id}>category.name</Text>
))
```
Reusable:
```js
this.state.categories.map(category => (
    <CategoryCard key={ctegory.id} category={category}/>
))
```
# 15. FlatList

```js
<FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
   keyExtractor={(item) => `${item.id}`}
/>
```

# 16. Button

```js
    <Button title="Load Ctegories"
    onPress={()=>{ }}/>
```

# Common Errors

- Could not connect to development server => Reason: server not running
- Unable to load script => Reason: Server not ready yet
