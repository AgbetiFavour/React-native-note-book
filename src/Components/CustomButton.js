import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

export default function CustomButton(props) {
	return (
		<Pressable
			onPress={props.onPress}
			hitSlop={{ top: 10, button: 10, right: 10, left: 10 }}
			style={({ pressed }) => [
				{ backgroundColor: pressed ? "#dddddd" : "#00ff06" },
				styles.button,
			]}
		>
            <Text style={styles.text}>{props.title }</Text>
		</Pressable>
	)
}


const styles = StyleSheet.create({
	text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center'
	},
	button: {
		width: '100%',
		height: 50,
		alignItems: "center",
		
    },

})

