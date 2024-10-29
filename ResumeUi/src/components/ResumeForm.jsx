// src/ResumeForm.js
import React, { useState } from "react";
import ContactInfoForm from "./ContactInfoForm";
import WorkExperienceForm from "./WorkExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";

const ResumeForm = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    portfolio: "",
    linkedin: "",
    github: "",
    objective: "",
  });
  const [experiences, setExperiences] = useState([
    { jobTitle: "", company: "", dates: "", responsibilities: "" },
  ]);
  const [education, setEducation] = useState([
    { degree: "", institution: "", graduationDate: "" },
  ]);
  const [skills, setSkills] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const resumeData = {
      contactData,
      experiences,
      education,
      skills,
    };
    console.log("Resume Data:", resumeData);
    // Handle form submission (e.g., save or send the data)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-5 border rounded-lg shadow-lg"
    >
      <h1 className="text-2xl font-bold mb-4">Resume Builder</h1>
      <ContactInfoForm
        contactData={contactData}
        setContactData={setContactData}
      />
      <WorkExperienceForm
        experiences={experiences}
        setExperiences={setExperiences}
      />
      <EducationForm education={education} setEducation={setEducation} />
      <SkillsForm skills={skills} setSkills={setSkills} />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit Resume
      </button>
    </form>
  );
};

export default ResumeForm;
