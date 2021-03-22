# Connect Webview
This is an example of how to build a page for Connect.

Click [here](https://hapi-robo.github.io/connect-webview/) to see the example in your web-browser.

## API
This is a list of all APIs that are available.

Description | API
--- | ---
Call resource pool | [connect.call()](#connectcall)
Resource pool status listener | [connect.addStatusListener()](#connectaddstatuslistener)
Go to a saved location | [connect.gotoLocation()](#connectgotolocation)
Get saved locations | [connect.getLocations()](#connectgetlocations)

---
### connect.call()
The method `connect.call()` initiates a call to an available operator of a resource pool.

#### Syntax
```javascript
connect.call(resourcePoolId);
```

#### Parameters
`resourcePoolId`: A resource pool's unique identifier `String`.

#### Return value
`undefined`

#### Example
HTML
```html
<input type="button" value="Call" id="button-call" />
```

JavaScript
```javascript
const buttonCall = document.querySelector('#button-call');
buttonCall.addEventListener('click', () => {
  connect.call(resourcePoolId);
});
```

---
### connect.addStatusListener()
The method `connect.addStatusListener()` sets up a function that will be called whenever the status of the resource pool changes.

#### Syntax
```javascript
connect.addStatusListener(listener, resourcePoolId);
```

#### Parameters
`listener`: A `String` name of the JavaScript function that receives a notification when the status of the resource pool changes. The function must have `availableMembers` as an argument, which indicates the number of members in a resource pool that are currently available.

`resourcePoolId`: A resource pool's unique identifier `String`.

#### Return value
`undefined`

#### Example
HTML
```html
<h1 id="status"></h1>
```

JavaScript
```javascript
// Status listener
function onStatusChange(availableMembers) {
  let status = document.querySelector('#status');
  if (availableMembers > 0) {
    status.innerHTML = `Available (${availableMembers})`;
  } else {
    status.innerHTML = 'Unavailable';
  }
}

// Register status listener
connect.addStatusListener('onStatusChange', resourcePoolId);
```

---
### connect.gotoLocation()
The method `connect.gotoLocation()` commands the robot to go to a predefined location.

#### Syntax
```javascript
connect.gotoLocation(locationName);
```

#### Parameters
`locationName`: A location name `String`.

#### Return value
`undefined`

#### Example
JavaScript
```javascript
connect.goto('home base');
```

---
### connect.getLocations()
The method `connect.getLocations()` a list of all saved locations.

#### Syntax
```javascript
connect.getLocations();
```

#### Parameters
`none`

#### Return value
`locationList`: A `String` `List` of all saved locations

#### Example
HTML
```html
<select id="location-list"></select> 
```

JavaScript
```javascript
const locations = JSON.parse(connect.getLocations());

const locationList = document.querySelector('#location-list');
locations.forEach((location) => {
  const option = document.createElement('option');
  option.innerHTML = location;
  locationList.appendChild(option);
});
```

