import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

export const authUser = asyncHandler(async (req, res) => {
  //   const users = await User.find();
  //   res.status(200).json(products);
  res.send("auth user");
});

export const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

export const getUserProfile = asyncHandler(async (req, res) => {
  res.send("user profile");
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update profile");
});

export const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

export const getUserById = asyncHandler(async (req, res) => {
  res.send("get users");
});

export const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete users");
});



