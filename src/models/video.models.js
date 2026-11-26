import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String, //cloudineary url
        required: true
    },
    thumbnail: {
        type: string, //cloudineary url
        required: true
    },
    description: {
        type: string,
        required: true
    },
    duration: {
        type: Number, 
        required: true
    },
    view: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }


},{timestamps: true})

export const video = new mongoose.model("Video", videoSchema)