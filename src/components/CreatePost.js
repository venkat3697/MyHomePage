import { useState, useRef } from "react";

const getCurrentDateTime = () => {
  const date = new Date();

  // Options for formatting the date
  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", dateOptions); // Example: "1 March 2024"

  // Formatting the time (hours and minutes)
  const formattedTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  }); // Example: "18:00"

  return { postDate: formattedDate, postTime: formattedTime };
};




export const CreatePost = ({ addPost }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const textareaRef = useRef(null);
  const { postDate, postTime } = getCurrentDateTime();

  const handleInputChange = (e) => {
    setError(false);
    setText(e.target.value);
    // Dynamically adjust the height based on the content
    textareaRef.current.style.height = "auto"; // Reset height
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height based on scrollHeight
  };

  const handleSubmit = () => {
    if (!(text.length > 3)) {
      setError(true);
    } else {
      const newPost = {
        id: 4,
        postBy: "Venkata Naveen",
        postDate: postDate,
        postTime: postTime,
        postDetails:text,
        lastEdit: "1 days ago",
        userImageUrl:
          "https://media.licdn.com/dms/image/v2/D5635AQEOecAT-4eGFw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1728003389764?e=1730181600&v=beta&t=18jh0ufELPApg0EcXMq5aXlN_yP5rrmFoZi_Xke1nZs",
        postType: "Update",
      };
      setError(false);
      addPost(newPost);
    }
  };

  return (
    <>
      <div className="m-1">
        <div className="input-group">
          <textarea
            className="form-control"
            ref={textareaRef}
            value={text}
            onChange={handleInputChange}
            style={{
              overflow: "hidden",
              resize: "none",
              minHeight: "40px",
            }} // Hide scrollbar and disable manual resizing
            aria-label="With textarea"
            placeholder="Add your Thoughts"
          ></textarea>
        </div>
        <div className="mt-2 d-flex justify-content-between">
          <div>
            <i class="bi bi-images text-danger me-3"></i>
            <i class="bi bi-file-earmark-pdf-fill text-info  me-3"></i>
            <i class="bi bi-mic-fill text-warning  me-3"></i>
            <i class="bi bi-camera-reels-fill text-success"></i>
          </div>

          <button
            type="button"
            class="btn btn-info btn-sm"
            onClick={handleSubmit}
          >
            Post
          </button>
        </div>
        {error ? (
          <p className="text-danger">Please Enter More than 3 characters</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
