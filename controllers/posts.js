import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';
import Checkoutpost from '../models/Checkoutpost.js';



const router = express.Router();

export const createcheckoutPost = async (req, res) => {
    const {cardname, selectedFile, tags, description} = req.body;
    const newCheckoutpost = new Checkoutpost({cardname, selectedFile, tags, description})

    try {
        await newCheckoutpost.save();

        res.status(201).json(newCheckoutpost);
    } catch (error) {
        res.status(409).json({cardname, selectedFile, tags, description});
    }
}

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const {title, selectedFile, tags, description} = req.body;
    const newPostMessage = new PostMessage({title, selectedFile, tags, description})

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({title, selectedFile, tags, description});
    }
}

/*export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, selectedFile, discription, address} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {title, discription, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}
*/

export default router;
