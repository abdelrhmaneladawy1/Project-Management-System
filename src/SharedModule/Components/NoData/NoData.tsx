import NoDataImage from "../../../assets/Images/NoData.svg";
export default function NoData() {
  return (
    <>
      <div className=" d-flex justify-content-center align-items-center flex-column">
        <img src={NoDataImage} alt="No Data" />
        <h3 className="my-2 text-danger">No Data</h3>
      </div>
    </>
  );
}
