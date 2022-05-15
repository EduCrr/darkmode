import { Default } from "../../../components/Default";
import Manager from "../../../styles/Manager.module.scss";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";
import { FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import Select from "react-select";
const Adicionar = () => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const [imgFile, setImgFile] = useState();
  const options = [
    { value: "Income", label: "Income" },
    { value: "Expense", label: "Expense" },
  ];
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

  const onImageChange = (e) => {
    const [file] = e.target.files;
    if (file) {
      setImgFile(URL.createObjectURL(file));
    } else {
      setImgFile();
    }
  };

  return (
    <Default>
      <div className="linkName">Add Product</div>
      <div className={styles.right}>
        <div className={Manager.formContact}>
          <form>
            <input placeholder="Title" />
            <input placeholder="Data" />
            <Select
              className=".react-select__control--is-focused .react-select__control--menu-is-open"
              classNamePrefix="react-select"
              options={options}
            />
            <ReactQuill modules={modules} theme="snow" />
            <div className={Manager.container}>
              <input
                type="file"
                id="file"
                multiple
                onChange={onImageChange}
                style={{ display: "none" }}
              />
              <label htmlFor="file">
                <Image
                  height={350}
                  width={450}
                  alt=""
                  className={Manager.selected}
                  src={
                    imgFile ??
                    "https://mladezj2cqfh.i.optimole.com/ZcuK1Xg.ECq7~2ccb/w:auto/h:auto/q:auto/https://www.take5.com.br/wp-content/themes/cardinal/images/default-thumb.png"
                  }
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
