import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Search({ setIsOpen, open }) {
  const [value, setValue] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const [data , setData] = useState([
    {id:1,value:"женские трусы"},
    {id:1,value:"женские трусы"},
    {id:1,value:"женские трусы"},
    {id:1,value:"женские трусы"},
    {id:1,value:"женские трусы"},
  ])

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted value:", value);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", updateIsDesktop);
    updateIsDesktop(); // Проверяем начальную ширину

    return () => {
      window.removeEventListener("resize", updateIsDesktop);
    };
  }, []);

  useEffect(() => {
    if (isDesktop) {
      const handleDocumentClick = (event) => {
        if (
          divRef.current &&
          !divRef.current.contains(event.target) &&
          inputRef.current &&
          !inputRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("click", handleDocumentClick);

      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    } else {
      console.log("Not desktop mode");
    }
  }, [setIsOpen, isDesktop]);

  useEffect(() => {
    // Управляем скроллом в зависимости от значения `open`
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        ref={inputRef}
        value={value}
        type="text"
        placeholder="Input"
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <button type="submit">
        <FaSearch className="FaSearch" />
      </button>
      {open && (
        <>
          <div className="fixed-search"></div>
          <div ref={divRef} className={`fixed-search-texts ${open && "is-open-true"}`}>

            <div className="search-info">
              <div className="your-search">
               <h5>

                  

              Вы искали
               </h5>
              </div>
              <ul  className="search-texts">
                {
                  data.map((item)=>(
                    <>
                         <li className="">
                  <div className="search-icon-left">
                    <img src="/public/assets/svg/history.svg" alt="" />
                  </div>
                  <p>
                  {item.value}
                    </p>
                    <button>

                    <IoCloseSharp className="IoCloseSharp"/>
                    </button>
                  
                </li>
                    </>
                  ))
                }
           

              </ul>
              <div className="your-search">
               <h5>

                  

              Часто ищут
               </h5>
              </div>
              <ul  className="search-texts">
                {
                  data.map((item)=>(
                    <>
                         <li className="">
                  <div className="search-icon-left">
                    <img src="/public/assets/svg/history.svg" alt="" />
                  </div>
                  <p>
                  {item.value}
                    </p>
                    <button>

                    <IoCloseSharp className="IoCloseSharp"/>
                    </button>
                  
                </li>
                    </>
                  ))
                }
           

              </ul>
            </div>
          </div>
        </>
      )}
    </form>
  );
}

export default Search;
