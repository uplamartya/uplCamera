# UPLCamera

```css
onSubmit: Callback prop for selected images data return
onPermissionRejection: Callback prop for user permission rejection

onPermissionBlocked: Callback prop : when permissions are blocked by android system
```

Please install this libraries 

react-native-camera: **uplsoumen/react-native-camera-modified#master**

react-native-permissions

****`@react-native-community/cameraroll`****

```bash
yarn add react-native-camera
```

```bash
yarn add react-native-permissions
```

```bash
yarn add ****@react-native-community/cameraroll****
```

Need to add this permissions in **`AndroidManifest.xml`**

Android:

```arduino
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
```

for IOS:

Add permissions with usage descriptions to your app `Info.plist:`

```xml
<key>NSCameraUsageDescription</key>
<string>Allow access to capture photo and share with pictplay</string>
<key>NSMicrophoneUsageDescription</key>
<string>Allow access to capture video and share with pictplay</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Allow access to select photo and share with pictplay</string>
```

### **Modify build.gradle**

Modify the following lines in `android/app/build.gradle`:

```
android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'general'
  }
}
```

## Add these to PodFile

```swift
pod 'Permission-Camera', :path => "../node_modules/react-native-permissions/ios/Camera"
pod 'Permission-PhotoLibrary', :path => "../node_modules/react-native-permissions/ios/PhotoLibrary"
```