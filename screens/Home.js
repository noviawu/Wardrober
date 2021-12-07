/**
 * This will be the home page which is essentially a router for the other pages, the real home page is the wardrobe page
 * Author: Novia Wu
 * Date: 12/2/2021
 */

import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Wardrobe from "./Wardrobe.js";
import AddItem from "./AddItem.js";
import Favorites from "./Favorites.js";
import About from "./About.js";

const WardrobeRoute = () => <Wardrobe />;

const AddItemRoute = () => <AddItem />;

const FavoritesRoute = () => <Favorites />;

const AboutRoute = () => <About />;

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
const lebelAbout = (
  <Text style={{ fontFamily: "Cochin", textAlign: "center", fontSize: 16 }}>
    About
  </Text>
);

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "wardrobe", title: lebelWardrobe, icon: "hanger" },
    // { key: "addItem", title: lebelAddItem, icon: "plus" },
    { key: "favorites", title: lebelFavorites, icon: "heart" },
    { key: "about", title: lebelAbout, icon: "cog" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    wardrobe: WardrobeRoute,
    // addItem: AddItemRoute,
    favorites: FavoritesRoute,
    about: AboutRoute,
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
