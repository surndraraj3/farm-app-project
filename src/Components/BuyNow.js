import React, { useState } from 'react';
import { SafeAreaView, Dimensions, View, Text, Image, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native';

const BuyNowProducts = (props, { navigation }) => {
    const IMAGES = {
        image1: require('../../assets/prd1.jpg'),
        image2: require('../../assets/prd2.jpg'),
        image3: require('../../assets/prd3.jpg'),
        image4: require('../../assets/prd4.jpg'),
        image5: require('../../assets/prd5.jpg'),
        image6: require('../../assets/prd6.jpg'),

    };
    const productImageLst = [
        { id: 1, productName: 'Automatic Motor', productDesc: 'Automatic Motor On - Off', imgPath: IMAGES.image1, qty: 1 },
        { id: 2, productName: 'Automatic Motor', productDesc: 'Automatic Motor On - Off', imgPath: IMAGES.image2, qty: 1 },
        { id: 3, productName: 'Automatic Motor', productDesc: 'Automatic Motor On - Off', imgPath: IMAGES.image3, qty: 1 },
        { id: 4, productName: 'Automatic Motor', productDesc: 'Automatic Motor On - Off', imgPath: IMAGES.image4, qty: 1 },
        { id: 5, productName: 'Automatic Motor', productDesc: 'Automatic Motor On - Off', imgPath: IMAGES.image5, qty: 1 },
        { id: 6, productName: 'Automatic Motor', productDesc: 'Automatic Motor On - Off', imgPath: IMAGES.image6, qty: 1 }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <FlatList

                showsHorizontalScrollIndicator={false}
                data={productImageLst}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderWidth: 1, borderRadius: 10, margin: 20 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                source={item.imgPath}
                                // source={{ uri: item.imgPath }}
                                style={{
                                    width: 50,
                                    height: 120,
                                    borderWidth: 2,
                                    borderColor: '#0f458d',
                                    resizeMode: 'contain',
                                    margin: 8
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', paddingTop: 20 }}>
                            <Text style={styles.textStyle}>{item.productName}</Text>
                            <Text style={styles.textStyle}>{item.productDesc}</Text>
                            <Text style={styles.textStyle}>Quantity: {item.qty}</Text>
                            <TouchableOpacity style={styles.addToCartButton}>
                                <Text style={{ color: '#fff', textAlign: 'center', position: 'absolute', fontWeight: 'bold' }}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: { flex: 1, height: StatusBar.height, },
    textStyle: { color: '#0f458d', fontSize: 14, fontWeight: 'bold' },
    addToCartButton: {
        shadowColor: '#032a5e',
        shadowOpacity: 0.8,
        elevation: 6,
        backgroundColor: "#0f458d",
        shadowRadius: 15,
        shadowOffset: { width: 56, height: 13 },
        borderWidth: 0,
        borderRadius: 0,
        paddingTop: 40,
        width: '100%',
        // position: 'relative',
        height: '1%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }


})

export default BuyNowProducts;

