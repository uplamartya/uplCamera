import React,{useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CameraModule from './CameraModule';
const App = () => {
  const cameraRef = useRef(); // user need to create ref to access methods from child component
  const deleteModal = () => {
    return (
      <>
        <Text style={{fontSize: 22, color: 'black'}}>No Nothing</Text>
        <Text>You need to grand the permission from settings</Text>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            // height:100
          }}>
          <TouchableOpacity
          onPress={() => {
            cameraRef.current.handleParentSettingsButton(); // TO open settings of device
          }}
            style={{
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              padding: 10,
            }}>
            <Text style={{color: 'white'}}>Open Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              cameraRef.current.handleParentCloseButton(); // TO close dialog from parent
            }}
            style={{
              backgroundColor: '#dedede',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              padding: 10,
            }}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <View style={{flex: 1}}>
      <CameraModule
        ref={cameraRef}  // Passing ref from child to parent
        onSubmit={data => {
          // returns data when user presses send button
          console.log(data);
        }}
        
        deleteModal={deleteModal}
      />
    </View>
  );
};
export default App;
