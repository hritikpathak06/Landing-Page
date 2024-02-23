import React from "react";
import "./Container.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { SlDiamond } from "react-icons/sl";
import { FiCornerUpRight } from "react-icons/fi";

const Container = () => {
  return (
    <>
      {data &&
        data.map((item) => (
          <div className="container">
            {item.icon && item.iconName ? (
              <div className="content">
                {item.icon}
                <span>{item.iconName}</span>
              </div>
            ) : null}
            <div className="sub__container">
              <div className="first__div">
                <img src={item.img} alt="logo" />
                <span>{item.imgName}</span>
              </div>

              <div className="second__div">
                <h3>
                  {item.heading}
                  <span>{item.subHeading}</span>
                </h3>
                {item.offer && (
                  <div className="offer__div">
                    <span>{item.offer}</span>
                  </div>
                )}
                <h3>Main highlights</h3>
                {item.miniHeading ? (
                  <p>{item.miniHeading}</p>
                ) : (
                  <div className="last__main__div">
                    <div className="last__div">
                      <div>
                        <span>9.9</span>
                        <p>building responsive</p>
                      </div>
                      <div>
                        <span>9.9</span>
                        <p>building responsive</p>
                      </div>
                      <div>
                        <span>9.9</span>
                        <p>building responsive</p>
                      </div>
                    </div>
                    <div className="sub__div">
                      <h4>Why We Love It</h4>
                      <div className="item__div">
                        <span>
                          <FiCornerUpRight />
                        </span>
                        <p>Documentation</p>
                      </div>
                      <div className="item__div">
                        <span>
                          <FiCornerUpRight />
                        </span>
                        <p>Easy Use</p>
                      </div>
                      <div className="item__div">
                        <span>
                          <FiCornerUpRight />
                        </span>
                        <p>Out of box</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="anchor">
                  <p>Show More</p>
                  <MdKeyboardArrowDown />
                </div>
              </div>
              <div className="third__div">
                <div className="rating">
                  <h2>{item.rating}</h2>
                  <p>{item.info}</p>
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <button>View</button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Container;

export const data = [
  {
    icon: <GoTrophy />,
    iconName: "Best Choice",
    img: "./first.png",
    imgName: "Builder 1",
    heading: "WixPro 72-Inch Responsive Website Builder",
    subHeading:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    miniHeading:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: 9.8,
    info: "Exceptional",
  },
  {
    icon: <SlDiamond />,
    iconName: "Best Value",
    img: "./first.png",
    imgName: "Builder ",
    heading: "SiteCraft 68-Inch Ultimate Web Design Studio",
    subHeading:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    miniHeading:
      "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: 9.5,
    info: "Excellent",
  },
  {
    // icon: <SlDiamond />,
    // iconName: "Best Value",
    img: "./first.png",
    imgName: "Builder 1 ",
    heading: "WixPro 72-Inch Responsive Website Builder",
    subHeading:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    miniHeading:
      "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: 9.3,
    info: "Exceptional",
  },
  {
    // icon: <SlDiamond />,
    // iconName: "Best Value",
    img: "./first.png",
    imgName: "CDK ",
    heading: "CDK Resposive Builder: ",
    subHeading:
      "An extensive library of widgets and apps, and detailed step-by-step guides",
    offer: "26%",
    rating: 9.1,
    info: "Very Good",
  },
];
