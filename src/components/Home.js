import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  StatusBar,
} from 'react-native';

//Api vQ438WTF06U3qAjryMGqp3M286Wgqg5IcWwLyYXT
//https://api.nasa.gov/planetary/apod?api_key=vQ438WTF06U3qAjryMGqp3M286Wgqg5IcWwLyYXT

export default class Home extends React.Component {
  state = {
    text: '',
  };



  onChangeText = (text) => {
    this.setState({text});
  };


  
  getRandomAsteroid =async()=>{
    const {navigate} = this.props.navigation;
    try{
        let response= await this.fetchRandomAsteroid()
        let id=response.near_earth_objects[this.getRandomInt(0,response.near_earth_objects.length)].id
        navigate('Asteroid', {asteroid: id})
    }
    catch(e){
        console.log(e)
    }   
  }


  fetchRandomAsteroid = async () => {
    const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`,{});
    const json = await response.json();
    return json;
  };


  getRandomInt=(min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View>
            <TextInput
              keyboardType='numeric'
              placeholder={'Enter Asteroid ID'}
              style={styles.textInput}
              numberOfLines={4}
              onChangeText={(text) => this.onChangeText(text)}
              value={this.state.text}
            />
            <View style={styles.btnview}>
              <View style={styles.button} >
                  <Button
                    onPress={()=>this.getRandomAsteroid()}
                    title="Random Asteroid"
                  />
                </View>
                <View style={styles.button} >
                  <Button
                    disabled={!this.state.text.length > 0}
                    onPress={() => navigate('Asteroid', {asteroid: this.state.text})}
                    title="Submit"
                  />
                </View>
              
            </View>
            
              
           
          </View>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  btnview:{
    display: 'flex',
    flexDirection:'column-reverse',
    marginLeft:'20%',
    marginRight:'20%',
    marginTop:'4%',
    justifyContent:'space-between'

  },
  button: {
    backgroundColor:'orange',
    borderRadius:10,
    alignSelf:'center',
    color:'#000',
    width:200,
    marginTop:10, 
 },
  textInput: {
    marginTop: 50,
    alignSelf: 'center',
    width: 200,
    textAlign: 'center',
    height: 50,
    borderRadius: 10,
    //elevation: 5,
    backgroundColor: 'white',
    shadowColor: 'white',
    shadowRadius: 5,
    shadowOpacity: 1,
  },
});