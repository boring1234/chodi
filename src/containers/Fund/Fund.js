import React, { useEffect, useState } from "react";
import "./Fund.css";
import UnitedHopeForAnimals from "./UnitedHopeForAnimals.jpg";
import barkbox from "./dogpark.jpg";
import Propertymanagement from "./Propertymanagement.png";
import zom from "./zomlogo.png";
import kevinnguyen from "./kevinnguyen.jpg";
import purina from "./purina.png";
import beachday from "./beachday.jpg";
import dogpark from "./dogpark.jpg";
import clinic from "./Clinic.jpg";
import EventFund from "../../components/EventFund/EventFund";
import axios from "../../axios-event";

export default function Fund() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("inside useEffect");
    axios
      .get("https://react-chodi-default-rtdb.firebaseio.com/events.json")
      .then((response) => {
        const temp = [];

        for (const key in response.data) {
          temp.push({
            Subject: response.data[key].eventName,
            StartTime: new Date(
              response.data[key].startDate +
                "T" +
                response.data[key].startTime +
                "-07:00",
            ),
            EndTime: new Date(
              response.data[key].endDate +
                "T" +
                response.data[key].endTime +
                "-07:00",
            ),
          });
        }

        setData([...data, ...temp]);
      });
  }, []);

  return (
    <div className="App">
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <div className="row mt-2 mb-1">
            <div className="col-sm-8 company-sec1">
              <h1 className="text-left mt-3 mb-4 com_name">
                <img
                  src={UnitedHopeForAnimals}
                  alt="United Hope For Animals Logo"
                />
                <p className="text-left">
                  <b>United Hope for Animal Portal</b>
                </p>
              </h1>
              <h5>
                <div
                  className="progress-bar"
                  style={{ width: 0 }}
                  data-label="$452,873 of $700,000 Raised"
                ></div>
              </h5>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 company-sec">
              <div className="panel panel-primary filterable">
                <div className="panel-heading">
                  <h3 className="panel-title">Donation History</h3>
                  <div className="pull-right">
                    <button className="btn btn-default btn-xs btn-filter">
                      <span className="glyphicon glyphicon-filter"></span>{" "}
                      Filter
                    </button>
                  </div>
                </div>
                <table className="table">
                  <thead>
                    <tr className="filters">
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Description"
                          disabled
                        />
                      </th>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Client Name"
                          disabled
                        />
                      </th>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Payment Type"
                          disabled
                        />
                      </th>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Paid Date"
                          disabled
                        />
                      </th>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Amount"
                          disabled
                        />
                      </th>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Transaction"
                          disabled
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BarkBox HPA Grant</td>
                      <td>
                        <img
                          src={barkbox}
                          alt=""
                          className="thumb-sm rounded-circle mr-2"
                        />{" "}
                        BarkBox Inc.
                      </td>
                      <td>Visa</td>
                      <td>4/8/2021</td>
                      <td>+$25,000</td>
                      <td>
                        <span className="badge badge-boxed badge-soft-warning">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>MOR Donation</td>
                      <td>
                        <img
                          src={Propertymanagement}
                          alt=""
                          className="thumb-sm rounded-circle mr-2"
                        />{" "}
                        TrueDoor Property Management
                      </td>
                      <td>Visa</td>
                      <td>3/28/2021</td>
                      <td>+$5,000</td>
                      <td>
                        <span className="badge badge-boxed badge-soft-primary">
                          Success
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>PV Vaccine 1000c Donation</td>
                      <td>
                        <img
                          src={zom}
                          alt=""
                          className="thumb-sm rounded-circle mr-2"
                        />{" "}
                        Zom Med Inc.
                      </td>
                      <td>Visa</td>
                      <td>3/19/2021</td>
                      <td>+$6,000</td>
                      <td>
                        <span className="badge badge-boxed badge-soft-warning">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Beach Day Fundraiser</td>
                      <td>
                        <img
                          src={
                            "https://bootdey.com/img/Content/avatar/avatar7.png"
                          }
                          alt=""
                          className="thumb-sm rounded-circle mr-2"
                        />
                        Jackson Kelly
                      </td>
                      <td>Paypal</td>
                      <td>3/16/2021</td>
                      <td>+$2,000</td>
                      <td>
                        <span className="badge badge-boxed badge-soft-primary">
                          Success
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Kevin's Donation</td>
                      <td>
                        <img
                          src={kevinnguyen}
                          alt=""
                          className="thumb-sm rounded-circle mr-2"
                        />{" "}
                        Kevin Nguyen
                      </td>
                      <td>Visa</td>
                      <td>3/1/2021</td>
                      <td>+$969</td>
                      <td>
                        <span className="badge badge-boxed badge-soft-primary">
                          Success
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Purina PDC Grant</td>
                      <td>
                        <img
                          src={purina}
                          alt=""
                          className="thumb-sm rounded-circle mr-2"
                        />
                        Purina Inc.
                      </td>
                      <td>Visa</td>
                      <td>2/27/2021</td>
                      <td>+$35,000</td>
                      <td>
                        <span className="badge badge-boxed badge-soft-primary">
                          Success
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="panel panel-primary filterable">
                <div className="panel-heading">
                  <h3 className="panel-title">Event Specific Donation</h3>
                  <div className="pull-right">
                    <button className="btn btn-default btn-xs btn-filter">
                      <span className="glyphicon glyphicon-filter"></span>{" "}
                      Filter
                    </button>
                  </div>
                </div>
                <table className="table">
                  <thead>
                    <tr className="filters">
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Event Name"
                          disabled
                        />
                      </th>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          disabled
                        />
                      </th>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Date"
                          disabled
                        />
                      </th>
                      <th>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Amount"
                          disabled
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Beach Day</td>
                      <td>Mark</td>
                      <td>5/11/2021</td>
                      <td>$10</td>
                    </tr>
                    <tr>
                      <td>Beach Day</td>
                      <td>Jacob</td>
                      <td>5/1/2021</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>Vaccine Clinic</td>
                      <td>Larry</td>
                      <td>4/29/2021</td>
                      <td>$120</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Tony</td>
                      <td>4/27/2021</td>
                      <td>$1000</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Tony</td>
                      <td>4/27/2021</td>
                      <td>$1000</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Tony</td>
                      <td>4/28/2021</td>
                      <td>$900</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Tony</td>
                      <td>4/28/2021</td>
                      <td>$1000</td>
                    </tr>
                    <tr>
                      <td>Vaccine Clinic</td>
                      <td>Kim</td>
                      <td>4/20/2021</td>
                      <td>$250</td>
                    </tr>
                    <tr>
                      <td>Vaccine Clinic</td>
                      <td>David</td>
                      <td>4/19/2021</td>
                      <td>@$300</td>
                    </tr>
                    <tr>
                      <td>Vaccine Clinic</td>
                      <td>Tim</td>
                      <td>4/17/2021</td>
                      <td>$230</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Bobby</td>
                      <td>4/13/2021</td>
                      <td>$40</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Tiffany</td>
                      <td>4/11/2021</td>
                      <td>$50</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Tiffany</td>
                      <td>4/11/2021</td>
                      <td>$50</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Tiffany</td>
                      <td>4/11/2021</td>
                      <td>$50</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Tiffany</td>
                      <td>4/11/2021</td>
                      <td>$50</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Tiffany</td>
                      <td>4/11/2021</td>
                      <td>$500</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Emily</td>
                      <td>4/10/2021</td>
                      <td>$50</td>
                    </tr>
                    <tr>
                      <td>Bark Fest</td>
                      <td>Sophia</td>
                      <td>4/9/2021</td>
                      <td>$20</td>
                    </tr>
                    <tr>
                      <td>Beach Day</td>
                      <td>Grayson</td>
                      <td>4/9/2021</td>
                      <td>$30</td>
                    </tr>
                    <tr>
                      <td>Beach Day</td>
                      <td>Chris</td>
                      <td>4/9/2021</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>Beach Day</td>
                      <td>Ashley</td>
                      <td>4/7/2021</td>
                      <td>$90</td>
                    </tr>
                    <tr>
                      <td>Beach Day</td>
                      <td>Maddie</td>
                      <td>4/5/2021</td>
                      <td>$400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-sm-4">
              <div>
                <row>
                  <h2>Fundraising Campaign</h2>
                </row>
              </div>
              {/*<!-- <div>
                <div className="listToDonateTo">
                  <row>
                    <img src={beachday} alt="United Hope For Animals Logo" />
                    <div>
                      <p>
                        <b>Event Name:</b> Beach Day
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>Event Date and Time:</b> June 4th, 12pm-4pm PST
                      </p>
                    </div>

                    <button onclick=" window.open('crm.html','_blank')">
                      View CRM
                    </button>
                  </row>
                </div>
                <div className="clearfix"></div>

                <div className="listToDonateTo">
                  <row>
                    <img src={dogpark} alt="United Hope For Animals Logo" />
                    <div>
                      <p>
                        <b>Event Name:</b> BarkFest at the Park: Chewy
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>Event Date and Time:</b> June 15th, 12pm-4pm PST
                      </p>
                    </div>
                    <button onclick=" window.open('crm.html','_blank')">
                      View CRM
                    </button>
                  </row>
                </div>
                <div className="clearfix"></div>

                <div className="listToDonateTo">
                  <row>
                    <img src={clinic} alt="United Hope For Animals Logo" />
                    <div>
                      <p>
                        <b>Event Name:</b> Low Cost Pet Vaccine Clinic
                      </p>
                    </div>
                    <div>
                      <p>
                        <b>Event Date and Time:</b> June 15th-June 16th, 2pm-6pm
                        PST
                      </p>
                    </div>
                    <button onclick=" window.open('crm.html','_blank')">
                      View CRM
                    </button>
                  </row>
                </div>
                <div className="clearfix"></div>
              </div> -->*/}
              {data.map((ele) => (
                <EventFund
                  eventName={ele.Subject}
                  startDate={ele.StartTime.toLocaleDateString()}
                  endDate={ele.EndTime.toLocaleDateString()}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
