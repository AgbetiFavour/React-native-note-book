import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useEffect, useState } from "react"
import { Alert, Button, StyleSheet, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import CustomButton from "../CustomButton"
import { setTasks } from "../Redux/Actions"

export default function Task({ navigation }) {
	const { tasks, taskID } = useSelector(state => state.taskReducer)
	const dispatch = useDispatch()

	const [title, setTitle] = useState("")
	const [desc, setDesc] = useState("")

	useEffect(() => {
		getTasks()
	}, [])

	const getTasks = () => {
		const Task = tasks.find(task => task.ID === taskID)
		if (Task) {
			setTitle(Task.Title)
			setDesc(Task.Desc)
		}
	}

	const setTask = () => {
		if (title.length == 0) {
			Alert.alert("warning!", "Please write your task title.")
		} else {
			try {
				var Task = {
					ID: taskID,
					Title: title,
					Desc: desc,
				}
				const index = tasks.findIndex(task => task.ID === taskID)
				let newTasks = []
				if (index > -1) {
					newTasks = [...tasks]
					newTasks[index] = Task
				} else {
					newTasks = [...tasks, Task]
				}
				AsyncStorage.setItem("Tasks", JSON.stringify(newTasks))
					.then(() => {
						dispatch(setTasks(newTasks))
						Alert.alert("success!", "Task saved successfully.")
						navigation.goBack()
					})
					.catch(err => console.log(err))
			} catch (error) {
				console.log(error)
			}
		}
	}
	return (
		<View style={styles.body}>
			<TextInput
				style={styles.input}
				placeholder="Title"
				value={title}
				onChangeText={value => setTitle(value)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Description"
				multiline
				value={desc}
				onChangeText={value => setDesc(value)}
			/>
			{/* <Button
				title="save task"
				color="#1eb900"
				style={{ alignSelf: 'stretch' }}
				onPress={setTask}
			/> */}
			<CustomButton
				title="save task"
				color="#1eb900"
				onPress={setTask}
				style={{ width: "100%" }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		alignItems: "center",
		padding: 10,
	},
	input: {
		width: "100%",
		borderWidth: 1,
		borderColor: "#555555",
		borderRadius: 10,
		backgroundColor: "#ffffff",
		textAlign: "left",
		fontSize: 20,
		margin: 10,
		paddingHorizontal: 10,
	},
})
