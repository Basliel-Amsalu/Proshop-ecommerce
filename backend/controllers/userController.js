import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmon: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or password");
  }
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
  res.send("get user by id");
});

export const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});
export const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});
