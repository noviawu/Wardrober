/**
 * This will be the wardrobe page where people can see snippets of clothings etc.
 * Author: Novia Wu
 * Date: 12/2/2021
 */
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { firebaseRealtimeDB } from "../firebase";

const width = Dimensions.get("window").width; //full width

const Wardrobe = () => {
  const [wardrobe, setWardrobe] = useState([]);

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

  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <View style={{ flex: 1, flexDirection: "row" }}>
  //         <View style={{ flex: 1 }}>
  //           <View style={{ flex: 1, backgroundColor: "pink" }}>
  //             <Text style={{ fontSize: 24 }}> pink</Text>
  //           </View>
  //           <View style={{ flex: 1, backgroundColor: "green" }}>
  //             <Text style={{ fontSize: 24 }}> green</Text>
  //           </View>
  //           <View style={{ flex: 1, backgroundColor: "yellow" }}>
  //             <Text style={{ fontSize: 24 }}> yellow</Text>
  //           </View>
  //         </View>
  //         <View style={{ flex: 1 }}>
  //           <View style={{ flex: 1, backgroundColor: "red" }}>
  //             <Text style={{ fontSize: 24 }}> red</Text>
  //           </View>
  //           <View style={{ flex: 1, backgroundColor: "white" }}>
  //             <Text style={{ fontSize: 24 }}> white</Text>
  //           </View>
  //           <View style={{ flex: 1, backgroundColor: "blue" }}>
  //             <Text style={{ fontSize: 24 }}> blue</Text>
  //           </View>
  //         </View>
  //         <View style={{ flex: 1 }}>
  //           <View style={{ flex: 1, backgroundColor: "teal" }}>
  //             <Text style={{ fontSize: 24 }}> teal</Text>
  //           </View>
  //           <View style={{ flex: 1, backgroundColor: "purple" }}>
  //             <Text style={{ fontSize: 24 }}> purple</Text>
  //           </View>
  //           <View style={{ flex: 1, backgroundColor: "silver" }}>
  //             <Text style={{ fontSize: 24 }}> silver</Text>
  //           </View>
  //         </View>
  //       </View>
  //     </SafeAreaView>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   items: {
  //     flex: 1,
  //     flexDirection: "row",
  //     backgroundColor: "yellow",
  //   },
  // });

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image
        source={{
          uri: item.image_url,
        }}
        style={styles.photo}
      ></Image>
    </View>
  );

  let i = 0;
  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        style={{ alignSelf: "flex-start" }}
        data={wardrobe}
        renderItem={renderItem}
        keyExtractor={() => {
          const key = i++;
          return key.toString();
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  listItem: {
    backgroundColor: "#F8DE90",
    marginVertical: 5,
  },
  photo: {
    width: width,
    height: 400,
  },
});

export default Wardrobe;
