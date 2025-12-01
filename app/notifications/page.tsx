import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { notifications } from "../data/data";

export default function Notifications() {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <Text className="text-white font-dmsansBold text-center text-3xl pt-12">
        Notifications
      </Text>
      <Text className="text-white font-dmsansMedium text-center">
        Check out your notifications from the previous month
      </Text>
      <View className="px-6 py-4 flex flex-col gap-3">
        {notifications.map((not) => (
          <View key={not.id} className="bg-white rounded-lg px-4 py-2">
            <Text className="font-dmsansBold text-lg  tracking-tight">{not.title}</Text>
            <Text className="text-sm font-dmsansMedium /80 tracking-tight">
              {not.body}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
