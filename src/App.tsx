import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312E38" />
    <View style={{ flex: 1, backgroundColor: '#312E38' }} />
  </>
);

export default App;
