import React from "react";
import "./Blog.css";
import planning from "../assests/images/planning.png";
import money from "../assests/images/money.png";
import book from "../assests/images/book.png";

export default function Blog() {
  return (
    <div className="blog">
      <div className="b_header">
        <p className="b_highlight_1"
          style={{
            // color: "#EDB86F",
            // fontSize: 18,
            // fontFamily: "Open Sans",
            // fontWeight: 600,
          }}
        >
          Blog
        </p>
        <p className="b_highlight_2"
          style={{
            // color: "white",
            // fontSize: 48,
            // fontFamily: "Lora",
            // fontWeight: "600",
            // paddingTop: 15,
          }}
        >
          Newsroom
        </p>
      </div>
      <div className="b_content">
        <div className="b_context">  
          <img className="planning"  src={planning} alt="planning"/>
          <p className="b_sub_highlight"
            style={{
              // color: "#FFF",
              // fontFamily: "Be Vietnam Pro",
              // fontSize: 14,
              // fontStyle: "normal",
              // fontWeight: 700,
              // marginTop: 10,
            }}
          >
            Criminal law
          </p><br></br>
          <p className="b_sub_context_1"
            style={{
              // color: "#FFF",
              // fontFamily: "Be Vietnam Pro",
              // fontSize: 26,
              // fontStyle: "normal",
              // fontWeight: 600,
            }}
          >
            How do you prepare for a company’s RODO audit and implementation?
          </p><br></br>
          <p className="b_sub_context_2"
            style={{
              // color: "#D9D9D9",
              // fontFamily: "Open Sans",
              // fontSize: 16,
              // fontStyle: "normal",
              // fontWeight: 600,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Parturient leo aliquet
            ligula enim lacinia .
          </p>
        </div>

        <div className="b_context">
          <img className="planning" src={money} alt="money" />
          <p className="b_sub_highlight"
            style={{ 
              // color: "#FFF",
              // fontFamily: "Be Vietnam Pro",
              // fontSize: 14,
              // fontStyle: "normal",
              // fontWeight: 700,
              // marginTop: 10,
            }}
          >
            Criminal law
          </p><br></br>
          <p className="b_sub_context_1"
            style={{
              // color: "#FFF",
              // fontFamily: "Be Vietnam Pro",
              // fontSize: 26,
              // fontStyle: "normal",
              // fontWeight: 600,
            }}
          >
            How to successfully recover debts from an unreliable debtor?
          </p><br></br>
          <p className="b_sub_context_2"
            style={{
              // color: "#D9D9D9",
              // fontFamily: "Open Sans",
              // fontSize: 16,
              // fontStyle: "normal",
              // fontWeight: 600,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Parturient leo aliquet
            ligula enim lacinia .
          </p>
        </div>
        <div className="b_context">
          <img className="planning" src={book} alt="book" />
          <p className="b_sub_highlight"
            style={{
              // color: "#FFF",
              // fontFamily: "Be Vietnam Pro",
              // fontSize: 14,
              // fontStyle: "normal",
              // fontWeight: 700,
              // marginTop: 10,
            }}
          >
            Criminal law
          </p><br></br>
          <p className="b_sub_context_1"
            style={{
              // color: "#FFF",
              // fontFamily: "Be Vietnam Pro",
              // fontSize: 26,
              // fontStyle: "normal",
              // fontWeight: 600,
            }}
          >
            Division of property during divorce
          </p><br></br>
          <p className="b_sub_context_2"
            style={{
              // color: "#D9D9D9",
              // fontFamily: "Open Sans",
              // fontSize: 16,
              // fontStyle: "normal",
              // fontWeight: 600,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Parturient leo aliquet
            ligula enim lacinia .
          </p>
        </div>
      </div>
    </div>
  );
}
