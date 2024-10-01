import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiJquery, SiTailwindcss, SiBootstrap, SiPython, SiMysql, SiGit, SiLinux } from "react-icons/si";

// Array of background colors
const bgColors = [
  "bg-red-700", "bg-blue-700", "bg-green-700", "bg-yellow-600", "bg-purple-700", "bg-pink-700", "bg-teal-600"
];

// Tech skills array with corresponding icons
const techSkills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  
  { name: "React", icon: <FaReact /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "AWS IAM", icon: <FaAws /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "jQuery", icon: <SiJquery /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "AWS EC2", icon: <FaAws /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Python", icon: <SiPython /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "AWS S3", icon: <FaAws /> },
  { name: "Version Control", icon: <SiGit /> },
  { name: "Linux", icon: <SiLinux /> },
];

// TechList component
const TechList = () => (
  <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
    {techSkills.map((skill, index) => (
      <div 
        key={index} 
        className={`${bgColors[index % bgColors.length]} tracking-tight text-sm md:text-md font-medium text-white md:font-semibold rounded-xl  md:rounded-2xl  md:p-3  py-3 md:px-4  flex gap-2 justify-center items-center`}
      >
        <div className="text-sm md:text-4xl">{skill.icon}</div> {/* Display icon */}
        <p>{skill.name}</p> {/* Display skill name */}
      </div>
    ))}
  </div>
);

export default TechList;
