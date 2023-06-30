import React from "react";
import SearchBar from "./share/search/SearchBar";
import Warrants from "./share/warrants/Warrants";
import vasil from "../assets/vasil.svg";
import { useNavigationState } from "../atoms/navigationAtom";
import IssueWarrantBlue from "./share/IssueWarrant/IssueWarrantBlue";
import IssueWarrantGray from "./share/IssueWarrant/IssueWarrantGray";

const Profiles2 = () => {
  const [navigationState, setNavigationState] = useNavigationState();

  return (
    <div className="w-full h-full select-none">
      <div className="grid grid-cols-6 gap-3 h-[79vh] pt-3">
        <div className="grid col-span-2">
          <div className="flex flex-col gap-3">
            <div className="">
              <h1 className="text-lg font-bold">STAFF</h1>
            </div>
            <div>
              <SearchBar />
            </div>
            <div className="flex flex-col gap-3 overflow-auto h-[66vh]">
              <Warrants
                name="VASILI HUSAK"
                description="id: 2423523"
                image={vasil}
              />
              <Warrants
                name="VASILI HUSAK"
                description="id: 2423523"
                image={vasil}
              />
              <Warrants
                name="VASILI HUSAK"
                description="id: 2423523"
                image={vasil}
              />
              <Warrants
                name="VASILI HUSAK"
                description="id: 2423523"
                image={vasil}
              />
              <Warrants
                name="VASILI HUSAK"
                description="id: 2423523"
                image={vasil}
              />
            </div>
          </div>
        </div>
        <div className="grid col-span-4 flex-col gap-3 ">
          <div className="flex flex-col gap-3 h-full">
            <div className="flex justify-between pr-5">
              <h1 className="text-lg font-bold">STAFF PROFILE</h1>
              <div className="bg-green-500 rounded-lg px-3 py-1 w-[15%] flex cursor-pointer justify-center items-center">
                <h1>SAVE</h1>
              </div>
            </div>
            <div className="h-[20%] bg-transparent rounded-lg px-5 mr-5 w-full">
              <div className="h-[100%] w-full flex gap-3 items-center">
                <img src={vasil} alt="" />
                <div className="w-full h-full flex flex-col justify-center">
                  <div className="flex justify-between">
                    <div className="text-2xl">VASILI HUSAK</div>
                    <div className="text-[#5D5D5D] text-md">ID: 2423523</div>
                  </div>
                  <hr />
                  <div className="w-full flex">
                    <div className="w-[100%]">
                      <div className="flex justify-between text-sm">
                        <div className="text-[#595959]">DEPARTMENT</div>
                        <div className="font-bold">LSPD</div>
                        <div className="text-[#595959]">DEPARTMENT</div>
                        <div className="font-bold">LSPD</div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <div className="text-[#595959]">RANK:</div>
                        <div className="font-bold justify-end">CADET</div>
                        <div className="text-[#595959]">RANK:</div>
                        <div className="font-bold">CADET</div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <h1 className="text-lg font-bold pl-2">PERMISSONS: </h1>
            <div className="h-[48vh] grid grid-cols-2 gap-3">
              <div className="grid grid-rows-5 gap-3">
                <IssueWarrantBlue />
                <IssueWarrantGray />
                <IssueWarrantGray />
                <IssueWarrantGray />
                <IssueWarrantBlue />
              </div>
              <div className="grid grid-rows-5 gap-3">
                <IssueWarrantBlue />
                <IssueWarrantBlue />
                <IssueWarrantGray />
                <IssueWarrantGray />
                <IssueWarrantBlue />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles2;
