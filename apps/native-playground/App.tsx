import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@romanbakurov/flux-ui-native';
import { Checkbox } from '@romanbakurov/flux-ui-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'KantumruyPro-ExtraLight': require('./assets/fonts/KantumruyPro-ExtraLight.ttf'),
    'KantumruyPro-Regular': require('./assets/fonts/KantumruyPro-Regular.ttf'),
    'KantumruyPro-Medium': require('./assets/fonts/KantumruyPro-Medium.ttf'),
    'KantumruyPro-SemiBold': require('./assets/fonts/KantumruyPro-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Button variant='primary' size='md' onPress={() => alert('Flux UI!')}>
        Click me
      </Button>
      <Checkbox></Checkbox>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
