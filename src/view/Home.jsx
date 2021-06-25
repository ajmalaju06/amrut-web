import React, { useState, useEffect } from "react";
import Header from "../components/header";
import "../css/home.css";
import { designationData } from "../datas/data";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import salesApi from "../api/sales";
import customerApi from "../api/customerData";

function onChange(date, dateString) {
  console.log(date, dateString);
}

function Home() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [salesData, setSalesData] = useState([]);
  const [customerdata, setCustomerData] = useState([]);

  useEffect(() => {
    menuClick(0);
  }, []);

  const getsales = async () => {
    const data = await salesApi.getSalesData();
    console.log(data.data);
    if (data.success) {
      setSalesData(data.data);
    } else {
      alert("No records");
    }
  };

  const getcustomer = async () => {
    const data = await customerApi.getCustomerData();
    console.log(data.data);
    if (data.success) {
      setSalesData(data.data);
    } else {
      alert("No records");
    }
  };

  const menuClick = (index) => {
    if (index === 0) {
      getsales();
    } else {
      getcustomer();
    }
    setSelectedItem(index);
  };

  return (
    <div>
      <Header />

      <div className="home-container">
        <div className="side-bar">
          <div>
            <ul>
              {designationData.map((e, index) => {
                const active = selectedItem === index ? "active" : "";
                return (
                  <li className={active} onClick={() => menuClick(index)}>
                    <span>{e.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="excel-container">
          <div className="date-picker-container">
            <h2 className="heading-name-style">Sales </h2>
            <div style={{ width: 200 }}>
              <DatePicker onChange={onChange} />
            </div>
            <div className="button-container">
              <span className="button-txt">Export Excel</span>
            </div>
          </div>

          <div className="table-container">
            <table className="table-style">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Customer Name</th>
                  <th>Customer Number</th>
                  <th>Route</th>
                  <th>Location</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((e, index) => {
                  return (
                    <tr>
                      <td>{e.createdDate}</td>
                      <td>{e.customerName}</td>
                      <td>{e.customerNumber}</td>
                      <td>{e.route.routeName} </td>
                      <td>{e.location}</td>
                      <td>{e.address}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;