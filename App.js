import React from 'react';
import {View} from 'react-native';
import CameraModule from './CameraModule';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <CameraModule
        onSubmit={data => { // returns data when user presses send button
          console.log(data);
        }}
      />
    </View>
  );
};
export default App;
