import { Default } from "../../../components/Default";
import Manager from "../../../styles/Manager.module.scss";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";
import { FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";

const Adicionar = () => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  return (
    <Default>
      <div className="linkName">Add Product</div>
      <div className={styles.right}>
        <div className={Manager.formContact}>
          <form>
            <input placeholder="Title" />
            <input placeholder="Data" />
            <select>
              <option>Categories</option>
              <option>Categories</option>
              <option>Categories</option>
              <option>Categories</option>
            </select>
            <ReactQuill modules={modules} theme="snow" />
            <div className={Manager.container}>
              <input type="file" id="file" style={{ display: "none" }} />
              <label htmlFor="file">
                <Image
                  height={350}
                  width={450}
                  alt=""
                  className={Manager.selected}
                  src="https://mladezj2cqfh.i.optimole.com/ZcuK1Xg.ECq7~2ccb/w:auto/h:auto/q:auto/https://www.take5.com.br/wp-content/themes/cardinal/images/default-thumb.png"
                />
                <div className={Manager.middle}>
                  <div htmlFor="file" className={Manager.text}>
                    <FaFileAlt />
                  </div>
                </div>
              </label>
            </div>
            <input className={Manager.submit} type="submit" value="Create" />
          </form>
        </div>
      </div>
    </Default>
  );
};

export default Adicionar;
