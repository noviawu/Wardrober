import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Wardrobe from "./Wardrobe.js";
import AddItem from "./AddItem.js";
import Favorites from "./Favorites.js";

const WardrobeRoute = () => <Wardrobe />;

const AddItemRoute = () => <AddItem />;

const FavoritesRoute = () => <Favorites />;

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "addItem", title: "Add Item", icon: "plus" },
    { key: "wardrobe", title: "Wardrobe", icon: "hanger" },
    { key: "favorites", title: "Favorites", icon: "heart" },
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
