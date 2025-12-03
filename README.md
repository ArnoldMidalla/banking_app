# 💳 Dynamic Mobile Banking Application
A recreation of https://dribbble.com/shots/21063247-Montek-Finance-App

## Overview
A modern and intuitive mobile banking application built with **React Native** using the **Expo** framework, leveraging **TypeScript** for enhanced code quality and **NativeWind** for a sleek, responsive user interface. This project offers a streamlined experience for financial management directly from your mobile device.

## Features
-   **Dashboard:** View your current balance and recent savings at a glance.
-   **Recent Activity:** Track incoming and outgoing transactions with clear indicators.
-   **Recipient Management:** Easily send money to recent contacts.
-   **Card Management:** Access and manage all your bank cards, including detailed card information and security options.
-   **Interactive UI:** Seamless navigation and animated components powered by `react-native-gesture-handler` and `react-native-reanimated`.
-   **Notifications:** Stay informed with real-time updates and alerts.
-   **Custom Typography:** Integrated custom fonts (`DM Sans`) for a consistent and refined look.

## Usage

To explore the application, follow these steps to launch it on your device or emulator.

### Running the Application
1.  **Start the Expo Development Server**:
    ```bash
    npm start
    # OR
    expo start
    ```
2.  **Open on a Device/Emulator**:
    *   **Android**: Scan the QR code displayed in the terminal or browser with the Expo Go app, or press `a` to open on an Android emulator/device.
    *   **iOS**: Scan the QR code with your iPhone camera, or press `i` to open on an iOS simulator/device.
    *   **Web**: Press `w` to open in a web browser (functionality may vary as it's primarily a mobile app).

### Navigating the App
Upon launching, you will land on the **Dashboard** screen, which displays your current balance and a summary of recent savings.

*   **Dashboard View**:
    *   The `Balance` and `Savings` information is displayed prominently.
    *   A scrollable section showcases `Recent Sends`.
    *   Below that, the `Current Activity` section lists recent transactions. You can search and filter transactions here.
    *   Tap the central blue button to initiate a `New Payment`.

*   **Cards View**:
    *   Navigate to the `Cards` tab in the top horizontal scroll menu.
    *   This screen presents a list of all your registered bank cards.
    *   Tap on any card to view its `Card Details`.

*   **Card Details View**:
    *   From the `Cards` view, selecting a specific card takes you to its detailed information page.
    *   Here you can see the card type, number, holder name, and expiry date.
    *   Options to `Lock Card`, view `History Card`, and access `Setting Card` are provided.
    *   A bottom sheet reveals `Card Information` including the full card number, expiration date, and CVV.

*   **Notifications**:
    *   Tap the bell icon in the top right corner of the Dashboard to access your `Notifications` page.
    *   This page lists all recent alerts and updates.

> **Note**: For a complete overview, consider adding screenshots of the main application screens (Dashboard, Cards, Card Details, Notifications) to this section.

## Technologies Used

| Technology         | Version    | Purpose                                             | Link                                                  |
| :----------------- | :--------- | :-------------------------------------------------- | :---------------------------------------------------- |
| **React Native**   | `0.81.5`   | Core framework for building native mobile apps      | [reactnative.dev](https://reactnative.dev/)           |
| **Expo**           | `~54.0.25` | Tools and services for building React Native apps   | [expo.dev](https://expo.dev/)                         |
| **TypeScript**     | `~5.9.2`   | Statically typed superset of JavaScript             | [typescriptlang.org](https://www.typescriptlang.org/) |
| **NativeWind**     | `4.2.1`    | Tailwind CSS for React Native                       | [nativewind.dev](https://www.nativewind.dev/)         |
| **Expo Router**    | `~6.0.15`  | File-system based routing for Expo and React Native | [expo.fyi/router](https://expo.fyi/router-docs)       |
| **Gorhom Bottom Sheet** | `~5.2.7`   | Performant interactive bottom sheet component       | [github.com/gorhom/react-native-bottom-sheet](https://github.com/gorhom/react-native-bottom-sheet) |
| **Lucide React Native** | `~0.555.0` | Beautiful and customizable open-source icons        | [lucide.dev/icons/](https://lucide.dev/icons/)        |
| **DM Sans Fonts**  | `~0.4.2`   | Custom typography for a polished UI                 | [fonts.google.com/specimen/DM+Sans](https://fonts.google.com/specimen/DM+Sans) |
| **React Native Reanimated** | `~4.1.1`   | High performance animations and interactions        | [docs.swmansion.com/react-native-reanimated/](https://docs.swmansion.com/react-native-reanimated/) |
| **React Native Gesture Handler** | `~2.28.0`  | Declarative API for handling touches and gestures   | [docs.swmansion.com/react-native-gesture-handler/](https://docs.swmansion.com/react-native-gesture-handler/) |

## License
This project is currently private and does not specify an open-source license.

## Author Info

👋 Created by Arnold

*   **LinkedIn**: [Your LinkedIn Profile]
*   **Twitter**: [Your Twitter Handle]
*   **Portfolio**: [Your Portfolio Website]

---
[![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue?logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54.0.25-blue?logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.2.1-blue?logo=tailwind-css&logoColor=white)](https://www.nativewind.dev/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)