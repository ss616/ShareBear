import React, { Component } from 'react';
import { View, Text } from 'react-native';

// External Library imports
import { Button, Container, Header, Item, Input, Content, Left, Body, Title, Right, List,
    ListItem, StyleProvider } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

// Local Imports
import getTheme from '../../../../native-base-theme/components';
import platform from '../../../../native-base-theme/variables/platform';


/**
 * The props for this Header =>
 * 4.onLeftButtonPress
 * 5.onRightButtonPress
 * 5.hasSearch
 * 6.searchPlaceholder
 */

export default class HomeScreenHeader extends Component {
    render() {
        return(
            <StyleProvider style={getTheme(platform)}>
                    <View>
                        <Header noShadow style={{ borderBottomWidth: 0, elevation: 0 }}>
                            <Left>
                                <Button transparent onPress={this.props.onLeftButtonPress}>
                                    <Icon name={this.props.leftIconName} size={25} color={'white'} />
                                </Button>
                            </Left>
                            <Body>
                                <Title>ShareBear</Title>
                            </Body>
                            <Right />
                        </Header>
                        <Header searchBar rounded>
                            <Item>
                                <Icon name="ios-search" size={20} color="#ff8821" style={{ paddingLeft: 10, marginRight: 10 }} />
                                <Input placeholder={this.props.searchPlaceholder} />
                            </Item>
                            <Button transparent>
                                <Text>Search</Text>
                            </Button>
                        </Header>
                    </View>
                </StyleProvider>
        );
    }
}