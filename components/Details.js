import { StyleSheet, View, Text, Image, BackHandler } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Details({route}) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (route.params?.news) {
            setTitle(route.params.news.title);
            setImage(route.params.news.urlToImage);
            setDescription(route.params.news.description);
        }
    }, [route.params?.news])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            { image.length > 0 &&
                <View style={styles.imageWrapper}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: image,
                        }}
                    />
                </View>
            }
            <Text>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
    },
    news: {
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    imageWrapper: {
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 350,
        marginBottom: 10,
    },
});