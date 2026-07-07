let map;
let marker;

function initMap() {
    navigator.geolocation.getCurrentPosition(async(position)=>{
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        map = new google.maps.Map(document.getElementById("map"),{
          center:{
                lat:lat,
                lng:lon
            },  
       zoom: 15
        });
        marker = new google.maps.Marker({
            position:{
                lat:lat,
                lng:lon
            },
            map:map
        });
         try {
            const result = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
            );
            const data = await result.json();
            console.log(data); 
            alert("Current Location: " + data.display_name);

        } catch (error) {
            console.log(error);
            alert("Failed to fetch location details.");
        }
    });
}

async function searchLocation() {
    try {
        const place = document.getElementById("locationInput").value;
        const result = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${place}&format=json&limit=1`
        );
        const data = await result.json();
        console.log(data);
        const lat = Number(data[0].lat);
        const lon = Number(data[0].lon);
        map.setCenter({
            lat: lat,
            lng: lon
        });
        map.setZoom(15);
        marker.setPosition({
            lat: lat,
            lng: lon
        });
        alert("Location: " + data[0].display_name);
    } catch (error) {
        console.log(error);
        alert("Location not found.");
    }
}
