// src/WorkExperienceForm.js
import React from 'react';

const WorkExperienceForm = ({ experiences, setExperiences }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperiences = experiences.map((exp, i) =>
      i === index ? { ...exp, [name]: value } : exp
    );
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, { jobTitle: '', company: '', dates: '', responsibilities: '' }]);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-2">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 border p-4 rounded">
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={exp.jobTitle}
            onChange={(e) => handleChange(index, e)}
            className="mb-2 p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
            className="mb-2 p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            name="dates"
            placeholder="Dates of Employment"
            value={exp.dates}
            onChange={(e) => handleChange(index, e)}
            className="mb-2 p-2 border rounded w-full"
            required
          />
          <textarea
            name="responsibilities"
            placeholder="Responsibilities"
            value={exp.responsibilities}
            onChange={(e) => handleChange(index, e)}
            className="mb-2 p-2 border rounded w-full"
          />
        </div>
      ))}
      <button onClick={addExperience} className="text-blue-500">Add Experience</button>
    </div>
  );
};

export default WorkExperienceForm;
