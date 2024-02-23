import React from "react";
import "./Header.scss";
import { IoIosSearch } from "react-icons/io";
import { FiCornerUpRight } from "react-icons/fi";
import { MdDescription } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="main__header">
        <div className="header">
          <div className="sub__header">
            <div className="search__header">
              <span style={{ color: "#000", fontSize: "19px" }}>
                <IoIosSearch />
              </span>
              <input type="text" />
            </div>
            <p>Categories</p>
            <p>Website Builders</p>
            <p>Today's deals</p>
          </div>
        </div>
        <div className="header__heading">
          <h1>Best Website builders in the US</h1>
          <div className="header__navigation">
            <div className="header__left__div">
              <div className="header__item">
                <span>
                  <FiCornerUpRight />
                </span>
                <p>Last Updated-February 22, 2020</p>
              </div>
              <div className="header__item">
                <span>
                  <MdDescription />
                </span>
                <p>Advertising Disclosure</p>
              </div>
            </div>
            <div className="header__right__div">
              <p>Top Relevant</p>
              <span>
                <FaArrowDown />
              </span>
            </div>
          </div>
          <div className="bottom__header">
            <span className="header__btn first">Tools</span>
            <span className="header__btn">AWS Builder</span>
            <span className="header__btn">Start Build</span>
            <span className="header__btn">Build Supplies</span>
            <span className="header__btn">Tooling</span>
            <span className="header__btn">BlueHosting</span>
          </div>
          <div className="bottom__sub__header">
            <div className="item__subheader">
              <p>Home</p>
            </div>
            <div className="item__subheader">
              <span>
                <MdKeyboardArrowRight />
              </span>
              <p>Hosting for all</p>
            </div>
            <div className="item__subheader">
              <span>
                <MdKeyboardArrowRight />
              </span>
              <p>Hosting</p>
            </div>
            <div className="item__subheader">
              <span>
                <MdKeyboardArrowRight />
              </span>
              <p>Hosting6</p>
            </div>
            <div className="item__subheader">
              <span>
                <MdKeyboardArrowRight />
              </span>
              <p>Hosting5</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
