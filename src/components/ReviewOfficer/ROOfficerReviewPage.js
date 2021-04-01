import * as React from 'react';
import {Text, ScrollView, View} from 'react-native';
// import {Table, Row, Rows} from 'react-native-table-component';
// import {Avatar} from 'react-native-elements'
import {CardItem, Body, List, Button} from 'native-base';
import {Image} from 'react-native';
// import {Thumbnail, Left, Right } from 'native-base';
import {StyleSheet, TextInput} from 'react-native';
import {Card, ListItem} from "react-native-elements";
import { Rating } from 'react-native-rating-element';
// import Icon from "react-native-vector-icons/RNIMigration";

export default function ROOfficerReviewPage() {


    let image = "https://cdn.iconscout.com/icon/free/png-256/police-1659481-1410003.png"
    const [text, onChangeText] = React.useState("");

    return (
        <ScrollView>
                <Card>
                    <CardItem header button onPress={() => alert("This is Card Header")}>
                        <Image
                            source={{uri: image}}
                            style={{width: 150, height: 150}}
                        />
                        <Text style={styles.hText}>
                            Detective John Smith
                        </Text>
                    </CardItem>
                    <Card.Divider/>
                    <CardItem button onPress={() => alert("This is Card Body")}>
                        <Body>
                            <List>

                                <ListItem>
                                    <Text style={styles.boText}>
                                        Full Name: John D. Smith
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={styles.boText}>
                                        Badge Number: 5559812
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={styles.boText}>
                                        Precinct: District B-2
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={styles.boText}>
                                        Years of Service: 6
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={styles.boText}>
                                        Cases Solved: 19
                                    </Text>
                                </ListItem>
                                <ListItem>
                                    <Text style={styles.boText}>
                                        Specialization: Homicide
                                    </Text>
                                </ListItem>

                            </List>
                        </Body>
                    </CardItem>
                    <Card.Divider/>
                    <CardItem>
                        <Text style={styles.h2Text}>
                            Overall Rating
                        </Text>
                    </CardItem>
                    <CardItem >
                        <Rating
                            rated={4.1}
                            totalCount={5}
                            ratingColor="#f1c644"
                            ratingBackgroundColor="#d4d4d4"
                            size={50}
                            readonly // by default is false
                            icon="ios-star"
                            direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                        />
                    </CardItem>
                </Card>
            <Card>
                <CardItem>
                    <Text style={styles.h2Text}>
                        Professionalism
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={0}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={50}
                        readonly // by default is false
                        icon="ios-star"
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                    />
                </CardItem>
                <CardItem>
                    <Text style={styles.h2Text}>
                        Compassion
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={0}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={50}
                        readonly // by default is false
                        icon="ios-star"
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                    />
                </CardItem>
                <CardItem>
                    <Text style={styles.h2Text}>
                        Helpfulness
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={0}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={50}
                        readonly // by default is false
                        icon="ios-star"
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                    />
                </CardItem>
                <CardItem>
                    <Text style={styles.h2Text}>
                        Efficiency of Service
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={0}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={50}
                        readonly // by default is false
                        icon="ios-star"
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                    />
                </CardItem>
                <Card.Divider/>
                <CardItem>
                    <Text style={styles.h2Text}>
                        Have More to Say?
                    </Text>
                </CardItem>
                <CardItem>
                    <View>
                        <TextInput style={styles.input}
                                   onChangeText={onChangeText}
                                   value={text}
                                   multiline={true}
                                   placeholder='Write a review'/>
                    </View>
                </CardItem>
                <CardItem>
                    <Button block dark style={{width: "100%"}}>
                        <Text style={{color: 'white'}}>
                            Submit Review
                        </Text>
                    </Button>
                </CardItem>
            </Card>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    hText: {
        fontSize: 30,
        flex: 1,
        flexWrap: 'wrap',
        fontWeight: 'bold'
    },
    h2Text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    boText: {
        fontSize: 18,
        fontWeight: '300'
    },
    input: {
        width: "100%",
        borderRadius: 20,
        paddingVertical: 45,
        paddingHorizontal: 112,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 2,
        marginBottom: 5,
    },

});