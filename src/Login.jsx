import React, { useState } from "react";
import Button from "./Button";
import "./Login.scss";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import {FaSpinner} from 'react-icons/fa'
import DatePicker from "react-datepicker";
import Results from "./Results";

export default function Login() {
  const [startDate, setStartDate] = useState(new Date());
  const [Reg, setReg] = useState(null);
  
  const [Data, setData] = useState(null);

  return (
    <div className="Loginer">
      <div className="Sider">
        <div className="cont">
          <h1>Exam results</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ad
            exercitationem perferendis at, obcaecati quaerat id sunt sit rem
            dolorum ab adipisci nesciunt! Fugiat facere eligendi explicabo nam!
            Atque, magni?
          </p>
        </div>
      </div>
      <div className="action">
        <div>
          <img
            src="https://zuwasc.com/wp-content/uploads/2021/07/zuwzsc-logo.png"
            alt=""
          />
          <div className="Inputs">
            <div>
              <input
                value={Reg}
                onChange={(e) => {
                  setReg(e.target.value);
                }}
                placeholder="Reg.No"
                type="text"
              />
            </div>
            <div>
              {/* <DatePicker
                placeholderText="Date of Birth"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              /> */}
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
            {Data=="Loading"?<div className="spinner-3"></div>:
              <Button
                onClick={() => {
                  setData("Loading")
                  fetch(
                    `https://script.google.com/macros/s/AKfycbwvkcShwedkPp96FupqpdhxbANmdetnye2le9se_wa63-d_JUw3mknLgYskxCiMY-OEeA/exec?id=${Reg}`
                  )
                    .then(e=>e.json())
                    .then((e) => {
                      setData(e);
                    })
                    .catch((e) => {
                      setData(null)
                      alert("Error....");
                    });
                }}
              >
                
                Check Result
              </Button>}
            </div>
          </div>
        </div>
      </div>
    {Data&&Data!=="Loading"&&<Results reset={setData} data={Data}/>}
    
    </div>
  );
}
