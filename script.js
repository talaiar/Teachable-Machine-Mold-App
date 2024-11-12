async function initWebcam() {
    const video = document.getElementById('webcam');

    // Check if the browser supports webcam access
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
            // Request access to the webcam
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
        } catch (error) {
            console.error("Error accessing webcam: ", error);
        }
    } else {
        alert("Your browser does not support accessing the webcam.");
    }
}
