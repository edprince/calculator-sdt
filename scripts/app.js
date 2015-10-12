window.addEventListener('load', function() {
  console.log("Hello");
  var button = document.getElementById('btn_calculate');
  button.addEventListener('click', function() {
    var speed = document.getElementById('speed');
    speed = speed.value;
    var distance = document.getElementById('distance');
    distance = distance.value;
    var time = document.getElementById('time');
    time = time.value;
    console.log(speed, distance, time);
    var result;
    if ((checkUsage(speed)) && (checkUsage(distance))) {
      result = calculateTime(speed, distance);
    } else if ((checkUsage(speed)) && (checkUsage(time))) {
      result = calculateDistance(speed, time);
    } else if ((checkUsage(distance)) && (checkUsage(time))) {
      result = calculateSpeed(distance, time);
    } else {
      alert("Please enter two values!");
    }
    button.innerText = result;
  });

  speed.addEventListener('blur', function() {
    if (checkForText(speed)) {
      changeColor('speed', '#BBDEFB');
    }
  });
  distance.addEventListener('blur', function() {
    if (checkForText(distance)) {
      changeColor('distance', '#64B5F6');
    }
  });
  time.addEventListener('blur', function() {
    if (checkForText(time)) {
      changeColor('time', '#1565C0');
    }
  });

});

function checkForText(el) {
  console.log(el.value);
  if (el.value) {
    return true;
  }
}

function changeColor(el, color) {
 console.log("Running changeColor function");
 document.getElementById(el).style.background=color; 
 document.getElementById(el).style.border=0;
}

function checkUsage(x) {
  console.log("Checking usage");
  if (x) {
    return true;
  }
}

function calculateTime(s, d) {
  return ((d / s).toFixed(2)).toString() + 's';
}

function calculateSpeed(d, t) {
  return ((d / t).toFixed(2)).toString() + 'm/s';
}

function calculateDistance(s, t) {
  return ((s * t).toFixed(2)).toString() + 'm';
}
