import styles from "./styles.module.scss";
import Manager from "../../styles/Manager.module.scss";
import { FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

export const ContentManager = () => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className={styles.contentType}>
      <h5>Content Type</h5>
      <div className={Manager.formContact}>
        <form>
          <input placeholder="Title" />
          <ReactQuill modules={modules} theme="snow" />
          <input type="file" id="file" style={{ display: "none" }} />
          <div className={Manager.container}>
            <label htmlFor="file">
              <Image
                alt=""
                className={Manager.selected}
                width={500}
                height={400}
                src="https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              />
              <div className={Manager.middle}>
                <div htmlFor="file" className={Manager.text}>
                  <FaFileAlt />
                </div>
              </div>
            </label>
          </div>
          <input className={Manager.submit} type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};
