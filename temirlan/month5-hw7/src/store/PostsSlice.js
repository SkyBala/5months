import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
const baseUrl = 'https://rickandmortyapi.com/api/character'
export const getPosts = createAsyncThunk(
    'get',
    async function(info,{dispatch,rejectWithValue}){
        const response = await fetch(baseUrl)
            .then((response) => response.json())
            .then(data => dispatch(postsInfo(data.info)))

}
)
const postsSlice = createSlice({
        name: 'postsSlice',
        initialState:{
                posts: []
        },
        reducers:{
                postsInfo:(state, action) => {
                        state.posts = action.payload
                }
        }
})
export const {postsInfo} = postsSlice.actions
export default postsSlice.reducer