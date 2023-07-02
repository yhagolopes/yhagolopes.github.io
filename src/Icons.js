import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Icons() {
  return (
    <div className="icons-container">
      <a href="https://github.com/yhagolopes/" 
         target="_blank" rel="noopener noreferrer" className="icon icon-github">
        <BsGithub />
      </a>

      <a href="https://www.linkedin.com/in/yhagolopes/" 
         target="_blank" rel="noopener noreferrer" className="icon icon-linkedin">
        <BsLinkedin />
      </a>
    </div>
  );
}

export default Icons;