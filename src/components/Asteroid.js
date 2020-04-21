import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  View,
  Text,
  StatusBar,
} from 'react-native';
const {height, width} = Dimensions.get('window');
const apiKey="vQ438WTF06U3qAjryMGqp3M286Wgqg5IcWwLyYXT"
export default class Asteroid extends React.Component {
  state = {
    data: {}
  };

  componentDidMount = async () => {
    const {asteroid} = this.props.route.params;
    console.log(this.props.route.params)
    this.setState({asteroid: asteroid});
    let response = await this.fetchAsteroid(asteroid);
    this.setState({data: response});
  };

  fetchAsteroid = async (asteroid) => {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroid}?api_key=${apiKey}`, {});
    const json = await response.json();
    return json;
  };
 

  render() {
    const {asteroid, data} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
         <View style={styles.container}>
              <View style={styles.itemContainer}>
                <Text style={styles.title}>Asteroid ID :   <Text style={styles.text}> {asteroid}</Text></Text>
                <Text style={styles.title}>Name :   <Text style={styles.text}> {data.name}</Text></Text>
                <Text style={styles.title}>Nasa Jpl Url  :   <Text style={styles.url}> {data.nasa_jpl_url}</Text></Text>
                <Text style={styles.title}>Is Potentially Hazardous Asteroid  :   <Text style={styles.text}> {data.is_potentially_hazardous_asteroid?"YES":"NO"}</Text></Text>
                      
            </View>
         </View>
          
        </SafeAreaView>
      </>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },

  itemContainer: {
    padding: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    fontSize: 22,
    fontWeight: 'bold',
    elevation:1,
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'red',
    borderRadius: 10,
    borderColor: 'red',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },
  title: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  url: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight: '700',
    color: 'blue',
  }
 
});
