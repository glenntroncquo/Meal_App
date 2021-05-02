import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import { textStyles } from '../../styles/generics';

export const InstructionComponent: React.FC<{instruction: string, index:number}> = ({instruction, index}) => {
    return(
        <ScrollView
        >
            <Text style={[textStyles.semi, {marginBottom:16}]}>
                {index}. {instruction}
            </Text>
        </ScrollView>
    );

}