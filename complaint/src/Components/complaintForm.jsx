import React, { useState } from "react";
import InputField from "./InputField";
import FileUpload from "./fileUpload.jsx";
import ErrorMessage from "./errorMessage.jsx";
import SubmitButton from "./sumbitButton.jsx";
import FormLayout from "./formLayput.jsx";

const ComplaintForm = ({ title, depart }) => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  console.log(title, depart);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    const response = await fetch("http://localhost:3000/api/complaint", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      // redirecitng
    } else {
      setError(result.message);
    }
  };

  return (
    <FormLayout title="Submit Complaint">
      <ErrorMessage message={error} />
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <InputField
          label="Complaint Description"
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required={true}
        />
        <FileUpload
          label="Upload Image"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        />
        <SubmitButton label="Submit" />
      </form>
    </FormLayout>
  );
};

export default ComplaintForm;
