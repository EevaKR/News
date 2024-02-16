import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native'
import { Pressable } from 'react-native'

const URL = 'https://newsapi.org/v2/everything'
const APIKEY = 'c90c9a6d11cc480bb8d01bb738220928'

export default function News({ navigation }) {

    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const criteria = 'top-headlines?country=us&category=business';
        const address = URL + '/' + criteria + '&apikey=' + APIKEY;
        fetch(address)
            .then(res => res.json())
            .then(
                (result) => {
                    setError(null);
                    setIsLoaded(true);
                    setItems(result.articles);

                }, (error) => {
                    setError(error)
                    setIsLoaded(true)
                    setItems([]);
                }
            )
    }, [])

    if (error) {
        return (
            <View style={styles.container}>
                <Text>{error.message}</Text>
            </View>
        );
    }
    else if (!isLoaded) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {items.map(item => (
                        <Pressable key={item.title} onPress={() => navigation.navigate('Details', { news: item })}>
                            <View style={styles.news}>
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.imageWrapper}>
                                    <Image
                                        styles={styles.thumbnail}
                                        source={{
                                            uri: item.urlToImage,
                                        }}
                                    />
                                </View>
                            </View>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundClor: '#fff',
        paddingTop: 40,
    },
    news: {
        padding: 20,
        alignItems: 'stretch',
        borderTopWidth: 2,
        borderTopColor: '#333'
    },
    imageWrapper: {
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 20,
        margin: 0,
        padding: 0,
    },
    thumbnail: {
        width: 250,
        height: 250,
    },
});