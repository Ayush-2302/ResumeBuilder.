// src/SkillsForm.js
import React from 'react';

const SkillsForm = ({ skills, setSkills }) => {
  const handleChange = (e) => {
    setSkills(e.target.value.split(',').map(skill => skill.trim()));
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-2">Skills</h2>
      <input
        type="text"
        placeholder="Enter skills separated by commas"
        value={skills.join(', ')}
        onChange={handleChange}
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default SkillsForm;
