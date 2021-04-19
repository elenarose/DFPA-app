import * as React from 'react';
import {Text, ScrollView, View} from 'react-native';
// import {Table, Row, Rows} from 'react-native-table-component';
import {Card, ListItem} from 'react-native-elements'
import {Header, Item, Input, Icon, Button, Right} from 'native-base';
// import { Image } from 'react-native';
// import {Content, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base';
import {StyleSheet} from 'react-native';

const users = [
    {
        name: 'Det. John Smith',
        dist: '0.1 mi',
        rating: '4.1'
    },
    {
        name: 'Lt. Matilda Sawyers',
        dist: '0.1 mi',
        rating: '4.3'
    },
    {
        name: 'Sgt. Tina Peters',
        dist: '0.6 mi',
        rating: '4.5'
    },
    {
        name: 'Sgt. Hugo Almeida',
        dist: '0.8 mi',
        rating: '4.7'
    },
    {
        name: 'Sgt. Stefani Madrazo',
        dist: '5 mi',
        rating: '4.4'
    },
    {
        name: 'Maj. Carl Withers',
        dist: '5 mi',
        rating: '4.5'
    },
    {
        name: 'Lt. John Kelly',
        dist: '5 mi',
        rating: '4.1'
    },

]


export default function ROLandingPage({navigation}) {

    return (
        <ScrollView style={{flex: 1}}>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search"/>
                    <Input placeholder="Search for Officer or Scan I.D."/>
                    <Icon name="ios-barcode" onPress={() => navigation.navigate('Scan Officer I.D.')}/>
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>

            <View>
                <Item>
                    <Text style={styles.text_head}>
                        Officers Near You
                    </Text>
                    <Right>
                        <Button dark transparent>
                            <Text>
                                Refresh List
                            </Text>
                            <Icon name='ios-refresh'/>
                        </Button>
                    </Right>
                </Item>

            </View>


            {
                users.map((u, i) => <Card key={i}>
                    <ListItem>
                        <Icon name='ios-person-circle' fontSize=''/>
                        <Text style={styles.text}>
                            {u.name}
                        </Text>
                        <Right style={{alignItems: "center"}}>
                            <Icon name={'ios-people'} onPress={() => navigation.navigate('Officer Profile')}/>
                            <Text style={styles.miniText}>View Profile</Text>
                        </Right>
                    </ListItem>
                    <Card.Divider/>
                    <Text style={styles.noteText}>
                        Overall Officer Rating: {u.rating}
                    </Text>
                    <Card.Divider/>
                    <Text style={styles.noteText}>
                        Distance from you: {u.dist}
                    </Text>
                    <Card.Divider/>
                    <Button dark block onPress={() => navigation.navigate('Officer Review')}>
                        <Text style={styles.bText}>
                            Review Officer
                        </Text>
                    </Button>
                </Card>)
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    head: {height: 70, backgroundColor: '#7A39C6'},
    text_head: {
        margin: 16, fontWeight: 'bold', fontSize: 25,
        fontFamily: 'Arial', color: '#000'
    },
    text: {margin: 6, fontWeight: 'bold', fontSize: 20},
    body: {height: 50},
    iconRefresh: {fontWeight: 'bold'},
    noteText: {margin: 6, fontWeight: '300', fontSize: 18},
    bText: {color: 'white', textAlign: 'center', fontSize: 18},
    miniText: {fontSize: 11, fontWeight: '200'}
});