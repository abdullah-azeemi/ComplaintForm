const InputField = ({ label, type, value, onChange, required }) => {
  return (
    <div>
      <label>
        {label} {required && "(required)"}:{" "}
      </label>
      {type === "textarea" ? (
        <textarea value={value} onChange={onChange} required={required} />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
    </div>
  );
};

export default InputField;
