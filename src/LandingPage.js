/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import { SliderBox } from "react-native-image-slider-box";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const { width, height } = Dimensions.get('screen');
const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

// Added Animation - 22-June
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();

  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// End Animation
const LandingPage = ({ navigation }, props) => {

  //msimg3
  const imagesSlide = [
    require('../assets/banner.jpg'),
    require('../assets/banner1.jpg'),
    require('../assets/banner2.jpg'),
    require('../assets/banner3.jpg'),
    require('../assets/banner4.jpg'),
    require('../assets/banner5.jpg'),
    require('../assets/banner.jpg'),
  ]

  // const rotation = useSharedValue(0);

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ rotateZ: `${rotation.value}deg` }],
  //   };
  // });

  // const doesnotNeedImgArr = [require('../assets/no-electric.jpg'), require('../assets/no-electric.jpg'), require('../assets/no-electric.jpg'),]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ height: height * 4 }}>

        <View style={{ alignItems: 'center', paddingTop: 20, justifyContent: 'center', backgroundColor: '#f8f9fa' }}>

          <FadeInView>
            <Image
              style={{ paddingBottom: 20 }}
              source={require('../assets/logo.png')}
            />
          </FadeInView>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={styles.greenSmallButton} onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#fff', textAlign: 'center', position: 'absolute', fontWeight: 'bold' }}>LOGIN </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.greenSmallButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={{ color: '#fff', textAlign: 'center', position: 'absolute', fontWeight: 'bold' }}>SIGN UP</Text>
          </TouchableOpacity>

        </View>
        <View>
          <SliderBox
            // ImageComponent={FastImage}
            images={imagesSlide}
            sliderBoxHeight={200}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)"
            }}
            ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
            imageLoadingColor="#2196F3"
          />
        </View>
        <View style={{ paddingTop: 20, marginLeft: 10, marginRight: 10, borderRadius: 10 }}>
          <ImageBackground source={require('../assets/msbg.jpg')} style={{ width: '100%', height: width - 80 }} >
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', }}>

              <Section>
                <Text style={{ color: '#16409a', fontSize: 14, fontWeight: 'bold' }}>AUTOMATIC MOTOR</Text>
              </Section>
              <Section>
                <Text style={{ color: '#45ad3a', fontSize: 18, fontWeight: 'bold' }}>ON</Text>
                <Text style={{ color: '#16409a', fontSize: 18, fontWeight: 'bold' }}> - </Text>
                <Text style={{ color: '#ff0000', fontSize: 18, fontWeight: 'bold' }}>OFF</Text>
              </Section>
              <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>(With Timer)</Text>
              <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', paddingBottom: 30 }}>USING AIR AND WATER ONLY</Text>

              <TouchableOpacity style={styles.buyNowButton} onPress={() => navigation.navigate('ProductsList')}>
                <Text style={{ color: '#fff', textAlign: 'center', position: 'absolute', fontWeight: 'bold' }}>BUY NOW</Text>
              </TouchableOpacity>
            </View>

          </ImageBackground>

        </View>
        <TouchableOpacity style={{
          shadowColor: '#032a5e',
          shadowOpacity: 0.8,
          elevation: 6,
          backgroundColor: "#0f458d",
          shadowRadius: 15,
          shadowOffset: { width: 56, height: 13 },
          width: '90%',
          // position: 'relative',
          //    height: '5%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10, padding: 20, margin: 20

        }}>
          <Text style={{ color: '#fff', textAlign: 'center', position: 'absolute', fontWeight: 'bold' }}>Does Not Need</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20 }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/no-electric.jpg')}
          />
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/no-mobile.jpg')}
          />
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/no-manpower.jpg')}
          />
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/no-sensor.jpg')}
          />
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/no-solar.jpg')}
          />
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/no-remote.jpg')}
          />
        </View>
        <FadeInView>
          <TouchableOpacity style={{
            shadowColor: '#45ad3a',
            shadowOpacity: 0.8,
            elevation: 6,
            backgroundColor: "#45ad3a",
            shadowRadius: 15,
            shadowOffset: { width: 56, height: 13 },
            width: '90%',
            // position: 'relative',
            //    height: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10, padding: 20, margin: 20

          }}>
            <Text style={{ color: '#fff', textAlign: 'center', position: 'absolute', fontWeight: 'bold' }}>Save Nature</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20 }}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/savecrop.png')}
            />
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/savefarmer.png')}
            />
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/savemoney.png')}
            />
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/savenature.png')}
            />
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/savepower.png')}
            />
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/savetime.png')}
            />
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/savewater.png')}
            />
          </View>
        </FadeInView>

        <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}>
          {/* #0586cd */}
          <Section>
            <Text style={styles.videoText}>Our </Text>
            <Text style={styles.videoTextGrey}>Product </Text>
            <Text style={styles.videoText}>Videos </Text>
          </Section>
        </View>
        <View style={{ paddingBottom: 120 }}>
          <View style={{ position: 'relative', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: '80%', height: 100 }}
              source={require('../assets/video1.jpg')}
            />
            <Text style={styles.videoText}>Agriculture Program</Text>
          </View>
          <View style={{ position: 'relative', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: '80%', height: 100 }}
              source={require('../assets/video2.jpg')}
            />
            <Text style={styles.videoText}>Agriculture Program</Text>
          </View>
          <View style={{ position: 'relative', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: '80%', height: 100 }}
              source={require('../assets/video3.jpg')}
            />
            <Text style={styles.videoText}>Agriculture Program</Text>
          </View>
          <View style={{ position: 'relative', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: '80%', height: 100 }}
              source={require('../assets/video4.jpg')}
            />
            <Text style={styles.videoText}>Agriculture Program</Text>
          </View>
          <View style={{ position: 'relative', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: '80%', height: 100 }}
              source={require('../assets/video5.jpg')}
            />
            <Text style={styles.videoText}>Agriculture Program</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    // marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    // fontWeight: '600',
  },
  sectionDescription: {
    // marginTop: 8,
    // fontSize: 18,
    // fontWeight: 12,
  },
  highlight: {
    // fontWeight: '700',
    fontSize: 14,
    color: '#16409a'
  },
  container: {
    flex: 1
  },
  videoText: {
    color: '#0586cd',
    fontSize: 24,
    fontWeight: 'bold'
  },
  videoTextGrey: {
    color: '#5a5a5c',
    fontSize: 24
  },
  greenSmallButton: {
    shadowColor: '#45ad3a',
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "#45ad3a",
    shadowRadius: 15,
    shadowOffset: { width: 56, height: 13 },
    width: '40%',
    // position: 'relative',
    //    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, padding: 20, margin: 20
  },
  buyNowButton: {
    shadowColor: '#032a5e',
    shadowOpacity: 0.8,
    elevation: 6,
    backgroundColor: "#0f458d",
    shadowRadius: 15,
    shadowOffset: { width: 56, height: 13 },
    borderWidth: 0,
    borderRadius: 0,
    paddingTop: 50,
    width: '50%',
    // position: 'relative',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }

});

export default LandingPage;
