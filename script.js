const videoElement = document.getElementById('video');
const startButton = document.getElementById('start-button');

//Prompt to select media steam, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata= () => {
        videoElement.onplay();
            }
    } catch (error) {
            //catch error here
    }
}

startButton.addEventListener('click', async () => {
    // Disable button
    startButton.disabled = true;
    // start in picture in picture
    await videoElement.requestPictureInPicture();
    // Reset buttion
    startButton.disabled = false;
});

// on load
selectMediaStream();