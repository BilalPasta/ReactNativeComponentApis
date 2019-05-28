import React,{Component} from 'react';
import {View,Text,Button,Vibration} from 'react-native';


export default class MobileVibrate extends React.Component{

    render(){
        return(<View>
            <Button 
            title={'Vibration On'}
            onPress={()=>Vibration.vibrate(10000)}/>
            <Button 
            title={'Vibration Stop'}
            onPress={()=>Vibration.cancel()}/>
            </View>)
    }
}