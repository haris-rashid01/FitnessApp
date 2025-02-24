import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import {LinearGradient} from 'expo-linear-gradient'
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import home from './home';

export default function index() {
    const router = useRouter();
  return (
    <View className='flex-1 flex justify-end'>
        <StatusBar style="light"></StatusBar>    
        <Image source={require("../assets/images/welcome.png")} className='h-full w-full absolute'/>

        <LinearGradient colors={["transparent", "#18181b"]}
        style={{width:wp(100), height: hp(70)}}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:0.8}} 
        className='flex justify-end pb-12 space-y-8'>

            <Animated.View entering={FadeInDown.delay(100).springify()} className='flex items-center'>
                <Text style={{fontSize:hp(5)}} className='text-white font-bold tracking-wide'>
                    Best <Text className='text-rose-500'>Workouts
                    </Text>
                </Text>
                <Text style={{fontSize:hp(5)}} className='text-white font-bold tracking-wide'>
                    For You 
                </Text>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).springify()}>
                <TouchableOpacity onPress={()=> router.push('home')} style={{height:hp(7), width:wp(80)}} className='bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'>
                    <Text style={{fontSize:hp(3)}} className='text-white font-bold tracking-widest' >
                        Get Started
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </LinearGradient>

    </View>
  )
}