import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const screen = Dimensions.get('screen');
const Awards = ({navigation}, props) => {
  const IMAGES = {
    image1: require('../../assets/award1.jpeg'),
    image2: require('../../assets/award2.jpeg'),
    image3: require('../../assets/award3.jpeg'),
    image4: require('../../assets/award4.jpeg'),
    image5: require('../../assets/award5.jpeg'),
    image6: require('../../assets/award6.jpeg'),
  };
  const awardsImageLst = [
    {
      id: 1,
      productName: 'MS Innovations',

      imgPath: IMAGES.image1,
    },
    {
      id: 2,
      productName: 'MS Innovations',

      imgPath: IMAGES.image2,
    },
    {
      id: 3,
      productName: 'MS Innovations',

      imgPath: IMAGES.image3,
    },
    {
      id: 4,
      productName: 'MS Innovations',

      imgPath: IMAGES.image4,
    },
    {
      id: 5,
      productName: 'MS Innovations',

      imgPath: IMAGES.image5,
    },
    {
      id: 6,
      productName: 'MS Innovations',

      imgPath: IMAGES.image6,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 20,
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
        }}>
        <Image
          style={{paddingBottom: 20, width: '80%', height: 100}}
          source={require('../../assets/new-logo.png')}
        />
      </View>
      <Text style={styles.sectionTitle}>List of All Awards</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={awardsImageLst}
        renderItem={({item}) => (
          <View style={styles.card}>
            {/* <View style={styles.header}>
              <Text style={styles.sectionTitle}>Awards</Text>
              <Text style={styles.followText}>Show More</Text>
            </View> */}
            <TouchableOpacity>
              {/* <Image
                style={styles.image}
                resizeMode="cover"
                source={require('../../assets/new-logo.png')}
              /> */}
              <Image
                style={{paddingBottom: 20, width: '90%', height: 100}}
                source={item.imgPath}
              />
            </TouchableOpacity>
            <View style={styles.footer}>
              <Text>
                <Text style={styles.followText}>{item.productName}</Text>
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, height: StatusBar.height},

  card: {
    // backgroundColor: '#fff',
    // width: screen.width * 0.8,
    shadowColor: 'black',
    shadowOffset: {width: screen.width * 0.8, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  //   card: {
  //     backgroundColor: "#fff",
  //     width: screen.width * 0.8,
  //   },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    height: screen.width * 0.8,
  },
  footer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  nameText: {
    fontWeight: 'bold',
    color: '#20232a',
  },
  followText: {
    fontWeight: 'bold',
    color: '#0095f6',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    // fontWeight: '600',
    color: '#45ad3a',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Awards;
