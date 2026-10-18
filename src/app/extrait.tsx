import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import '../../global.css';


export default function HomeScreen() {
const [compteur, setCompteur] = useState(0)


  
  return(
        <ScrollView>
    <View style={styles.container}>

     <Text className='text-2xl font-bold text-black'>
      controle rout
      </Text>
      <Pressable style={styles.bouton} onPress={()  => console.log("button pressé")}>
      <Text style={styles.text} >bouton</Text>
      </Pressable>
     <br /><br />


     <Text>compteur: {compteur} </Text>
     <Pressable style={styles.bouton} onPress={()  => setCompteur(compteur + 1)}>
      <Text style={styles.text} >Augmenter</Text>
      </Pressable>
<br />
       <Pressable style={styles.bouton} 
       disabled={compteur===1}
       onPress={()  => {
        if (compteur > 1) {
            setCompteur(compteur - 1)}
        }
       }
        
       >
      <Text style={styles.text} >diminuer</Text>
      </Pressable>
    </View>

      <View style= {styles.list}>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          <Text>azerty</Text>
          
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1  ,
    justifyContent: 'center',
    alignItems:'center'
  },
  bouton:{
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:30,  
    borderRadius:10,
   
  },
  text:{
   color:'white',
   fontWeight: 'bold'
  },
  list:{
    marginLeft:50
  }
})