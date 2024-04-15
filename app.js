function getPlatform() {
    return navigator.platform;
  }
async function initializeAutocomplete(text) {
    var options = {
        types: ["(regions)"],
        componentRestrictions: { country: "PK" },
    };

    return new Promise((resolve, reject) => {
        var autocompleteService = new google.maps.places.AutocompleteService();
        autocompleteService.getPlacePredictions(
            { input: text, options: options },
            (predictions, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    let locations = [];

                    const promises = predictions.map(async (prediction) => {
                        const location = await getLatLongFromAddress(prediction.description);
                        locations.push(location);
                    });

                    Promise.all(promises).then(() => {
                        resolve(locations);
                    });
                } else {
                    reject(status);
                }
            }
        );
    });
}

async function getLatLongFromAddress(address) {
    return new Promise((resolve, reject) => {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: address }, (results, status) => {
            if (status === "OK" && results.length > 0) {
                var location = results[0].geometry.location;
                var lat = location.lat();
                var lng = location.lng();
                resolve({
                    name: address,
                    latitude: lat,
                    longitude: lng,
                });
            } else {
                reject("Geocode was not successful for the following reason: " + status);
            }
        });
    });
}

function showNotifications(title, body, icon) {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications");
      return;
    }
  
    const permission = Notification.permission;
    if (permission === "granted") {
      showNotification(title, body, icon);
    } else if (permission === "default") {
      requestAndShowPermission();
    } else {
      alert("Notifications are blocked. Please change your browser settings.");
    }
  }
  
  function requestAndShowPermission() {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showNotification(); // Assuming you meant to call this if permission is granted
      }
    }).catch(error => {
      console.error("Error requesting permission:", error);
    });
  }
  
  function showNotification(title, body, icon) {
    console.log("show notification");
    try {
      const notification = new Notification(title, { body, icon });
      notification.onclick = () => {
        notification.close();
        // Add logic to focus your window if needed
      };
    } catch (error) {
      console.error("Error creating notification:", error);
    }
  }
  