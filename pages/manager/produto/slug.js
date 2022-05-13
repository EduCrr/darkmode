import { Default } from "../../../components/Default";
import Manager from "../../../styles/Manager.module.scss";
import styles from "./styles.module.scss";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useRef } from "react";
import Image from "next/image";

import {
  FaTrash,
  FaPlus,
  FaSave,
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductSlug = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

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
      <div className="linkName">Product | </div>
      <div className={styles.singleProduct}>
        <div className={styles.left}>
          <Slider {...settings} ref={sliderRef}>
            <Image
              alt=""
              width={450}
              height={620}
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            />
            <Image
              alt=""
              width={450}
              height={620}
              src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            />
          </Slider>
          <div className={styles.arrows}>
            <div onClick={gotoPrev}>
              <FaLongArrowAltLeft />
            </div>
            <div onClick={gotoNext}>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="items">
          <div className={styles.right}>
            <div className={Manager.formContact}>
              <form>
                <div className={styles.ajustTop}>
                  <input placeholder="Title" />
                  <input placeholder="Data" />
                  <select>
                    <option>Categories</option>
                    <option>Categories</option>
                    <option>Categories</option>
                    <option>Categories</option>
                  </select>

                  <ReactQuill
                    modules={modules}
                    theme="snow"
                    placeholder="Content goes here..."
                    className={styles.notes}
                  />
                </div>
                <div className={styles.ajustBottom}>
                  <input
                    className={Manager.submit}
                    type="submit"
                    value="Update"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.images}>
        <div className="items">
          <div className={styles.content}>
            <div className={styles.more}>
              <h2>Images</h2>
              <button className={Manager.managerButton}>
                <FaPlus />
              </button>
            </div>
            <div className={styles.singleImages}>
              <Image
                alt=""
                height={80}
                width={80}
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              />
              <div className={styles.title}>Product name</div>
              <div className={styles.btns}>
                <button className={Manager.managerButton}>
                  <FaTrash />
                </button>
              </div>
            </div>

            <div className={styles.save}>
              <button className={Manager.managerButton}>
                <FaSave />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Default>
  );
};

export default ProductSlug;
