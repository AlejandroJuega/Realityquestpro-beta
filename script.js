let map, marker;

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const location = { lat: pos.coords.latitude, lng: pos.coords.longitude };

      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
        mapTypeId: "roadmap",
      });

      marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
      });

      document.getElementById("location-bar").value = "Ubicación actual detectada";

      const mission = randomMission();
      document.getElementById("mission-name").textContent = mission;
    });
  }
}

function randomMission() {
  const missions = [
    "Recolecta el artefacto oculto",
    "Explora la zona segura",
    "Derrota al guardián del área",
    "Encuentra la señal misteriosa",
    "Investiga el punto de energía"
  ];
  return missions[Math.floor(Math.random() * missions.length)];
}

window.onload = initMap;
