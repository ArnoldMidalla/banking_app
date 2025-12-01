import { ChevronRight, Filter, Search, Settings } from "lucide-react-native";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { recentSends, transactions } from "../data/data";

export default function DashboardScreen() {
  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      {/* Balance Section */}
      <View className="items-center py-8">
        <Text className="text-white/80 text-base mb-2">Balance</Text>
        <Text className="text-white text-5xl font-bold">$365,500</Text>
      </View>

      {/* Savings Alert */}
      <TouchableOpacity className="bg-gray-900 rounded-2xl p-4 flex-row items-center justify-between mb-6">
        <View className="flex-row items-center gap-3">
          <Text className="text-2xl">🎉</Text>
          <Text className="text-white text-sm">
            You have saved $10 in the last 30 days
          </Text>
        </View>
        <ChevronRight size={20} color="white" />
      </TouchableOpacity>

      {/* Recent Send */}
      <View className="bg-white rounded-t-3xl p-6 -mx-6">
        <Text className="text-xl font-bold text-gray-900 mb-4">
          Recent Send
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {recentSends.map((person) => (
            <TouchableOpacity key={person.id} className="items-center mr-4">
              <View className="w-16 h-16 rounded-full overflow-hidden mb-2">
                <Image
                  source={{ uri: person.image }}
                  className="w-full h-full"
                />
              </View>
              <Text className="text-gray-700 text-xs">{person.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Current Activity */}
        <Text className="text-xl font-bold text-gray-900 mb-4">
          Current Activity
        </Text>

        {/* Search Bar */}
        <View className="flex-row items-center mb-4">
          <View className="flex-1 flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mr-3">
            <Search size={18} color="#9CA3AF" />
            <TextInput
              placeholder="Search Transaction"
              placeholderTextColor="#9CA3AF"
              className="flex-1 ml-2 text-gray-900"
            />
          </View>
          <TouchableOpacity className="bg-gray-100 p-3 rounded-xl">
            <Filter size={20} color="#374151" />
          </TouchableOpacity>
        </View>

        {/* Transactions */}
        {transactions.map((transaction) => (
          <View
            key={transaction.id}
            className="flex-row items-center mb-4 pb-4 border-b border-gray-100"
          >
            <View
              className={`w-12 h-12 rounded-full ${
                transaction.type === "incoming" ? "bg-green-100" : "bg-red-100"
              } items-center justify-center mr-3`}
            >
              <Text className="text-2xl">
                {transaction.type === "incoming" ? "+" : "-"}
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-gray-900 font-semibold">
                {transaction.name}
              </Text>
              <Text className="text-gray-500 text-xs">{transaction.date}</Text>
              <Text className="text-gray-400 text-xs">
                {transaction.status}
              </Text>
            </View>
            <Text
              className={`font-bold ${
                transaction.type === "incoming"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {transaction.amount}
            </Text>
          </View>
        ))}

        {/* New Payment Button */}
        <TouchableOpacity className="bg-blue-600 rounded-full py-4 flex-row items-center justify-center gap-2 mt-4">
          <Settings size={20} color="white" />
          <Text className="text-white font-semibold">New Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
