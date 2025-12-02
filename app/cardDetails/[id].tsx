import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ArrowLeft,
  CalendarDays,
  CreditCard,
  File,
  Lock,
  Settings,
} from "lucide-react-native";
import React, { useCallback, useRef } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { cards } from "../data/data";

export default function CardDetailsPage() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 flex gap-8 bg-secondary items-center px-6 pt-16">
        {/*  */}
        <View className="w-full flex-row max-h-fit flex justify-start">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex-row max-w-fit gap-3"
          >
            <ArrowLeft size={20} />
            <Text className="font-dmsansBold">Card Details</Text>
          </TouchableOpacity>
        </View>
        {/* Card design */}
        <View
          className={`rounded-3xl p-6 ${
            cards[parseInt(id) - 1].color
          } justify-between relative w-full`}
          style={{ height: 200 }}
        >
          {/* TEXT OVERLAY */}
          <View className="absolute top-6 left-6 right-6 flex justify-between h-full">
            {/* Card Type */}
            <Text className="text-white font-dmsansBold text-base">
              {cards[parseInt(id) - 1].type}
            </Text>

            {/* Card Number */}
            <Text
              className="text-white font-dmsansBold"
              style={{ fontSize: 22 }}
            >
              {cards[parseInt(id) - 1].number}
            </Text>

            {/* Bottom Row */}
            <View className="flex-row gap-6 mt-3">
              <View>
                <Text className="text-white/80 font-dmsansMedium text-xs">
                  Card Holder
                </Text>
                <Text className="text-white font-dmsansBold text-sm">
                  {cards[parseInt(id) - 1].holder}
                </Text>
              </View>

              <View>
                <Text className="text-white/80 font-dmsansMedium text-xs">
                  Expiry
                </Text>
                <Text className="text-white font-dmsansBold text-sm">
                  {cards[parseInt(id) - 1].expires}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Lock card */}
        <View className="flex-row flex-1 justify-center gap-16 w-full">
          <View className="flex items-center gap-1">
            <View className="size-12 rounded-full bg-primary flex items-center justify-center ">
              <Lock color={"white"} />
            </View>
            <Text className="font-dmsansBold tracking-tight text-sm">
              Lock Card
            </Text>
          </View>
          <View className="flex items-center gap-1">
            <View className="size-12 rounded-full bg-primary flex items-center justify-center ">
              <File color={"white"} />
            </View>
            <Text className="font-dmsansBold tracking-tight text-sm">
              History Card
            </Text>
          </View>
          <View className="flex items-center gap-1">
            <View className="size-12 rounded-full bg-primary flex items-center justify-center ">
              <Settings color={"white"} />
            </View>
            <Text className="font-dmsansBold tracking-tight text-sm">
              Setting Card
            </Text>
          </View>
        </View>
        {/*  */}
        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={["48%"]}
          index={0} // sheet will show at 40%
          onChange={handleSheetChanges}
          backgroundStyle={{
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
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
                Card Information
              </Text>
              <View className="flex gap-3">
                <View className="flex-row justify-between">
                  <View className="flex-row items-center gap-2">
                    <CreditCard
                      size={26}
                      fill={"#2a63e2"}
                      color={"white"}
                      strokeWidth={1.9}
                    />
                    <Text className="font-dmsansBold  tracking-tight">
                      Card Number
                    </Text>
                  </View>
                  <Text className="font-dmsansBold text-lg text-black/60">
                    {cards[parseInt(id) - 1].number}
                  </Text>
                </View>
                <View className="flex-row justify-between">
                  <View className="flex-row items-center gap-2">
                    <CalendarDays
                      size={26}
                      fill={"#2a63e2"}
                      color={"white"}
                      strokeWidth={1.9}
                    />
                    <Text className="font-dmsansBold  tracking-tight">
                      Expiration Date
                    </Text>
                  </View>
                  <Text className="font-dmsansBold text-lg text-black/60">
                    {cards[parseInt(id) - 1].expires}
                  </Text>
                </View>
                <View className="flex-row justify-between">
                  <View className="flex-row items-center gap-2">
                    <Lock
                      size={26}
                      fill={"#2a63e2"}
                      color={"white"}
                      strokeWidth={1.9}
                    />
                    <Text className="font-dmsansBold  tracking-tight">
                      Information Cvv
                    </Text>
                  </View>
                  <Text className="font-dmsansBold text-lg text-black/60">
                    334
                  </Text>
                </View>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // padding: 24,
    // alignItems: "center",
    height: 700,
  },
});
