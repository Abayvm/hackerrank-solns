// Time Conversion

function timeConversion(s) {
    if (typeof s !== 'string') {
        return "Invalid input. Please provide a string.";
    }

    const timeArr = s.split(":");
    const hours = parseInt(timeArr[0]);
    const minutes = parseInt(timeArr[1]);
    const seconds = parseInt(timeArr[2].substring(0, 2)); // remove 'AM' or 'PM'
    const meridiem = timeArr[2].substring(2); // extract 'AM' or 'PM'
  
    let militaryHours = hours;
  
    if (meridiem === "PM" && hours < 12) {
        militaryHours += 12;
    } else if (meridiem === "AM" && hours === 12) {
        militaryHours = 0;
    }
    
    const militaryTime = `${militaryHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  
    return militaryTime;
}