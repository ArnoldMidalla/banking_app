import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight, Focus, Plus } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomBar from "./components/bottomBar";
import CurrentCard from "./components/card";
import TopBar from "./components/topBar";

export default function BankingApp() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [activeScreen, setActiveScreen] = useState("dashboard");

  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-primary">
        <TopBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
        />

        {/* Content */}
        {activeScreen === "dashboard" && (
          <>
            <View className="py-16">
              <Text className=" font-dmsansMedium text-white/80 text-lg text-center">
                Balance
              </Text>
              <Text className="text-5xl tracking-tight font-dmsansBold text-white text-center">
                $365,500
              </Text>
            </View>
            <View className="bg-[#0a1a35] flex-row justify-between pt-4 pb-60 px-5 rounded-t-3xl items-center mt-4">
              <Text className="font-dmsansMedium text-white">
                🎉 You have saved $10 in the last 30 days
              </Text>
              <ChevronRight color={"white"} />
            </View>
            <BottomBar />
          </>
        )}
        {activeScreen === "cards" && <CurrentCard />}
        <TouchableOpacity
          className="flex-row justify-center z-50"
          style={{ position: "absolute", left: 0, bottom: 80, right: 0 }}
        >
          <View className="absolute px-4 py-3.5 rounded-full bg-blue-700 flex-row gap-4 items-center">
            {activeScreen === "dashboard" && (
              <Focus size={22} color={"white"} />
            )}
            <Text className="font-dmsansBold text-white">
              {activeScreen === "dashboard" && "New Payment"}
              {activeScreen === "cards" && "Add New Card"}
            </Text>
            <Plus size={22} color={"white"} />
          </View>
        </TouchableOpacity>
        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.6)", "white"]}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 200, // adjust how tall the fade is
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}
