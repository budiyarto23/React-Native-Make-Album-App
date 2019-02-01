import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends Component {
  state = { pesan: 'Oy Coy' }
  componentDidMount() {
    this.setState({ pesan: 'Keren Bror!' });
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

export default App;
