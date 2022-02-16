import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import * as Device from "expo-device";
import { Camera } from "expo-camera";

export default function App() {
  // const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(status === "granted");
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} />
      <View style={{ justifyContent: "center", borderWidth: 2, padding: 20 }}>
        {Device.isDevice && (
          <Text style={{ fontSize: 20 }}>
            Model: {Device.modelName} {Device.DeviceType}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    height: 500,
    width: 500,
  },
});
