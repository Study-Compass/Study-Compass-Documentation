# Mobile Development Testing

## **Overview**

This documentation provides a step-by-step guide on how to view and test Study Compass on a mobile device. By following these steps, you can ensure that your features are responsive and work well across different screen sizes. You can always test responsiveness in inspect element but it's always better practice to view the actual environment.

## **Guide**

1. **Network Configuration**: Ensure your development server is accessible to your mobile device. This typically involves being on the same local network (e.g., Wi-Fi). Being on either eduroam or rpi_wpa2 should be sufficient

## **Steps to View Your React Project on a Mobile Device**

### **1. Ensure Your Development Server is Running**
Start your React development server:
```bash
npm start
```

### **2. Find Your Computer's Local IP Address**
On macOS or Linux, open a terminal and run:
```bash
ifconfig
```
On Windows, open Command Prompt and run:
```bash
ipconfig
```
Look for the IP address associated with your local network connection (usually something like `192.168.x.x` labeled with `IPv4 Address`).

### **3. Access the Development Server from Your Mobile Device**
Open a web browser on your mobile device and enter your computer’s IP address followed by the port number (default is `3000`):
```
// example ip address
http://187.235.x.x:3000
```

### **4. Enable Mobile Debugging**
#### **Chrome on Android**
1. Connect your Android device to your computer via USB.
2. Open Chrome on your computer and go to `chrome://inspect`.
3. Ensure "Discover USB devices" is checked.
4. You should see your device listed. Click on "Inspect" to open the Chrome Developer Tools for your mobile device.

#### **Safari on iOS**
1. Connect your iOS device to your Mac via USB.
2. Open Safari on your Mac and go to `Develop` in the menu bar.
3. Select your connected device.
4. Click on the page you want to inspect to open the Safari Web Inspector.

### **5. Adjust Responsiveness**
Use CSS media queries and responsive design principles to ensure your app looks good on all screen sizes. Example:
```css
/* Example media query */
@media (max-width: 600px) {
  .your-class {
    font-size: 14px;
  }
}
```

By following these steps, you can effectively view and test your React project on a mobile device, ensuring a smooth and responsive user experience.