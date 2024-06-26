import axios from "axios"

const username = process.env.USERNAME
const password = process.env.PASSWORD
const recordId = process.env.RECORD_ID

export async function downloadFile(downloadurl : string){
        const response = await axios.get(downloadurl, {
            responseType: "blob", // Important for binary data
        });

        const fileName = 'prince_sharma_resume.pdf'

        // Create a temporary anchor element to trigger the download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        // Setting filename received in response
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
}