import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import colors from '../../styles/colors';

const Profile: React.FC<{navigation: any}> = ({navigation}) => {
    return(
        <View style={{flex:1, marginTop:16}}>
            <Text>
                Welcome to your profile!
            </Text>

            <TouchableOpacity
            onPress={() => navigation.replace('LoginNavigator')}
            >
                <Text>
                    Logout
                </Text>
            </TouchableOpacity>

            {/* <StatusBar style='light' backgroundColor={colors.normalPink} /> */}
        </View>
    );
}

export default Profile;