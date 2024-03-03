import NoDataImage from "../../../assets/Images/NoData.svg";
export default function NoData() {
  return (
    <>
      <div className="text-center">
        <img src={NoDataImage} alt="No Data" />
      </div>
    </>
  );
}
