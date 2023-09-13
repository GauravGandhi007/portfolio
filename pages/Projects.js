import React from "react";
import Projectitem from "../components/Projectitem";
import { Assets } from "../components/Assets";
import Head from "next/head";
const Projects = () => {

  
  return (
    <>
    <Head>
    <link
      rel="shortcut icon"
      href="https://res.cloudinary.com/dbwc39val/image/upload/v1670838133/myportfolio/favicon_rnizwp.ico"
    />
    <title>PROJECT</title>
  </Head>
  <div className=" bg-black top-[50px] sm:top-[80px] relative  w-full min-h-screen text-white py-16 px-4 sm:px-16 ">
      <div className="flex flex-col  space-y-10">
        <h1 className="text-[30px] md:text-[40px] border-b-2 text-[#006a91] bold">PROJECTS</h1>
        <h2 className="text-[25px] md:text-[35px] text-[#00D8FF] font-semibold">
          What I Have Done
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* start from here */}
          <Projectitem
            nam={Assets.projects.weather.name}
            imagesrc={Assets.projects.weather.imagesrc}
            technology={Assets.projects.weather.technology}
            demo={Assets.projects.weather.demo}
          />
          <Projectitem
            nam={Assets.projects.codingpartner.name}
            imagesrc={Assets.projects.codingpartner.imagesrc}
            technology={Assets.projects.codingpartner.technology}
            demo={Assets.projects.codingpartner.demo}
          />
          <Projectitem
            nam={Assets.projects.textutils.name}
            imagesrc={Assets.projects.textutils.imagesrc}
            technology={Assets.projects.textutils.technology}
            demo={Assets.projects.textutils.demo}
          />
          <Projectitem
            nam={Assets.projects.kajaria.name}
            imagesrc={Assets.projects.kajaria.imagesrc}
            technology={Assets.projects.kajaria.technology}
            demo={Assets.projects.kajaria.demo}
          />
          <Projectitem
            nam={Assets.projects.havels.name}
            imagesrc={Assets.projects.havels.imagesrc}
            technology={Assets.projects.havels.technology}
            demo={Assets.projects.havels.demo}
          />
          <Projectitem
            nam={Assets.projects.mercedes.name}
            imagesrc={Assets.projects.mercedes.imagesrc}
            technology={Assets.projects.mercedes.technology}
            demo={Assets.projects.mercedes.demo}
          />
          <Projectitem
            nam={Assets.projects.Housing.name}
            imagesrc={Assets.projects.Housing.imagesrc}
            technology={Assets.projects.Housing.technology}
            demo={Assets.projects.Housing.demo}
          />
          <Projectitem
            nam={Assets.projects.facebook.name}
            imagesrc={Assets.projects.facebook.imagesrc}
            technology={Assets.projects.facebook.technology}
            demo={Assets.projects.facebook.demo}
          />
          <Projectitem
            nam={Assets.projects.basic.name}
            imagesrc={Assets.projects.basic.imagesrc}
            technology={Assets.projects.basic.technology}
            demo={Assets.projects.basic.demo}
          />

          {/* ends here */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Projects;
