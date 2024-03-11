import { useTranslation } from "react-i18next";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SubHeader({
  subTitle,
  subTitleLink,
  title,
  description,
  btnName,
  btnLink,
  handleShow,
}: any) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className=" row subHeader align-items-center  rounded-3 py-2 mx-2 my-4 align-content-center">
        <div className="col-sm-8">
          <span className="my-3">
            <Link
              className=" text-warning my-2  text-decoration-none d-flex align-items-center gap-2"
              to={subTitleLink}
            >
              {subTitleLink && <MdOutlineKeyboardDoubleArrowLeft />}
              {subTitle}
            </Link>
          </span>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        {btnName && (
          <div className="col-sm-4 text-end">
            <Link to={btnLink}>
              <button className="btn px-3 btn-warning" onClick={handleShow}>
                {btnName}
                {i18n.language == "en" ? (
                  <i className=" fa-solid fa-arrow-right"></i>
                ) : (
                  <i className=" fa-solid fa-arrow-left"></i>
                )}{" "}
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
