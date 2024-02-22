import React from "react";
import SkillsSlider from "../components/SkillsSlider";
import Button from "../components/Button";
const Skills = () => {
  return (
    <div className="flex-1 flex flex-col  bg-[#ea4343] py-4">
      <div className="flex justify-around items-center">
        <Button
          style={
            "text-[#ea4343] hover:text-white bg-white hover:bg-transparent border-white"
          }
          text={"Technical Skills"}
        />
        <Button
          style={
            "text-[#ea4343] hover:text-white bg-white hover:bg-transparent border-white"
          }
          text={"Soft Skills"}
        />
      </div>
      <div className="w-full flex-1 px-10 grid grid-cols-2 gap-10 justify-center items-center ">
        <SkillsSlider percentage={50} title={"React Js"} />
        <SkillsSlider percentage={100} title={"Node js"} />
        <SkillsSlider percentage={20} title={"Express js"} />
        <SkillsSlider percentage={30} title={"Version Control Git"} />
        <SkillsSlider percentage={50} title={"MongoDb"} />
        <SkillsSlider percentage={60} title={"Tailwind CSS"} />
        <SkillsSlider percentage={90} title={"JavaScript"} />
        <SkillsSlider percentage={80} title={"API Integration "} />
      </div>
    </div>
  );
};

export default Skills;
