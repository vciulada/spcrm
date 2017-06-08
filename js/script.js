if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(eventData) {
        // Acceleration
      /*console.log(eventData.acceleration.x);
        console.log(eventData.acceleration.y);
        console.log(eventData.acceleration.z);

        // Acceleration including gravity
        console.log(eventData.accelerationIncludingGravity.x);
        console.log(eventData.accelerationIncludingGravity.y);
        console.log(eventData.accelerationIncludingGravity.z);*/

        // Rotation rate
        document.getElementById('alpha').innerHTML = eventData.rotationRate.alpha;
        console.log(eventData.rotationRate.beta);
        console.log(eventData.rotationRate.gamma);
    }, false);
}
