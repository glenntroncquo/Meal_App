import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile: React.FC<{navigation: any}> = ({navigation}) => {
    return(
        <View>
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
        </View>
    );
}

export default Profile;