import Loader from "react-loader-spinner";
import styled from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styled.wrapper}>
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={0}
      />
    </div>
  );
}
