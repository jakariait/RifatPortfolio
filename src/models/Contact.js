import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: [true, "Full name is required"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			trim: true,
			lowercase: true,
			match: [
				/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
				"Please enter a valid email",
			],
		},
		message: {
			type: String,
			required: [true, "Message is required"],
			trim: true,
		},
		isServed: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const Contact =
	mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
