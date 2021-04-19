import * as React from 'react';
import {Text, ScrollView} from 'react-native';
// import {Table, Row, Rows} from 'react-native-table-component';
// import {Avatar} from 'react-native-elements'
import {CardItem, Body, List} from 'native-base';
import {Image} from 'react-native';
// import {Thumbnail, Left, Right } from 'native-base';
import {StyleSheet} from 'react-native';
import {Card, ListItem} from "react-native-elements";
// import { Rating } from 'react-native-rating-element';
// import Icon from "react-native-vector-icons/RNIMigration";


// let rating = 0;

export default function ROOfficerProfilePage() {

    let image = "https://cdn.iconscout.com/icon/free/png-256/police-1659481-1410003.png"
    // const [text, onChangeText] = React.useState("");


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
            </Card>

            <Card>
                <CardItem>
                   <List>
                       <ListItem>
                           <Text style={styles.boText}>
                               Officer Biography:
                           </Text>
                       </ListItem>
                       <ListItem>
                           <Text style={styles.desText}>
                               John Dean Smith was born on August 16, 1973 in Sacramento,
                               California and moved to the Boston with his parents Edgar Dean Smith (father),
                               and Jessy Dean Smith (mother) when he was six years old.
                               John has a younger brother Danny and a sister, Jenny.
                               John was raised in Los Angeles, California.
                               John graduated from University High School,
                               Los Angeles in 1991 and attended California State University Fullerton where he graduated in 1996.
                           </Text>
                       </ListItem>
                       <ListItem>
                           <Text style={styles.desText}>
                               John was an exemplary police officer and received numerous awards and commendations for his work ethic,
                               professionalism and compassion.
                               In addition to the many Department commendations,
                               Officer John Smith was the subject of myriad Citizen Commendations.
                               On July 10, 2004, Officer Smith was commended for
                               helping a stranded motorist by pushing her car two city- blocks to a
                               gas station where he waited till help arrived; On September 7, 2005,
                               Officer Smith was commended for his dedication and compassion in the search and location of a missing child;
                               On January 25, 2006, Officer Smith put an end to a crime spree by taking two narcotic suspects off the streets.
                           </Text>
                       </ListItem>
                   </List>
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
    desText: {
        fontSize: 15,
        fontWeight: '400'
    }
});