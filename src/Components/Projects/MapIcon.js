// Font Awesome
import { faGithub, faSwift, faJava, faPython, faCss3Alt, faHtml5, faJsSquare, faReact, faNode, faRaspberryPi} from '@fortawesome/free-brands-svg-icons';

const global_mapIcon = (name) => {
    var icon = {
        img: null,
        color: null
    };

    if (name === "swift") {
        icon.img = faSwift;
        icon.color = "#FF9900";
    } else if (name === "java") {
        icon.img = faJava;
        icon.color = "#D65645";
    } else if (name === "python") {
        icon.img = faPython;
        icon.color = "#2E4A69";
    } else if (name === "css") {
        icon.img = faCss3Alt;
        icon.color = "#4195D6"
    } else if (name === "html") {
        icon.img = faHtml5;
        icon.color = "#E06D3C";
    } else if (name === "javascript") {
        icon.img = faJsSquare;
        icon.color = "#F1DE4F";
    } else if (name === "react") {
        icon.img = faReact;
        icon.color = "#62D5FB";
    } else if (name === "node") {
        icon.img = faNode;
        icon.color = "#84AF35";
    } else if (name === "raspberry-pi") {
        icon.img = faRaspberryPi;
        icon.color = "#A72842";
    } else if (name === "github") {
        icon.img = faGithub;
    }

    return icon;
}




export default global_mapIcon;