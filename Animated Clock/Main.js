
function updateClock(){
        const now = new Date();
        const hour = now.getHours().toString().padStart(2,0);
        const minutes = now.getMinutes().toString().padStart(2,0);
        const seconds = now.getSeconds().toString().padStart(2,0);
        const timeString = `${hour}:${minutes}:${seconds}`;

        document.getElementById("clock").textContent = timeString;

        if(hour > 0 && hour < 12){
                document.getElementById("welcome").textContent = "Good Morning";
                document.getElementById("format").textContent = "AM";
        }else if(hour > 12 && hour < 16){
                document.getElementById("welcome").textContent = "Good Afternoon";
                document.getElementById("format").textContent = "PM";
        }else if(hour > 16 && hour < 20){
                document.getElementById("welcome").textContent = "Good Evening";
                document.getElementById("format").textContent = "PM";
                document.getElementById("mainbox")
        }else{
                document.getElementById("welcome").textContent = "Good night";
                document.getElementById("format").textContent = "PM";
        }

        if(hour > 6 && hour < 19){
                document.getElementById("mainbox").style.backgroundImage = "url('./morning.gif')";
        }else{
                document.getElementById("mainbox").style.backgroundImage = "url('./night.gif')";
        }
}

updateClock();
setInterval(updateClock,1000);