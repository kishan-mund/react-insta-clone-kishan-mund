const initialState = {
    comments: []
}


const reducer = (state = initialState, action) => {
    if (action.type === "ADD_COMMENT" &&
        action.payload.event.key === "Enter" && action.payload.event.target.value.trim() !== "") {
        console.log(action.payload.event.target.value)
        return {
            ...state,
            comments: state.comments.concat(action.payload.event.target.value)

        }

    }
    return state;
};

export default reducer;