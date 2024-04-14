import { Tabs } from "expo-router"
const TabsLayout = () =>{
    return(
        <Tabs>
            <Tabs.Screen name="home"/>
            <Tabs.Screen name="chat"/>
            <Tabs.Screen name="post"/>
            <Tabs.Screen name="profile"/>
        </Tabs>
    )
};

export default TabsLayout;
