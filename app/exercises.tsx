import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { bodyParts, dummyExercise } from '@/constants';
import {fetchExercises} from '../api/ExercisesDB'
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';

export default function exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercises, setExercises] = useState([]);

  useEffect(()=>{
    if(item) getExercises(item.name)
  },[]);

  const getExercises = async (bodyParts)=>{
    let data = await fetchExercises(bodyParts);
    // console.log(data);
    setExercises(data);
  }

  return (
    <ScrollView>
      <StatusBar style="light"/>
      <Image source = {item.image} style={{ width:wp(100), height: hp(45)}} className='rounded-b-[40px]'/>
      <TouchableOpacity onPress={()=>router.back()} className='bg-rose-500 mx-4 flex justify-center items-center rounded-full absolute pr-1' style={{height:hp(5.5), width:hp(5.5), marginTop:hp(7)}}>
          <Ionicons name="caret-back-outline" size={hp(3)} color="white" />
      </TouchableOpacity>

      <View className='mx-4 space-y-3 mt-4'>
        <Text style={{fontSize:hp(3)}} className='font-semibold text-neutral-700'>
          {item.name} exercises
        </Text>
        <View className='mb-10'>
          <ExerciseList data={exercises}/>
        </View>

      </View>
    </ScrollView>
  )
}