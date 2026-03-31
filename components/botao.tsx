import {Pressable, Text} from "react-native"

export default ({title, onPress})=>{
    return (
        <Pressable
        onPress={onPress}
        style={{
            backgroundColor: '#73b',
            paddingVertical: 10,
            paddingHorizontal:30,
            borderRadius:18;
        }}

        
        >
             <Text>{title}</Text>
        </Pressable>
       
    )

}
