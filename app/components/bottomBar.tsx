import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Funnel, Minus, Plus, Search } from "lucide-react-native";
import React, { useCallback, useRef } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { recentSends, transactions } from "../data/data";

export default function BottomBar() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={["60%", "80%"]}
      index={0} // sheet will show at 40%
      onChange={handleSheetChanges}
      backgroundStyle={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
    >
      <BottomSheetView
        style={styles.contentContainer}
        className="flex-1 flex-col px-6 min-h-[415px] pt-3"
      >
        <View className="flex-col gap-6">
          <View className="flex gap-3">
            <Text className="font-dmsansBold text-2xl tracking-tighter">
              Recent Sends
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="flex-row gap-4"
            >
              {recentSends.map((person) => (
                <View
                  key={person.id}
                  className="flex-col gap-1 items-center pr-4"
                >
                  <Image
                    source={{ uri: person.image }}
                    className="w-12 h-12 rounded-full"
                  />
                  <Text className="font-dmsansMedium">{person.name}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View className="flex gap-3">
            <Text className="font-dmsansBold text-2xl tracking-tighter">
              Current Activity
            </Text>
            <View className="flex-row gap-3 items-center mb-1">
              <View className="flex-row items-center border-[1.2px] border-black/50 rounded-full flex-1 px-4 py-[0.22rem] gap-2">
                <Search size={20} />
                <TextInput
                  placeholder="Search Transaction"
                  className="w-full"
                  style={{ fontFamily: "DMSans_400Regular" }}
                />
              </View>
              <Funnel size={20} />
            </View>
            <View className="gap-4">
              {transactions.map((trans) => (
                <View key={trans.id} className="flex-row items-center gap-3">
                  {trans.type === "incoming" ? (
                    <View className="bg-green-600 size-12 flex justify-center items-center rounded-3xl">
                      <Plus size={20} color={"white"} />
                    </View>
                  ) : (
                    <View className="bg-red-600 size-12 flex justify-center items-center rounded-3xl">
                      <Minus size={20} color={"white"} />
                    </View>
                  )}
                  <View className="flex-row flex-1 justify-between">
                    <View className="">
                      <Text className="font-dmsansBold tracking-tighter text-lg leading-[0.7.2rem]">
                        {trans.name}
                      </Text>
                      <Text className="font-dmsansMedium tracking-tight text-black/70">
                        {trans.date}
                      </Text>
                    </View>
                    <View>
                      {trans.type === "incoming" ? (
                        <View className="flex justify-center items-end">
                          <Text className="font-dmsansBold text-green-600 text-lg leading-[0.7.2rem]">
                            {trans.amount}
                          </Text>
                          <Text className="font-dmsansMedium text-black/70">
                            {trans.status}
                          </Text>
                        </View>
                      ) : (
                        <View className="flex items-end">
                          <Text className="font-dmsansBold text-red-600 text-lg leading-[0.7.2rem]">
                            {trans.amount}
                          </Text>
                          <Text className="font-dmsansMedium text-black/70">
                            {trans.status}
                          </Text>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // padding: 24,
    // alignItems: "center",
    // height: 457,
  },
});
