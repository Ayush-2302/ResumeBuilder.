// src/EducationForm.js
import React from 'react';

const EducationForm = ({ education, setEducation }) => {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [name]: value } : edu
    );
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([...education, { degree: '', institution: '', graduationDate: '' }]);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-2">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4 border p-4 rounded">
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
            className="mb-2 p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            name="institution"
            placeholder="Institution Name"
            value={edu.institution}
            onChange={(e) => handleChange(index, e)}
            className="mb-2 p-2 border rounded w-full"
            required
          />
          <input
            type="text"
            name="graduationDate"
            placeholder="Graduation Date"
            value={edu.graduationDate}
            onChange={(e) => handleChange(index, e)}
            className="mb-2 p-2 border rounded w-full"
          />
        </div>
      ))}
      <button onClick={addEducation} className="text-blue-500">Add Education</button>
    </div>
  );
};

export default EducationForm;

