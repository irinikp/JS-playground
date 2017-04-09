var is_day = true;
function check_light() {
      var currentTime = new Date().getHours();
      if (0 <= currentTime&&currentTime < 6) {
            is_day = false;
      }
      if (20 <= currentTime&&currentTime < 24) {
            is_day = false;
      }
}
function getStylesheet() {
      if (is_day) {
            document.write("<link rel='stylesheet' href='css/day.css' type='text/css'>");
            document.write("<link rel='stylesheet' href='css/timeline.css' type='text/css'>");
            document.write("<link rel='stylesheet' href='css/skills.css' type='text/css'>");
      } else {
       document.write("<link rel='stylesheet' href='css/night.css' type='text/css'>");
       document.write("<link rel='stylesheet' href='css/timeline_night.css' type='text/css'>");
       document.write("<link rel='stylesheet' href='css/skills_night.css' type='text/css'>");
      }
}

check_light();
getStylesheet();
