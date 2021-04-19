import * as React from 'react';
import {Text, ScrollView, View} from 'react-native';
// import {Table, Row, Rows} from 'react-native-table-component';
// import {Avatar} from 'react-native-elements'
import {CardItem, Button} from 'native-base';
import {Image} from 'react-native';
import {Icon} from 'native-base';
import {StyleSheet, TextInput} from 'react-native';
import {Card, Tooltip} from "react-native-elements";
import { Rating } from 'react-native-rating-element';
// import Icon from "react-native-vector-icons/RNIMigration";
// import Icon from 'react-native-vector-icons/FontAwesome';


// let rating = 0;

export default function ROOfficerReviewPage() {

    let image = "https://cdn.iconscout.com/icon/free/png-256/police-1659481-1410003.png"
    const [text, onChangeText] = React.useState("");
    const [rating, setRating] = React.useState(0);
    const [rating2, setRating2] = React.useState(0);
    const [rating3, setRating3] = React.useState(0);
    const [rating4, setRating4] = React.useState(0);


    return (
        <ScrollView>
                <Card>
                    <CardItem header>
                        <Image
                            source={{uri: image}}
                            style={{width: 150, height: 150}}
                        />
                        <Text style={styles.hText}>
                            Detective John Smith
                        </Text>
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
                    <CardItem>
                        <Tooltip popover={<Text>The overall rating is calculated as an average of
                            the 5 main rating parameters seen below</Text>}
                                 width={250} height={100}>
                            <Icon type={"Ionicons"} name={"help-circle-outline"} />
                        </Tooltip>
                        <Text style={styles.boText}>
                            Learn More
                        </Text>
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
                        rated={rating}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={50}// by default is false
                        icon="ios-star"
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                        onIconTap={(position) => setRating(position)}
                    />
                </CardItem>
                <CardItem>
                    <Text style={styles.h3Text}>
                        Average Professionalism Rating
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={4.3}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={25}// by default is false
                        icon="ios-star"
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                        // onIconTap={(position) => rating = position}
                    />
                </CardItem>
                <CardItem>
                    <Tooltip popover={<Text>This rating parameter accounts for how relevant the
                        attending officer's actions were in dealing with the case</Text>}
                             width={250} height={100}>
                        <Icon type={"Ionicons"} name={"help-circle-outline"} />
                    </Tooltip>
                    <Text style={styles.boText}>
                        Learn More
                    </Text>
                </CardItem>
                <Card.Divider/>
                <CardItem>
                    <Text style={styles.h2Text}>
                        Compassion
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={rating2}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={50}
                        icon="ios-star"
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                        onIconTap={(position) => setRating2(position)}
                    />
                </CardItem>
                <CardItem>
                    <Text style={styles.h3Text}>
                        Average Compassion Rating
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={4.4}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={25}// by default is false
                        icon="ios-star"
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                        // onIconTap={(position) => rating = position}
                    />
                </CardItem>
                <CardItem>
                    <Tooltip popover={<Text>This rating parameter accounts for how caring
                        the attending officer was to the relevant parties</Text>}
                             width={250} height={100}>
                        <Icon type={"Ionicons"} name={"help-circle-outline"} />
                    </Tooltip>
                    <Text style={styles.boText}>
                        Learn More
                    </Text>
                </CardItem>
                <Card.Divider/>
                <CardItem>
                    <Text style={styles.h2Text}>
                        Helpfulness
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={rating3}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={50}
                        icon="ios-star"
                        onIconTap={(position) => setRating3(position)}
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                    />
                </CardItem>
                <CardItem>
                    <Text style={styles.h3Text}>
                        Average Helpfulness Rating
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={4.3}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={25}// by default is false
                        icon="ios-star"
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                        // onIconTap={(position) => rating = position}
                    />
                </CardItem>
                <CardItem>
                    <Tooltip popover={<Text>This rating parameter accounts for how well the officer resolved the case</Text>}
                             width={250} height={100}>
                        <Icon type={"Ionicons"} name={"help-circle-outline"} />
                    </Tooltip>
                    <Text style={styles.boText}>
                        Learn More
                    </Text>
                </CardItem>
                <Card.Divider/>
                <CardItem>
                    <Text style={styles.h2Text}>
                        Efficiency of Service
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={rating4}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={50}
                        icon="ios-star"
                        onIconTap={(position) => setRating4(position)}
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                    />
                </CardItem>
                <CardItem>
                    <Text style={styles.h3Text}>
                        Average Efficiency of Service Rating
                    </Text>
                </CardItem>
                <CardItem>
                    <Rating
                        rated={3.5}
                        totalCount={5}
                        ratingColor="#f1c644"
                        ratingBackgroundColor="#d4d4d4"
                        size={25}// by default is false
                        icon="ios-star"
                        direction="row" // anyOf["row" (default), "row-reverse", "column", "column-reverse"]
                        // onIconTap={(position) => rating = position}
                    />
                </CardItem>
                <CardItem>
                    <Tooltip popover={<Text>This rating parameter accounts for how quickly the attending officer was in
                        resolving the case</Text>}
                             width={250} height={100}>
                        <Icon type={"Ionicons"} name={"help-circle-outline"} />
                    </Tooltip>
                    <Text style={styles.boText}>
                        Learn More
                    </Text>
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
                    <Button block dark style={{width: "100%"}} onPress={() => alert("Review Submitted!")}>
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
        fontWeight: 'bold',
        paddingRight: 15
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
    h3Text: {
        fontSize: 13,
        fontWeight: 'bold'
    }


});