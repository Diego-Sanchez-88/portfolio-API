var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var projectsSchema = new Schema({
    id: { type: Number },
    image: { type: String },
    year: { type: Number },
    title: { type: String },
    category: { type: String },
    srcLink: { type: String },
    srcCode: { type: String },
    descriptionOne: { type: String },
    descriptionTwo: { type: String },
    slug: {type: String}
});

module.exports = mongoose.model("projects", projectsSchema);