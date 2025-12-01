import { useLocalSearchParams } from "expo-router";
import { Lock } from "lucide-react-native";
import React from "react";
import { StatusBar, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { cards } from "../data/data";

export default function CardDetailsPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 bg-secondary items-center px-6 pt-16">
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
            <View className="flex-row justify-between mt-3">
              <View>
                <Text className="text-white/80 font-dmsansMedium text-xs">
                  cards[parseInt(id)-1] Holder
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
        <View className="flex-row flex-1 justify-between w-full">
          <View>
            <View className="size-12 rounded-full bg-primary flex items-center justify-center ">
              <Lock color={"white"} />
            </View>
            <Text className="font-dmsansMedium">Lock card</Text>
          </View>
          <View>
            <View className="size-12 rounded-full bg-primary flex items-center justify-center ">
              <Lock color={"white"} />
            </View>
            <Text className="font-dmsansMedium">Lock card</Text>
          </View>
          <View>
            <View className="size-12 rounded-full bg-primary flex items-center justify-center ">
              <Lock color={"white"} />
            </View>
            <Text className="font-dmsansMedium">Lock card</Text>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
