import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack >
            <Stack.Screen name="index"/>
            <Stack.Screen name="home"/>
            <Stack.Screen name="register"/>
            <Stack.Screen name="login"/>
            <Stack.Screen name="(features)" options={{headerShown:false}}/>
        </Stack>
    )
};

export default RootLayout;