let metroAreaCenterCoordinates = [44.96, -93.2] //Array of latitude an longitude
let zoomLevel =9 //1=whole world, 10 = large city, 20 = city blocks

//Create the map
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)