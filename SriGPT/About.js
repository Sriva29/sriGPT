import React from 'react';
import { View, Text, Linking, StyleSheet, Pressable } from 'react-native';

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        I built this app using React Native. I plan to integrate this with a GPT model that is fed with my resume, portfolio, and some pre-answered interview questions. This will enable you, the interviewer, to 
        interview a virtual version of me. If you have any questions that is not in the data I have loaded, then the app will prompt you to contact me directly. This GPT won't make up facts about me :)</Text>
      <Text style={styles.text}>A bit about me: With 9 years in the game, I've blended instructional design and game development for both corporate and academic online courses. 
      Leading teams up to 20 strong for four years, I've collaborated with cool clients across the US, Canada, and the UK.
      I believe in the transformative power of AI and hope to contribute to its growth for the betterment of humanity.
      </Text>
      
      <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/srivatsan-rangarajan/')}>
        <Text style={styles.link}>LinkedIn</Text>
      </Pressable>
      <Pressable onPress={() => Linking.openURL('mailto:srivatsan.official@gmail.com')}>
        <Text style={styles.link}>Email</Text>
      </Pressable>
      <Pressable onPress={() => Linking.openURL('tel:+14373835250')}>
        <Text style={styles.link}>Phone Number</Text>
      </Pressable>
      <Pressable onPress={() => Linking.openURL('https://github.com/Sriva29/')}>
        <Text style={styles.link}>GitHub</Text>
      </Pressable>
      <Pressable onPress={() => Linking.openURL('https://www.srivatsanrangarajan.com')}>
        <Text style={styles.link}>Portfolio</Text>
      </Pressable>
      {/* About Button */}
      <Pressable
        style={[styles.button, { marginTop: 10 }]} 
        onPress={() => navigation.navigate('Home')} 
      >
      <Text style={styles.buttonText}>Back to the Interview</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2a41', 
    padding: 20,
  },
  text: {
    marginBottom: 20,
    color: '#8fd88b', 
  },
  link: {
    marginBottom: 10,
    color: '#8fd88b', 
    textDecorationLine: 'underline',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#8fd88b',
    marginBottom: 20,
  },
  buttonText: {
    color: '#2b2a41',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }
});
