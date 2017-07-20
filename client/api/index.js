
export default {
    fetchTodos: () => {

        const listOfThings = [
            {
                buh: "yep"
            }
        ]

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(listOfThings);
            }, 2000)
        })
    },

    saveTodo: (todo) => {
        console.log("called with id", id)

        return [
            {
                id,
                buh: "yep"
            }
        ]
    }
}