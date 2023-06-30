import React from "react";
import face from "../assets/face.svg";
import record_voice_over from "../assets/record_voice_over.svg";
import launch from "../assets/launch.svg";
import perm_identity from "../assets/perm_identity.svg";
import input_exit from "../assets/input_exit.svg";
import analytics from "../assets/analytics.svg";
import pan_tool from "../assets/pan_tool.svg";
import { useNavigationState } from "../atoms/navigationAtom";

const Menu = () => {
  const [navigationState, setNavigationState] = useNavigationState();

  return (
    <>
      <div className="w-[80%] mt-5 h-[71vh] flex flex-col">
        <div className="flex flex-col gap-5 w-full text-lg ml-6">
          <div
            className="flex gap-2 cursor-pointer items-center mt-1  h-[3vh]"
            onClick={() => {
              setNavigationState({ path: "dashboard" });
            }}
          >
            <img src={analytics}></img>
            <h2
              className="w-[6vh] ml-2 mt-1"
              style={{
                color:
                  navigationState.path === "dashboard" ||
                  navigationState.path === ""
                    ? "white"
                    : "gray",
                transition: "color 0.4s",
              }}
            >
              DASHBOARD
            </h2>
            {navigationState.path === "dashboard" && (
              <div className="ml-3 w-2 h-2 rounded-full bg-blue-500"></div>
            )}
            {navigationState.path === "" && (
              <div className="ml-3 w-2 h-2 rounded-full bg-blue-500"></div>
            )}
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer  h-[3vh]"
            onClick={() => {
              setNavigationState({ path: "incidents" });
            }}
          >
            <img src={pan_tool}></img>
            <h2
              className="mt-2 ml-2"
              style={{
                color:
                  navigationState.path === "incidents" ||
                  navigationState.path === "incidents2" ||
                  navigationState.path === "incidentsModal" ||
                  navigationState.path === ""
                    ? "white"
                    : "gray",
                transition: "color 0.4s",
              }}
            >
              INCIDENTS
            </h2>
            {(navigationState.path === "incidents" ||
              navigationState.path === "incidents2" ||
              navigationState.path === "incidentsModal") && (
              <div className="ml-5 mt-0.5 w-2 h-2 rounded-full bg-blue-500"></div>
            )}
          </div>
          <div
            className="h-[3vh] items-center flex gap-2 cursor-pointer mt-1"
            onClick={() => {
              setNavigationState({ path: "profiles" });
            }}
          >
            <img src={face}></img>
            <h2
              className="mt-2 w-[5vh] ml-2"
              style={{
                color:
                  navigationState.path === "profiles" ||
                  navigationState.path === "ProfilesModal" ||
                  navigationState.path === ""
                    ? "white"
                    : "gray",
                transition: "color 0.4s",
              }}
            >
              PROFILES
            </h2>
            {(navigationState.path === "profiles" ||
              navigationState.path === "ProfilesModal") && (
              <div className="ml-5 mt-0.5 w-2 h-2 rounded-full bg-blue-500"></div>
            )}
          </div>
          <div
            className="flex gap-1.5 cursor-pointer  h-[3vh] items-center"
            onClick={() => {
              setNavigationState({ path: "reports" });
            }}
          >
            <img src={record_voice_over}></img>
            <h2
              className="mt-1 w-[6vh] ml-2"
              style={{
                color:
                  navigationState.path === "reports" ||
                  navigationState.path === ""
                    ? "white"
                    : "gray",
                transition: "color 0.4s",
              }}
            >
              REPORTS
            </h2>
            {navigationState.path === "reports" && (
              <div className="ml-3 w-2 h-2 rounded-full bg-blue-500"></div>
            )}
          </div>
          <div
            className="flex gap-2 cursor-pointer  h-[3vh] items-center"
            onClick={() => {
              setNavigationState({ path: "evidence" });
            }}
          >
            <img src={launch}></img>
            <h2
              className="mt-1 w-[5.7vh] ml-2"
              style={{
                color:
                  navigationState.path === "evidence" ||
                  navigationState.path === "evidence2" ||
                  navigationState.path === ""
                    ? "white"
                    : "gray",
                transition: "color 0.4s",
              }}
            >
              EVIDENCE
            </h2>
            {(navigationState.path === "evidence" ||
              navigationState.path === "evidence2") && (
              <div className="ml-4 w-2 h-2 rounded-full bg-blue-500"></div>
            )}
          </div>
          <div
            className="flex gap-2 cursor-pointer h-[3vh] items-center"
            onClick={() => {
              setNavigationState({ path: "staff" });
            }}
          >
            <img src={perm_identity}></img>
            <h2
              className="mt-1 w-[5.7vh] ml-2"
              style={{
                color:
                  navigationState.path === "staff" ||
                  navigationState.path === ""
                    ? "white"
                    : "gray",
                transition: "color 0.4s",
              }}
            >
              STAFF
            </h2>
            {navigationState.path === "staff" && (
              <div className="ml-4 w-2 h-2 rounded-full bg-blue-500"></div>
            )}
          </div>
        </div>
      </div>
      <div className="cursor-pointer text-lg w-[80%] ml-6">
        <div className="flex gap-2 items-center h-[3vh]">
          <img src={input_exit} className="h-4"></img>
          <h2 className="ml-2">EXIT</h2>
        </div>
      </div>
    </>
  );
};

export default Menu;
