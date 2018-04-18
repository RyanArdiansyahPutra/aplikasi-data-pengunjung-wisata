import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 


//Home Screen

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ alignItems:'center', justifyContent: 'center' }}>
        <Text style={{ alignItems: 'center', textAlign: 'center' }}>DATA PENGUNJUNG WISATA THEATER</Text>
      </View>
    );
  }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  
  constructor()
    {
        super();
 
        this.state = { 
          noktp: '',
          namapengunjung: '',
          judulfilm: '',
          ruangan: '',
          tanggal: '', 
          pukul: '', 
          harga: '', 
          ActivityIndicator_Loading: false, 

        }
    }
    //fungsi mengirim data ke database
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          //mengirim data ke database melalui api
            fetch('https://ryanardiansyah.000webhostapp.com/sentDatafix.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  noktp : this.state.noktp,
                  namapengunjung : this.state.namapengunjung,
                  judulfilm : this.state.judulfilm,
                  ruangan : this.state.ruangan,
                  tanggal : this.state.tanggal,
                  pukul : this.state.pukul,
                  harga : this.state.harga,
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                /*Alert.alert(
                  'Oops!',
                  'Something went wrong!',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )*/
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style = { styles.MainContainer }>
                <Text>   NO KTP </Text>
                <TextInput 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  
                  onChangeText = {(TextInputText) => this.setState({ noktp: TextInputText })} />

                <Text>   NAMA PENGUNJUNG </Text>
                <TextInput 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  
                  onChangeText = {(TextInputText) => this.setState({ namapengunjung: TextInputText })} />

                <Text>   JUDUL FILM </Text>
                <TextInput 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  
                  onChangeText = {(TextInputText) => this.setState({ judulfilm: TextInputText })} />

                <Text>   RUANGAN </Text>
                <TextInput 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  autoCapitalize="words"
                  
                  onChangeText = {(TextInputText) => this.setState({ ruangan: TextInputText })} />

                <Text>   DATE </Text>
                <TextInput 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  
                  onChangeText = {(TextInputText) => this.setState({ tanggal: TextInputText })} />

                <Text>   PUKUL </Text>
                <TextInput 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  
                  onChangeText = {(TextInputText) => this.setState({ pukul: TextInputText })} />

                <Text>    HARGA</Text>
                <TextInput 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  returnKeyType="next"
                  keyboardType="numeric"
                  
                  onChangeText = {(TextInputText) => this.setState({ pukul: TextInputText })} />
 
                <TouchableOpacity 
                  activeOpacity = { 0.5 }
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>

                    <Text style = { styles.TextStyle }>Input</Text>

                </TouchableOpacity>

                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
                
            </KeyboardAvoidingView> //penutup containerMain
     
      
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20

    },
 
    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "#CFD8DC",
      borderWidth: 3,
      borderColor: '#7986CB',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },

    BoxClass:
    {
      alignItems: 'center',
      height: 40,
      backgroundColor : "#CDDC39",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#00E676',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7 
 
    },
 
    TextStyle:
    {
        color: '#F9FBE7',
        textAlign: 'center',
        fontSize: 18
    },

    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }, 
  Header: {
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextHeader: {
        fontSize: 30,
        color: '#C51162'
    },
});