import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { debugData } from "./utils/debugData";
import { useNavigationState } from "./atoms/navigationAtom";
import Incidents from "./components/Incidents";
import Profiles from "./components/Profiles";
import Incidents2 from "./components/Incidents2";
import Reports from "./components/Reports";
import Evidence from "./components/Evidence";
import { useModalState } from "./atoms/modalState";
import Evidence2 from "./components/Evidence2";
import Staff from "./components/Staff";
import IncidentsModal from "./components/share/modal/IncidentsModal";
import ProfilesModal from "./components/share/modal/ProfilesModal";
import LSapp from "./assets/LSapp.svg";
import { MDT_SHOW } from "./api";

// This will set the NUI to visible if we are\
// developing in browser
debugData([
  {
    action: MDT_SHOW,
    data: true,
  },
]);

function App() {
  const [navigationState, setNavigationState] = useNavigationState();
  const [modalState, setModalState] = useModalState();

  const renderPage = React.useCallback(() => {
    switch (navigationState.path) {
      case "home":
        return <Home />;
      case "incidents":
        return <Incidents />;
      case "incidents2":
        return <Incidents2 />;
      case "profiles":
        return <Profiles />;
      case "reports":
        return <Reports />;
      case "evidence":
        return <Evidence />;
      case "evidence2":
        return <Evidence2 />;
      case "staff":
        return <Staff />;
      default:
        return <Home />;
    }
  }, [navigationState]);

  return (
    <>
      <div
        className="relative bg-transparent flex flex-col justify-center items-center min-h-screen w-full overflow-hidden"
        onClick={() => {
          if (modalState.profile === true || modalState.incident === true)
            setModalState({ profile: false, incident: false });
        }}
      >
        <div
          className={`w-[80%] min-h-[80%] max-h-[90vh] rounded-lg p-3 py-4 items-center relative transition-all ${
            modalState.profile || modalState.incident ? "blur-sm" : ""
          }`}
        >
          <div
            className={`h-full w-full top-0 left-0 rounded-lg bg-[#141517] -z-40 p-3 py-4 items-center absolute transition-all ${
              modalState.profile || modalState.incident ? "blur-sm" : ""
            }`}
          ></div>
          <Header />
          <div className="grid grid-cols-12 grid-rows-1 w-full">
            <div className="col-span-2">
              <Menu />
            </div>
            <div className="col-span-10">{renderPage()}</div>
          </div>
        </div>
        <img className="absolute -z-10" src={LSapp} alt="" />
      </div>
      {modalState.incident && <IncidentsModal />}
      {modalState.profile && <ProfilesModal />}
    </>
  );
}

export default App;
