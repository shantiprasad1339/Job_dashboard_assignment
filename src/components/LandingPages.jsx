import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function LandingPages() {
  const [jobData, setJobData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getJobApi() {
      try {
        const response = await axios.get(
          "https://6736dd8aaafa2ef22231c039.mockapi.io/job"
        );
        setJobData(response.data);
        setFilteredData(response.data); 
      } catch (error) {
        alert("the Api is not working")
      }
     
    }
    getJobApi();
  }, []);
  const sortJobsByDate = (order) => {
    const sortedData = [...jobData].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
  
      return order === "newToOld" ? dateB - dateA : dateA - dateB;
    });
    setFilteredData(sortedData); 
  };
  
  const handleSearchIcon = () => {
    const term = searchTerm.toLowerCase();
    const filtered = jobData.filter((job) =>
      job.location.toLowerCase().includes(term)
    );
  
    if (filtered.length === 0) {
      alert("Please enter a valid location from the cards.");
    } else {
      setFilteredData(filtered);
    }
  };
  
  

  return (
    <>
      <div className="container mt-3">
        <div className="search-box">
          <form action="" className="">
            <label htmlFor="" className="form-label">
              Search job by location
            </label>
            <div className="iput_search" style={{ position: "relative" }}>
  <input
    type="text"
    className="search-input"
    placeholder="Search job here by location..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)} 
  />
  <i
    className="fa-solid fa-magnifying-glass"
    style={{
      position: "absolute",
      right: "12px",
      top: "32%",
      cursor: "pointer",
    }}
    onClick={() => handleSearchIcon()} 
  ></i>
</div>
          </form>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-3">
          <div className="dropdown ms-1">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Job filter by date
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item"  onClick={() => sortJobsByDate("newToOld")}>
               
                  New to old
                </a>
              </li>
              <li>
                <a className="dropdown-item"  onClick={() => sortJobsByDate("oldToNew")}>
                  Old to new
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
  {filteredData &&
    filteredData.map((item, index) => (
      <div className="col-xl-6 mt-3" key={item.id || index}>
        <Card
          image={item.avatar}
          company={item.company}
          shortdes={item.shortDescription}
          skill={item.skill}
          title={item.title}
          location={item.location}
          apidate={item.createdAt}
          description={item.description}
        />
      </div>
    ))}
</div>

      </div>
    </>
  );
}

export default LandingPages;
