import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Linking,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';

export default function Home({navigation}) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('My response will appear here');
// This application will get data from SriGPT model later: https://chat.openai.com/g/g-1Iclpdzj4-srivatsan-resume-gpt
  const handlePress = () => {
    setAnswer('I have 8 years of experience in Learning Design. For more specific questions, please contact me directly.');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Interview SriGPT</Text>
        <Image source={require('./assets/me.jpg')} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Ask me anything about my work..."
          onChangeText={setQuestion}
          value={question}
        />
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Ask Sri</Text>
        </Pressable>
        <Text style={styles.answer}>{answer}</Text>
        {/* About Button */}
        <Pressable
          // style={[styles.about]} // Add margin to separate from other buttons
          onPress={() => navigation.navigate('About')} 
        >
        <Text style={styles.about}>About</Text>
        </Pressable>
        {/* <Text style={styles.sectionTitle}>Portfolio Highlights</Text>
        Portfolio items to be added later*/}
        <Text style={styles.sectionTitle}>Open to Work:</Text>
        <Text style={styles.roles}>Learning Designer, UX Designer, Web App Developer</Text>
        <Text style={styles.contactInfo}>View My Resume: <Pressable onPress={()=>Linking.openURL ('https://sriva29.github.io/srivatsan-resume')}><Text style={styles.link}>https://sriva29.github.io/srivatsan-resume</Text></Pressable> </Text>
        <Text style={styles.contactInfo}>Mail Me: <Pressable onPress={()=>Linking.openURL ('mailto:srivatsan.official@gmail.com')}><Text style={styles.link}>srivatsan.official@gmail.com</Text></Pressable> </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#2b2a41',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginBottom: 10,
    color: '#8fd88b', 
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8fd88b',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#8fd88b',
    color: "#8fd88b",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#8fd88b',
    marginBottom: 10,
  },
  about:{
    color: "#8fd88b",
    fontSize: 16,
    textDecorationLine: 'underline'
  },
  buttonText: {
    color: '#2b2a41',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  answer: {
    marginTop: 20,
    color: "#8fd88b",
    marginBottom: 50,
    borderColor: '#8fd88b',
    borderWidth: 1,
    padding: 5,
  },
  image: {
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    marginBottom: 20, 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8fd88b',
    alignSelf: 'flex-start',
    marginTop: 30,
    marginBottom: 5,
  },
  roles: {
    color: '#8fd88b',
    marginTop: 30,
    fontSize: 14,
    fontWeight: 'Bold',
    // marginBottom: 50,
  },
  contactInfo: {
    color: '#8fd88b',
    marginTop: 30,
    // marginBottom: 50,
  },
});
