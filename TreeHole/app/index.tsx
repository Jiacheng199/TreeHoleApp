import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';


export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/treehole-icon.png")}
      />
      <Text style={styles.slogan}>Share whatever you want, encrypted and anonymously.</Text>
      <Link href="/login" style={styles.link}>Login</Link>
      <Link href="/register" style={styles.link}>Register</Link>
      <Link href="/home" style={styles.skip}>Skip</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f1eb',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 300,
    height: 300, 
  },
  slogan: {
    fontSize: 20,
    paddingTop: 50,
    paddingRight: 30,
    paddingLeft: 30,
  },
  link: {
    fontSize: 25,
    paddingTop: 50,
  },
  skip: {
    fontSize: 20,
    position: 'absolute',
    bottom: 40, 
    right: 40, 
  }
});
