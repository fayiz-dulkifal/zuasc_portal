import React from "react";
import "./result.scss";
import Button from "./Button";
import { AiFillCloseCircle, AiFillPrinter } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import { motion } from "framer-motion";
export default function Results({ data, reset }) {
  let det = data.Details;
  let marks = data.Marks;

  let IndTotal = marks.findIndex((e) => e.sub == "TOTAL");
  let IndRank = marks.findIndex((e) => e.sub == "RANK");

  let Rank = marks[IndRank].mark;
  let Total = marks[IndTotal].mark;

  function DetailD({ label, value }) {
    return (
      <div className="_Detail">
        <b>{label}: </b>
        <span>{value}</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0", transitionDuration: "2.5" }}
      className="Results"
    >
      <div className="Action">
        <Button
          onClick={() => {
            window.print();
          }}
        >
          <AiFillPrinter size="35" />
        </Button>
        <Button
          onClick={() => {
            reset(null);
          }}
        >
          <MdRefresh size="35" />
        </Button>
      </div>
      <div className="Pri">
        <div className="Head">
          <div className="_headName">
            <img
              src="https://zuwasc.com/wp-content/uploads/2021/07/cropped-ZAE__1__page-0001__3_-removebg-preview-270x270.png"
              alt=""
            />
            <div>Zainul Ulama Women's Arts & Sharee'th college</div>
          </div>

          <b>Examination Board</b>

          <small>
            TUM building,Pulliparamba(PO), Chelembra(via),673634(PIN),Malappuram
            (DT),Kerala
            <br />
            PH:9496 383 980, Email:zuwasc@gmail.com
          </small>
          <div className="exmName">{det.exam}</div>
        </div>
        <div className="Details">
          <DetailD label="Reg.No" value={det.Regno} />
          <DetailD label="Class" value={det.class} />
          <DetailD label="Name" value={det.name} />
        </div>
        <div className="marks">
          <div>
            <div>No</div>
            <div>subject</div>
            <div>mark</div>
          </div>
          {marks.map((e, i) => (
            <div className={e.sub == "TOTAL" || e.sub == "RANK" ? "H" : ""}>
              <div>{i + 1}</div>
              <div>{e.sub}</div>
              <div>{e.mark}</div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </motion.div>
  );
}
