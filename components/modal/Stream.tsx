import { Card, CardBody, CardHeader, user } from "@nextui-org/react";
import html2canvas from "html2canvas";

export default function Stream() {

  // handle clicking the screenshot button
  function handleScreenshot() {
    function handleScreenshot() {
      // Get the iframe element
      const iframe = document.querySelector('iframe');
    
      // Create a canvas element to capture the screenshot
      const canvas = document.createElement('canvas');
      if (iframe) {
        canvas.width = iframe.clientWidth;
        canvas.height = iframe.clientHeight;
      } else {
        
      }
    
      const context = canvas.getContext('2d');
    
      if (context) {
        // Draw the iframe content onto the canvas
        context.drawImage(iframe, 0, 0, canvas.width, canvas.height);
      }
    
      // Convert the canvas content to a data URL
      const dataUrl = canvas.toDataURL('image/png');
    
      // Create an anchor element to trigger the download
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'screenshot.png'; // You can set a default file name
      a.click();
    }
    
  }

  // handle clicking the record button
  function handleRecord() {
    console.log("record clicked");
  }

  return (
    <Card className="modal">
      <CardBody className="flex flex-col gap-4">
        <iframe
          height="425"
          src="https://www.youtube.com/embed/CEMPq_r8UYQ?si=InQqEeCoB3Vcjukm"
          allowFullScreen
        ></iframe>
        <div className="flex gap-4 justify-end">
          <button className="btn screenshot" onClick={handleScreenshot}>
            Screenshot
          </button>
          <button className="btn record" onClick={handleRecord}>
            Record
          </button>
        </div>
        <div className="flex justify-end">
          <button className="btn close">Return</button>
        </div>
      </CardBody>
    </Card>
  );
}
