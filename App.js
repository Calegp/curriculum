import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Card from './src/components/Card'

import photo from './assets/photo.png';

export default function App() {
  function handleSocialMedia(socialMedia) {
    switch(socialMedia) {
      case 'github':
        Alert.alert('Meu Github', 'https://github.com/Calegp');
        break;
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/calegp/');
        break;
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={photo} style={styles.photo}></Image>
        <Text style={styles.name}>Camila L. Prestes</Text>
        <Text style={styles.role}>Desenvolvedora Frontend</Text>
        <View style={styles.social_media}>
          <TouchableOpacity onPress={() => handleSocialMedia('github')}>
            <Icon name="github" size={30}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialMedia('linkedin')}>
            <Icon name="linkedin" size={30}/>
          </TouchableOpacity>
        </View>

        <Card title='Formação Acadêmica'>
          <Text style={styles.card_content_text}>Bacharel em Ciência da Computação</Text>
          <Text style={styles.card_content_text}>Pós Graduação em Data Science</Text>
        </Card>
        <Card title='Experiência Profissional'>
          <Text style={styles.card_content_text}>Linx S.A (03/2017 - 07/2018)</Text>
          <Text style={styles.card_content_text}>Globo.com (07/2018 - 07/2021)</Text>
          <Text style={styles.card_content_text}>Remessa Online (07/2021 - Atualmente)</Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e7e7',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  role: {
    color: '#939393',
    marginBottom: 10
  },
  social_media: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
    marginTop: 20
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
});
