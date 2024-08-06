import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://chiragnebhani:1234567890@cluster0.stoh6v9.mongodb.net/blog-app');
    console.log("DB Connected");
}
