import React from "react";
import Breadcrumbs from "./Breadcrumbs";

export default function DashboardComponent() {
  return (
    <div
      className="flex-grow flex flex-col p-8 gap-4"
      style={{ backgroundColor: "#EDF1F7" }}
    >
      <div>
        <Breadcrumbs />
      </div>
      <div>
        <div className="flex flex-row justify-between flex-wrap">
          <div
            className="flex-grow py-6 px-10 flex flex-col gap-5 rounded-md shadow-lg"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <span className="text-lg font-medium" style={{ color: "#4154F1" }}>
              Present |{" "}
              <span className="text-sm" style={{ color: "#899BBD" }}>
                Today
              </span>
            </span>
            <div className="flex flex-row gap-5">
              <div
                className="h-16 w-16 rounded-full"
                style={{ backgroundColor: "#F6F6FE" }}
              ></div>
              <div className="flex flex-col">
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#4154F1" }}
                >
                  145
                </span>
                <span
                  className="font-bold text-sm"
                  style={{ color: "#012970" }}
                >
                  12%{" "}
                  <span
                    className="text-sm font-normal"
                    style={{ color: "#6C757D" }}
                  >
                    increase
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div
            className="flex-grow py-6 px-10 flex flex-col gap-5 rounded-md shadow-lg"
            style={{
              backgroundColor: "#FFFFFF",
              marginLeft: "2%",
              marginRight: "2%",
            }}
          >
            <span className="text-lg font-medium" style={{ color: "#4154F1" }}>
              Absent |{" "}
              <span className="text-sm" style={{ color: "#899BBD" }}>
                Today
              </span>
            </span>
            <div className="flex flex-row gap-5">
              <div
                className="h-16 w-16 rounded-full"
                style={{ backgroundColor: "#F6F6FE" }}
              ></div>
              <div className="flex flex-col">
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#4154F1" }}
                >
                  145
                </span>
                <span
                  className="font-bold text-sm"
                  style={{ color: "#012970" }}
                >
                  12%{" "}
                  <span
                    className="text-sm font-normal"
                    style={{ color: "#6C757D" }}
                  >
                    increase
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div
            className="flex-grow py-6 px-10 flex flex-col gap-5 rounded-md shadow-lg"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <span className="text-lg font-medium" style={{ color: "#4154F1" }}>
              Attendance |{" "}
              <span className="text-sm" style={{ color: "#899BBD" }}>
                This month
              </span>
            </span>
            <div className="flex flex-row gap-5">
              <div
                className="h-16 w-16 rounded-full"
                style={{ backgroundColor: "#F6F6FE" }}
              ></div>
              <div className="flex flex-col">
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#4154F1" }}
                >
                  145
                </span>
                <span
                  className="font-bold text-sm"
                  style={{ color: "#012970" }}
                >
                  12%{" "}
                  <span
                    className="text-sm font-normal"
                    style={{ color: "#6C757D" }}
                  >
                    increase
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
