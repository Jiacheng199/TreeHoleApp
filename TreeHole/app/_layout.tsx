import { Stack } from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index"/>
            <Stack.Screen name="home"/>
            <Stack.Screen name="register"/>
            <Stack.Screen name="login"/>
        </Stack>
    )
};

export default RootLayout;