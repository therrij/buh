
export default {
    fetchTodos: (id) => {
        console.log("called with id", id)

        return [
            {
                id,
                buh: "yep"
            }
        ]
    }
}