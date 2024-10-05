const FileUpload = ({ label, onChange, accept }) => {
  return (
    <div>
      <label>{label} (optional): </label>
      <input type="file" onChange={onChange} accept={accept} />
    </div>
  );
};

export default FileUpload;
