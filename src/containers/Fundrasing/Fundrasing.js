import React from "react";

export default function Fundrasing() {
  return (
    <div>
      <div style={{ display: "flex", boxSizing: "border-box" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            width: "70%",
          }}
        >
          <div
            class="container-fluid"
            style={{ backgroundColor: "rgba(223, 223, 175, 0.733)" }}
          >
            <h1 class="text-center mt-4">
              <b>Event List: United Hope for Animal</b>
            </h1>
            <h6 class="text-right">
              <button>Create Event</button>
            </h6>
            <div class="listToDonateTo">
              <row>
                <img src="beach%20day.jpg" alt="United Hope For Animals Logo" />
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
                <div>
                  <p>
                    <b>Event Location: </b> Huntington Beach
                  </p>
                </div>
                <div>
                  <p>
                    <b>Event Description:</b> Bring your dog or puppy,as we
                    panther with other non-profits and Chewy, to our annual
                    Beach Day. There will be free food, games, and events.
                  </p>
                </div>
                <button>Edit Event</button>
              </row>
            </div>
            <div class="clearfix"></div>

            <div class="listToDonateTo">
              <row>
                <img src="dog%20park.jpg" alt="United Hope For Animals Logo" />
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
                <div>
                  <p>
                    <b>Event Location: </b> 10144 Bogue St, Temple City, CA
                    91780
                  </p>
                </div>
                <div>
                  <p>
                    <b>Event Description:</b> Come enjoy a great day at the
                    Park. Chewy will have many booths for free snacks, games,
                    and prizes.
                  </p>
                </div>
                <button>Edit Event</button>
              </row>
            </div>
            <div class="clearfix"></div>

            <div class="listToDonateTo">
              <row>
                <img src="Clinic.jpg" alt="United Hope For Animals Logo" />
                <div>
                  <p>
                    <b>Event Name:</b> Low Cost Pet Vaccine Clinic
                  </p>
                </div>
                <div>
                  <p>
                    <b>Event Date and Time:</b> June 15th-June 16th, 2pm-6pm PST
                  </p>
                </div>
                <div>
                  <p>
                    <b>Event Location: </b> 3785 University Dr, Irvine, CA 92612
                  </p>
                </div>
                <div>
                  <p>
                    <b>Event Description:</b> EZ Dog Wash offers low cost
                    vaccinations for all dogs and cats every month on various
                    days
                  </p>
                </div>
                <button>Edit Event</button>
              </row>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="container-fluid">
            <canvas id="myChart"></canvas>
          </div>
        </div>

        <div
          class="container-fluid"
          style="background-color: rgba(122, 248, 94, 0.068); width: 30%"
        >
          <div>
            <canvas id="myChart-bar"></canvas>
          </div>
          <div style="display: flex; justify-content: space-between">
            <div>
              <b>Earned So Far</b>
            </div>
            <div style="display: flex; align-items: center">
              <div>$2,443</div>
              <div style="padding: 0 4px">
                <image src="greater.png" style="width: 10px"></image>
              </div>
            </div>
          </div>
          <div
            style="
                width: 100%;
                height: 1px;
                background-color: black;
                margin: 20px 0;
              "
          ></div>
          <div style="display: flex; justify-content: space-between">
            <div>
              <div>
                <b>Bills Paid</b>
              </div>
              <div style="font-weight: lighter">$94 budget remaining</div>
            </div>
            <div style="display: flex; align-items: center">
              <div>$247</div>
              <div style="padding: 0 4px">
                <image src="greater.png" style="width: 10px"></image>
              </div>
            </div>
          </div>
          <div
            style="
                width: 100%;
                height: 1px;
                background-color: black;
                margin: 20px 0;
              "
          ></div>
          <div style="display: flex; justify-content: space-between">
            <div>
              <div>
                <b>Current Spend</b>
              </div>
              <div style="font-weight: lighter">$2.3k less than Aug</div>
            </div>
            <div style="display: flex; align-items: center">
              <div>$1,503</div>
              <div style="padding: 0 4px">
                <image src="greater.png" style="width: 10px"></image>
              </div>
            </div>
          </div>
          <div
            style="
                width: 100%;
                height: 1px;
                background-color: black;
                margin: 20px 0;
              "
          ></div>
          <div>
            <div>
              <b>Events Cost</b>
            </div>
            <canvas id="myChart-pie"></canvas>
            <div style="margin: 10px 0"></div>
            <div
              style="
                  display: flex;
                  justify-content: space-between;
                  background-color: rgb(241, 239, 227);
                "
            >
              <div>
                <div>
                  <b>Food Drinks</b>
                </div>
                <div style="font-weight: lighter">15% of spend</div>
              </div>
              <div style="display: flex; align-items: center">
                <div>$200</div>
                <div style="padding: 0 4px">
                  <image src="greater.png" style="width: 10px"></image>
                </div>
              </div>
            </div>
            <div style="margin: 10px 0"></div>
            <div
              style="
                  display: flex;
                  justify-content: space-between;
                  background-color: rgb(241, 239, 227);
                "
            >
              <div>
                <div>
                  <b>Supplies</b>
                </div>
                <div style="font-weight: lighter">70% of spend</div>
              </div>
              <div style="display: flex; align-items: center">
                <div>$1,503</div>
                <div style="padding: 0 4px">
                  <image src="greater.png" style="width: 10px"></image>
                </div>
              </div>
            </div>
            <div style="margin: 10px 0"></div>
            <div
              style="
                  display: flex;
                  justify-content: space-between;
                  background-color: rgb(241, 239, 227);
                "
            >
              <div>
                <div>
                  <b>Venue</b>
                </div>
                <div style="font-weight: lighter">15% of spend</div>
              </div>
              <div style="display: flex; align-items: center">
                <div>$200</div>
                <div style="padding: 0 4px">
                  <image src="greater.png" style="width: 10px"></image>
                </div>
              </div>
            </div>
            <div
              style="
                  width: 100%;
                  height: 1px;
                  background-color: black;
                  margin: 20px 0;
                "
            ></div>
          </div>
          <div>
            <div>
              <b>Administrative Cost</b>
            </div>
            <canvas id="myChart-pie2"></canvas>
            <div style="margin: 10px 0"></div>
            <div
              style="
                  display: flex;
                  justify-content: space-between;
                  background-color: rgb(241, 239, 227);
                "
            >
              <div>
                <div>
                  <b>Utilities</b>
                </div>
                <div style="font-weight: lighter">15% of spend</div>
              </div>
              <div style="display: flex; align-items: center">
                <div>$200</div>
                <div style="padding: 0 4px">
                  <image src="greater.png" style="width: 10px"></image>
                </div>
              </div>
            </div>
            <div style="margin: 10px 0"></div>
            <div
              style="
                  display: flex;
                  justify-content: space-between;
                  background-color: rgb(241, 239, 227);
                "
            >
              <div>
                <div>
                  <b>Office Equipment</b>
                </div>
                <div style="font-weight: lighter">70% of spend</div>
              </div>
              <div style="display: flex; align-items: center">
                <div>$1,503</div>
                <div style="padding: 0 4px">
                  <image src="greater.png" style="width: 10px"></image>
                </div>
              </div>
            </div>
            <div style="margin: 10px 0"></div>
            <div
              style="
                  display: flex;
                  justify-content: space-between;
                  background-color: rgb(241, 239, 227);
                "
            >
              <div>
                <div>
                  <b>Miscellaneous</b>
                </div>
                <div style="font-weight: lighter">15% of spend</div>
              </div>
              <div style="display: flex; align-items: center">
                <div>$200</div>
                <div style="padding: 0 4px">
                  <image src="greater.png" style="width: 10px"></image>
                </div>
              </div>
            </div>
            <div
              style="
                  width: 100%;
                  height: 1px;
                  background-color: black;
                  margin: 20px 0;
                "
            ></div>
            <div>Donation(Monetary)</div>
            <div
              style="
                  width: 100%;
                  height: 1px;
                  background-color: black;
                  margin: 20px 0;
                "
            ></div>
            <div>Donation(Resources)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
