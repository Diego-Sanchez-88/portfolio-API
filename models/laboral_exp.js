var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var laboralSchema = new Schema({
    image: { type: String },
    year: { type: Number },
    title: { type: String },
    subtitle: { type: String },
    smallTitle: { type: String },
    titleOne: { type: String },
    descriptionOne: { type: String },
    titleTwo: { type: String },
    descriptionTwo: {type: String},
    slug: {type: String},
});

module.exports = mongoose.model("laboral", laboralSchema);