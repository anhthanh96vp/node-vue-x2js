// const user = {
//     state: {
//         tasks: [],
//         newTask: ''
//     },
//     getters: {
//       newTask: state => state.newTask,
//       tasks: state =>
//         state.tasks.filter(task => {
//           return !task.completed
//         }),
//       completedTask: state =>
//         state.tasks.filter(task => {
//           return task.completed
//         })
//     },
//     actions: {
//       getTask({ commit }, task) {
//         commit("getTask", task)
//       },
//       addTask({ commit }) {
//         commit("addTask")
//       },
//       editTask({ commit }, task) {
//         commit("editTask", task)
//       },
//       removeTask({ commit }, task) {
//         commit("removeTask", task)
//       },
//       completeTask({ commit }, task) {
//         commit("completeTask", task)
//       },
//       clearTask({ commit }) {
//         commit("clearTask")
//       }
//     },
//     mutations: {
//       getTask(state, task) {
//         state.newTask = task
//       },
//       addTask(state) {
//         state.tasks.push({
//           body: state.newTask,
//           completed: false
//         })
//       },
//       editTask(state, task) {
//         var tasks = state.tasks
//         tasks.splice(tasks.indexOf(task), 1)
//         state.tasks = tasks
//         state.newTask = task.body
//       },
//       removeTask(state, task) {
//         state.tasks.splice(state.tasks.indexOf(task), 1)
//       },
//       completeTask(state, task) {
//         task.completed = !task.completed
//       },
//       clearTask(state) {
//         state.newTask = ""
//       }
//     }
//   }
//   export default user
  