import React,{useEffect,useState} from "react";
import { SafeAreaView,View,Text } from "react-native";
import type {Node} from 'react';
import axios from "axios";




const App: () => Node = () => {
  const [AllAccept,setAllAccept] = useState([]);

  useEffect(()=>{
    getListData();
  },[])

  const getListData = () =>{
    axios.get("http://192.168.1.100:5000/stockReq/reqAccept")
       .then(res => setAllAccept(res.data))
       .catch(error => console.log(error));
    // const url = "http://192.168.1.100:5000/stockReq/reqAccept"
    // fetch(url,{
    //   method: "GET",
    //   headers:{
    //     "Content-Type" : "application/json"
    //   }
    // }).then(res=>{
    //   return res.json()
    // }).then(res=>{
    //   let data = res.data
    //   setAllAccept(data)
    // }).catch(err=>{
    //   console.log(err);
    // })
  }
  return(
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
      <View>
        {AllAccept.map((item,index)=>(
          
            <View key={index}>
              <View/>
              
              <View>
                <Text>{item.name}</Text></View>
            </View>
          
        ))}
      </View>
    </SafeAreaView>
  )
}

export default App;