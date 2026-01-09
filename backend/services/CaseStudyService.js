const CaseStudyModel = require("../models/CaseStudyModel");
const fs = require("fs");
const path = require("path");

const createCaseStudy = async (data) => {
  const newCaseStudy = new CaseStudyModel(data);
  return await newCaseStudy.save();
};

const getAllCaseStudies = async () => {
  return CaseStudyModel.find().select("-brandTitle -brandWebsite -founder -businessStarted -description");
};

const getCaseStudyBySlug = async (slug) => {
  return CaseStudyModel.findOne({ slug });
};

const updateCaseStudyBySlug = async (slug, data, newImage) => {
    const caseStudy = await CaseStudyModel.findOne({ slug });
    if (!caseStudy) {
        throw new Error("Case study not found");
    }

    // If there's a new image, delete the old one
    if (newImage && caseStudy.brandLogo) {
        const oldImagePath = path.join(__dirname, '..', 'uploads', caseStudy.brandLogo);
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
        }
        caseStudy.brandLogo = newImage;
    }
    
    // Update fields
    Object.assign(caseStudy, data);

    return await caseStudy.save();
};


const deleteCaseStudyBySlug = async (slug) => {
    const caseStudy = await CaseStudyModel.findOne({ slug });
    if (caseStudy && caseStudy.brandLogo) {
        const imagePath = path.join(__dirname, '..', 'uploads', caseStudy.brandLogo);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }
    return CaseStudyModel.findOneAndDelete({ slug });
};

const countCaseStudies = async () => {
  return CaseStudyModel.countDocuments();
};

module.exports = {
  createCaseStudy,
  getAllCaseStudies,
  getCaseStudyBySlug,
  updateCaseStudyBySlug,
  deleteCaseStudyBySlug,
  countCaseStudies,
};
