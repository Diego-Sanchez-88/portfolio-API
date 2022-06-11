var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var summaryLaboralSchema = new Schema({
    title: { type: String },
    subtitle: { type: String },
    year: { type: Number },
    description: { type: String}
});

var summaryAcademySchema = new Schema({
    title: { type: String },
    subtitle: { type: String },
    year: { type: Number },
    description: { type: String}
});

var summarySkillsSchema = new Schema({
    title: { type: String },
    valueNow: { type: String },
    classValue: { type: Number },
    percent: { type: Number}
});

var summaryCertificatesSchema = new Schema({
    title: { type: String },
    subTitle: { type: String },
    year: { type: Number },
    description: { type: String },
    link: { type: String}
});

var summaryDevelopmentSkillsSchema = new Schema({
    title: { type: String },
    valueNow: { type: String },
    classValue: { type: Number },
    percent: { type: Number}
});

module.exports = mongoose.model("summary_laboral", summaryLaboralSchema);
module.exports = mongoose.model("summary_academy", summaryAcademySchema);
module.exports = mongoose.model("summary_skills", summarySkillsSchema);
module.exports = mongoose.model("summary_certificates", summaryCertificatesSchema);
module.exports = mongoose.model("summary_development_skills", summaryDevelopmentSkillsSchema);

