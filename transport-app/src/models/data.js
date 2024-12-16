import mongoose, { Schema, models } from "mongoose";

const dataSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        car_name: {
            type: String,
            required: true,
        },
        day: {
            type: String,
            required: true,
        },
        Paid_amount: {
            type: String,
            required: true,
        },
        Time: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Data = models.data || mongoose.model("Data", userSchema);
export default Data;