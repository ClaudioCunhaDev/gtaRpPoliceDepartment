import React from "react";
import Announcement from "./share/announcementDiv/Announcement";
import ArrowRight from "./share/arrows/ArrowRightButton";
import ArrowLeft from "./share/arrows/ArrowLeftButton";
import SearchBar from "./share/search/SearchBar";
import Warrants from "./share/warrants/Warrants";
import Warning from "./share/warning/Warning";
import vasil from "../assets/vasil.svg";
import warningIMG from "../assets/warning_amber.svg";

const Announcements = () => {
  return (
    <div className="h-[79vh] w-full pt-3 pl-3 select-none">
      <div className="flex h-[1.5rem] gap-3">
        <h2 className="font-bold text-lg">ANNOUNCEMENTS</h2>
        <div className="flex gap-3">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
      <div className="h-[74vh]">
        <div className="h-[32vh] pt-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="grid col-span-1 h-[30vh]">
              <Announcement
                title="ANNOUNCEMENT NAME"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT ONLY FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY UNCHANGED. IT WAS POPULARISED IN ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY"
                date="12.11.22"
                hour="19:40"
                time="2 HOURS AGO"
              />
            </div>
            <div className="grid col-span-1 h-[30vh]">
              <Announcement
                title="ANNOUNCEMENT NAME"
                description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK. IT HAS SURVIVED NOT ONLY FIVE CENTURIES, BUT ALSO THE LEAP INTO ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY UNCHANGED. IT WAS POPULARISED IN ELECTRONIC TYPESETTING, REMAINING ESSENTIALLY"
                date="12.11.22"
                hour="19:40"
                time="2 HOURS AGO"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col pt-3">
            <div>
              <div className="text-lg font-bold">
                <h1 className="">WARRANTS</h1>
              </div>
              <div>
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-3">
            <div>
              <div className="text-lg font-bold">
                <h1 className="">REPORTS</h1>
              </div>
              <div>
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[35vh] pt-3">
          <div className="h-full w-full grid grid-cols-2 gap-3">
            <div className="grid h-full gap-1">
              <div className="flex flex-col gap-2">
                <div className="">
                  <Warrants
                    name="VASILI HUSAK"
                    description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                    image={vasil}
                  />
                </div>
                <div className="">
                  <Warrants
                    name="VASILI HUSAK"
                    description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                    image={vasil}
                  />
                </div>
              </div>
            </div>
            <div className="grid h-full gap-1">
              <div className="flex flex-col gap-2">
                <div className="">
                  <Warning
                    name="VASILI HUSAK"
                    description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                    image={warningIMG}
                  />
                </div>
                <div className="">
                  <Warning
                    name="VASILI HUSAK"
                    description="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPESETTING INDUSTRY. LOREM IPSUM HAS BEEN THE INDUSTRY'S"
                    image={warningIMG}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
