import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import PushNotification from "react-native-push-notification"

export default function Splash({ navigation }) {
	useEffect(() => {
		createChannels()
		setTimeout(() => {
			navigation.replace("My Tasks")
		}, 2000)
	}, [])

	const createChannels = () => {
		PushNotification.createChannel({
			channelId: "task-channel",
			channelName: "Task channel",
		})
	}

	return (
		<View style={styles.body}>
			<Image style={styles.logo} source={require("../../../assets/logo.jpg")} />
			<Text style={styles.text}>Favour To-Do List</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#0080ff",
	},
	logo: {
		width: 100,
		height: 100,
		margin: 20,
	},
	text: {
		fontSize: 40,
		color: "#ffffff",
	},
})
