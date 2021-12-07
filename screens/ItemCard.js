/**
 * This is the item card that will display the items' information
 * Author: Novia Wu
 * Date: 12/2/2021
 */
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { Modal, Portal, Button } from "react-native-paper";
import { firebaseRealtimeDB, firebaseStorage } from "../firebase";
import { generateID, uploadImage } from "../utils/utils";

const ItemCard = () => {
  const [wardrobe, setWardrobe] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState();

  useEffect(() => {
    const getWardrobe = () => {
      firebaseRealtimeDB.ref("items").on("value", (querySnapshot) => {
        if (querySnapshot.exists()) {
          const items = Object.values(querySnapshot.val());
          setWardrobe(items);
        } else {
          console.log("No items found");
        }
      });
    };
    getWardrobe();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setModalOpen(true);
        setModalItem(item);
      }}
    >
      <View style={styles.listItem}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Image
          source={{
            uri: item.image_url,
          }}
          style={styles.photo}
        ></Image>
      </View>
    </TouchableOpacity>
  );

  const hideModal = () => setModalOpen(false);

  // delete the item from the database
  const handleDelete = async (item) => {
    console.log("deleted");
    firebaseRealtimeDB.ref("items").child(item.id).remove();
    firebaseStorage.refFromURL(item.image_url).delete();
    setModalOpen(false);
  };

  // add this item to the favorites list
  const handleFavorite = async (item) => {
    console.log("marked as favorite");
    const id = generateID.getRandomID();
    const url = await uploadImage.uploadImageAsync(item.image_url);
    // upload the same product to Firebase Realtime Database's favorites column
    var newItem = {
      id: id,
      name: item.name,
      category: item.category,
      brand: item.brand,
      image_url: url,
      created_at: Date.now(),
    };
    firebaseRealtimeDB
      .ref("favorites")
      .child(id)
      .set(newItem, (err) => {
        if (err) {
          Alert.alert("Item could not be saved: " + err);
        } else {
          Alert.alert("Item saved successfully");
        }
      });
    hideModal();
  };

  let i = 0;
  return (
    <View style={styles.list}>
      <FlatList
        style={{ alignSelf: "flex-start" }}
        data={wardrobe}
        renderItem={renderItem}
        keyExtractor={() => {
          const key = i++;
          return key.toString();
        }}
      />
      {modalOpen ? (
        <Portal style={{ justifyContent: "center", alignItems: "center" }}>
          <Modal
            visible={modalOpen}
            onDismiss={hideModal}
            contentContainerStyle={styles.modal}
          >
            <Text style={styles.itemName}>{modalItem.name}</Text>
            <Image
              source={{
                uri: modalItem.image_url,
              }}
              style={styles.modalImage}
            ></Image>
            <Text style={styles.itemDes}>
              Category: {modalItem.category} {"\n"} Brand: {modalItem.brand}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Button
                style={styles.button}
                mode="contained"
                compact={true}
                onPress={() => {
                  handleFavorite(modalItem);
                }}
              >
                <Text style={{ fontFamily: "Cochin", color: "black" }}>
                  Favorite
                </Text>
              </Button>
              <Button
                style={styles.button}
                mode="contained"
                compact={true}
                onPress={() => {
                  handleDelete(modalItem);
                }}
              >
                <Text style={{ fontFamily: "Cochin", color: "black" }}>
                  Delete
                </Text>
              </Button>
            </View>
          </Modal>
        </Portal>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  listItem: {
    padding: 20,
    marginVertical: 5,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 28,
    fontFamily: "Cochin",
  },
  photo: {
    width: 300,
    height: 300,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    height: 450,
    alignItems: "center",
    justifyContent: "center",
  },
  itemName: {
    fontSize: 28,
    fontFamily: "Cochin",
    color: "black",
  },
  itemDes: {
    fontSize: 20,
    fontFamily: "Cochin",
    color: "black",
  },
  modalImage: {
    width: 200,
    height: 200,
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default ItemCard;
