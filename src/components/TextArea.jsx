import DOMPurify from "isomorphic-dompurify";

export default function TextArea({ text, setText }) {
  const handleChange = (e) => {
    const cleanText = DOMPurify.sanitize(e.target.value, {
      USE_PROFILES: { html: false },
    });
    setText(cleanText);
  };

  return (
    <textarea
      className="textarea"
      placeholder="Enter your text"
      value={text}
      onChange={handleChange}
    />
  );
}
