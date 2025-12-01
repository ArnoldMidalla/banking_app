import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import React, { useCallback, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { cards } from "../data/data";

export default function CurrentCard() {
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
      // snapPoints={["80%"]}
      index={0} // sheet will show at 40%
      onChange={handleSheetChanges}
      backgroundStyle={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
      //disable gestures (fixed) so as not to move
      // enableHandlePanningGesture={false}
      // enableContentPanningGesture={false}
      // enablePanDownToClose={false}
    >
      <BottomSheetView
        style={styles.contentContainer}
        className="flex-1 flex-col px-6 pt-3"
      >
        <View className="flex gap-4">
          <Text className="font-dmsansBold text-2xl tracking-tighter">
            Current Card
          </Text>
          <View className="flex gap-4">
            {cards.map((card) => (
              <Link
                href={`/cardDetails/${card.id}` as any}
                asChild
                key={card.id}
              >
                <TouchableOpacity
                  className={`rounded-3xl p-6 ${card.color} justify-between relative`}
                  style={{ height: 200 }}
                >
                  {/* TEXT OVERLAY */}
                  <View className="absolute top-6 left-6 right-6 flex justify-between h-full">
                    {/* Card Type */}
                    <Text className="text-white font-dmsansBold text-base">
                      {card.type}
                    </Text>

                    {/* Card Number */}
                    <Text
                      className="text-white font-dmsansBold"
                      style={{ fontSize: 22 }}
                    >
                      {card.number}
                    </Text>

                    {/* Bottom Row */}
                    <View className="flex-row justify-between mt-3">
                      <View>
                        <Text className="text-white/80 font-dmsansMedium text-xs">
                          Card Holder
                        </Text>
                        <Text className="text-white font-dmsansBold text-sm">
                          {card.holder}
                        </Text>
                      </View>

                      <View>
                        <Text className="text-white/80 font-dmsansMedium text-xs">
                          Expiry
                        </Text>
                        <Text className="text-white font-dmsansBold text-sm">
                          {card.expires}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </Link>
            ))}
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
    height: 630,
  },
});
