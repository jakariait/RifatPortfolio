import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
		required: true,
		unique: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

// Create slug from title before saving
blogSchema.pre("save", function (next) {
	this.slug = this.title
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]/g, "-")
		.replace(/-+/g, "-");
	this.updatedAt = Date.now();
	next();
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
