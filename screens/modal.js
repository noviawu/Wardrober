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
  Image,
  TouchableOpacity,
} from "react-native";
import { Modal, Portal } from "react-native-paper";
import { firebaseRealtimeDB } from "../firebase";

const Modal = () => {
  const [wardrobe, setWardrobe] = useState([]);
  const [itemOpen, setItemOpen] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setItemOpen(true);
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

  const hideModal = () => setItemOpen(false);

  return (
    <Portal style={{ justifyContent: "center", alignItems: "center" }}>
      <Modal
        visible={itemOpen}
        onDismiss={hideModal}
        contentContainerStyle={styles.modal}
      >
        <View>
          <Text>modal</Text>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    height: 400,
    alignItems: "center",
  },
});

export default ItemCard;
