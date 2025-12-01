import { Link } from "expo-router";
import { Bell } from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
// import {tabs}

export default function TopBar({
  activeTab,
  setActiveTab,
  activeScreen,
  setActiveScreen,
}: any) {
  
  const tabs = ["Dashboard", "Cards", "Analytics", "Records"];

  return (
    <View className="pt-16">
      {/* Top Bar */}
      <View className="flex-row justify-between items-center mb-4 px-6">
        {/* Top bar left */}
        <View className="flex-row items-center gap-3">
          {/* Image */}
          <View className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=47" }}
              className="w-full h-full object-cover"
            />
          </View>
          <View>
            <Text className="text-white/80 text-sm font-dmsansMedium leading-3">
              Good Morning,
            </Text>
            <Text className="text-white text-lg font-dmsansBold">
              Asal Design
            </Text>
          </View>
        </View>
        {/* Top bar right */}
        <Link href={"/notifications/page"} asChild>
          <TouchableOpacity className="w-10 h-10 bg-blue-700 rounded-full items-center justify-center">
            <Bell size={20} color="white" />
          </TouchableOpacity>
        </Link>
      </View>

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row gap-2 px-6"
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => {
              setActiveTab(tab);
              if (tab === "Dashboard") setActiveScreen("dashboard");
              if (tab === "Cards") setActiveScreen("cards");
            }}
            className={`px-6 py-2 rounded-full ${
              activeTab === tab ? "bg-white" : "bg-transparent"
            }`}
          >
            <Text
              className={`text-sm ${
                activeTab === tab
                  ? "font-dmsansBold"
                  : "font-dmsansMedium text-white/80"
              }`}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
