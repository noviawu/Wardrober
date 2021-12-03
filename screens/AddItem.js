/**
 * This will be the local wardrobe that the user can store items and look over them
 */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { Camera } from "expo-camera";
import { Avatar, Button, TextInput, List } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AddItem = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [cameraOpen, setCameraOpen] = useState(false);
  const [imageURI, setImageURI] = useState();

  /**
   * saves the item info in the asych storage
   * @param {*} value the object containing all the item information
   * @param {*} name the name of the item
   */
  const storeItem = async (value, name) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(name, jsonValue);
      console.log("just stored " + jsonValue);
    } catch (e) {
      console.log("error in storeData ");
      console.dir(e);
    }
  };

  const labelName = <Text style={{ fontFamily: "Cochin" }}>Name</Text>;
  const labelCategory = <Text style={{ fontFamily: "Cochin" }}>Category</Text>;
  const labelBrand = <Text style={{ fontFamily: "Cochin" }}>Brand</Text>;

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ height: "100%", width: "100%" }}>
          <View style={styles.title}>
            <Text style={styles.header}> New Item</Text>
            <TouchableOpacity
              onPress={() => {
                setCameraOpen(true);
              }}
            >
              {imageURI ? (
                <Image
                  source={{
                    uri: imageURI,
                  }}
                  style={styles.photo}
                />
              ) : (
                <Avatar.Icon size={260} icon="camera" />
              )}
            </TouchableOpacity>

            <Modal
              visible={cameraOpen}
              backdropStyle={{ backgroundColor: "transparent" }}
            >
              <CameraView
                closeCamera={() => setCameraOpen(false)}
                setImageURI={setImageURI}
              />
            </Modal>
          </View>
          <View>
            <TextInput
              style={styles.textinput}
              label={labelName}
              onChangeText={(text) => {
                setName(text);
              }}
              value={name}
            />
            <TextInput
              style={styles.textinput}
              label={labelCategory}
              onChangeText={(text) => {
                setCategory(text);
              }}
              value={category}
            />
            <TextInput
              style={styles.textinput}
              label={labelBrand}
              onChangeText={(text) => {
                setBrand(text);
              }}
              value={brand}
            />
          </View>
          <Button
            style={styles.button}
            mode="outlined"
            compact={true}
            onPress={() => {
              const theInfo = { name, category, brand }; //=== name:name, category:category...
              storeItem(theInfo, name);
              setName("");
              setBrand("");
              setCategory("");
            }}
          >
            <Text style={{ fontFamily: "Cochin", color: "black" }}>Save</Text>
          </Button>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

function CameraView({ closeCamera, setImageURI }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const resetType = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePhoto = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      console.log("photo URI", photo.uri);
      console.log(photo);
      setImageURI(photo.uri);
      closeCamera();
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageURI(result.uri);
      closeCamera();
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "black",
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={cameraStyles.cameraButtonsContainer}>
          <Text
            style={{ fontSize: 18, marginBottom: 10, color: "white" }}
            onPress={closeCamera}
          >
            Back
          </Text>
          <Avatar.Icon icon="camera" size={24} onPress={resetType} />
        </View>
      </View>
      <View style={{ height: windowWidth }}>
        <Camera
          style={{ height: windowWidth }}
          type={type}
          ref={(ref) => {
            setCameraRef(ref);
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={cameraStyles.cameraButtonsContainer}>
          <Avatar.Icon
            style={{ flex: 1 }}
            icon="camera"
            size={30}
            color="white"
            onPress={pickImage}
          />
          <TouchableOpacity style={{ flex: 1 }} onPress={takePhoto}>
            <View>
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: "50%",
                  borderColor: "white",
                  height: 50,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: "50%",
                    borderColor: "white",
                    height: 40,
                    width: 40,
                    backgroundColor: "white",
                  }}
                ></View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  title: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    fontFamily: "Cochin",
    color: "black",
  },
  textinput: {
    marginTop: 20,
    marginHorizontal: 50,
    fontSize: 17,
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 100,
  },
  photo: {
    width: 260,
    height: 260,
    borderRadius: 250,
  },
});

const cameraStyles = StyleSheet.create({
  cameraBodyContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  cameraButtonsContainer: {
    height: 80,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
});

export default AddItem;
