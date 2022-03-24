import type {Node} from 'react';
import React from 'react';
import {I18nManager, TextInput, StyleSheet, View} from 'react-native';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        textAlign={I18nManager.isRTL ? 'right' : 'left'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: '#ECEEF0',
    marginBottom: 8,
  },
});

export default App;
