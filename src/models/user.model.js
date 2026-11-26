import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    username : {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        index: true,
        trim: true
    },
    email : {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        index: true,
        trim: true
    },
    fullName : {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    
    avatar: {
        type: String, //cloudinary url
        required: true

    },
    coverImage: {
        type: String //cloudinary url

    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password : {
        type: String,
        required: [true, "password is required"]

    },
    refreshToken: {
        type: string
    }

}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema)