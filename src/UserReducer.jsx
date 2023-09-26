import { createSlice } from "@reduxjs/toolkit";
import { blogList } from "./Data";

const blogSlice = createSlice({
    name : "blogs",
    initialState: blogList,
    reducers :{
        addBlog: (state, action) => {
            state.push(action.payload)
        },
        updateBlog: (state, action) => {
            const {id,name, category, content} = action.payload;
            const bb = state.find(blog => blog.id == id);
            if(bb){
                bb.name = name;
                bb.category = category;
                bb.content = content;
            }
        },
        deleteBlog: (state, action) => {
            const {id} = action.payload;
            const bb = state.find(blog => blog.id == id);
            if(bb){
                return state.filter(f => f.id !== id);
            }
        }
    }
})

export const {addBlog, updateBlog, deleteBlog} = blogSlice.actions;
export default blogSlice.reducer;