import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Wardrobe from "./Wardrobe.js";
import AddItem from "./AddItem.js";
import Favorites from "./Favorites.js";

const WardrobeRoute = () => <Wardrobe />;

const AddItemRoute = () => <AddItem />;

const FavoritesRoute = () => <Favorites />;

const lebelAddItem = (
  <Text style={{ fontFamily: "Cochin", textAlign: "center", fontSize: 16 }}>
    AddItem
  </Text>
);
const lebelWardrobe = (
  <Text style={{ fontFamily: "Cochin", textAlign: "center", fontSize: 16 }}>
    Wardrobe
  </Text>
);
const lebelFavorites = (
  <Text style={{ fontFamily: "Cochin", textAlign: "center", fontSize: 16 }}>
    Favorites
  </Text>
);

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "wardrobe", title: lebelWardrobe, icon: "hanger" },
    { key: "addItem", title: lebelAddItem, icon: "plus" },
    { key: "favorites", title: lebelFavorites, icon: "heart" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    wardrobe: WardrobeRoute,
    addItem: AddItemRoute,
    favorites: FavoritesRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
