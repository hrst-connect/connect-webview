[![Netlify Status](https://api.netlify.com/api/v1/badges/fc4431ab-43b0-4483-89a5-5bab8f08ce1f/deploy-status)](https://app.netlify.com/sites/connect-webview-patrol-poses/deploys)

# Connect WebView Patrol Positions Example
A WebView that displays the current pose of the robot (with respect to the Home Base), for details, see references below. The robot will patrol a predefined list of poses.

Click [here](https://connect-webview-patrol-poses.netlify.app/) for a live example.

## Setup
Install dependencies:
```shell
npm install
```

## Usage
Edit `src/data/poses.js` with your desired set of poses.

To build the example:
```shell
npm run build
```

To automatically build and serve the example with live updates locally:
```shell
npm run serve
```

Then go to [http://localhost:8080/](http://localhost:8080/) in your web-browser or send it to your Connect WebView.


## References
For information about coordinate frames, see [temi Guide: Set Robot Pose](https://temi-guide.readthedocs.io/en/latest/developer/set-robot-pose.html).