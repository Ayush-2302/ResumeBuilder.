import React from "react";

const fields = [
  { name: "name", type: "text", placeholder: "Full Name", required: true },
  { name: "email", type: "email", placeholder: "Email Address", required: true },
  { name: "phone", type: "tel", placeholder: "Mobile Number", required: true },
  { name: "location", type: "text", placeholder: "Location", required: false },
  { name: "portfolio", type: "url", placeholder: "Portfolio URL", required: false },
  { name: "linkedin", type: "url", placeholder: "LinkedIn Profile", required: false },
  { name: "github", type: "url", placeholder: "GitHub Profile", required: false },
  { name: "objective", type: "textarea", placeholder: "Career Objective", required: false },
];

const ContactInfoForm = ({ contactData, setContactData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded shadow-sm bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Information</h2>
      {fields.map((field) => {
        if (field.type === "textarea") {
          return (
            <textarea
              key={field.name}
              name={field.name}
              placeholder={field.placeholder}
              // value={contactData[field.name]}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
              rows="3"
            />
          );
        }
        return (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            // value={contactData[field.name]}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
            required={field.required}
          />
        );
      })}
    </div>
  );
};

export default ContactInfoForm;
