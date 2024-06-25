import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { useState } from "react";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs
} from "../components";

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />),
          headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />),
        }} />
      <ScrollView>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
