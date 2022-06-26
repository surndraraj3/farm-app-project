import React from "react";
import LandingPage from '../LandingPage';
import LoginPage from '../Components/Login';
import SignupPage from '../Components/Signup';
import BuyNowProducts from '../Components/BuyNow';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={LandingPage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Login" component={LoginPage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Signup" component={SignupPage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="ProductsList" component={BuyNowProducts}
                    options={{
                        // headerShown:false,
                        title: "Products",
                        headerTitleStyle: {
                            textAlign: "center",
                            flex: 1,
                            color: "#0f458d"
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;