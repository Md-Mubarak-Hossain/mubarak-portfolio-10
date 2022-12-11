import DownloadLink from "react-download-link";
import File from "../../components/assets/mubarak_resume.pdf";

// import One from "./one.csv";
export default function Pdf() {
    const downloadPDFFile = () => {
        const element = document.createElement("a");
        element.download = { File };
        element.click();
    };

    return (
        <div className="App">
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={() => downloadPDFFile}>Download</button>
            <DownloadLink
                label="download"
                filename="mubarak-resume.pdf"
                exportFile={() => File}
            />
        </div >
    );
}
