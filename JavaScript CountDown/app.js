const countdown =()=>{
    const countDate = new Date('June 21, 2021, 08:00:00').getTime();
    const current = new Date().getTime();
    const gap = countDate - current;

    //How time works
    const second = 1000;
    const minute = second * 60;
    const hour = minute *60;
    const day = hour * 24;

    //Calculate from the gap how many days are there
    const days_left = Math.floor(gap/day);
    console.log(days_left);
    const hours_left = Math.floor((gap%day)/hour)
    console.log(hours_left)
    const minutes_left = Math.floor((gap%hour)/minute)
    console.log(minutes_left)
    const seconds_left = Math.floor((gap%minute)/second)
    console.log(seconds_left)

    document.querySelector('.day').innerText = days_left;
    document.querySelector('.hour').innerText = hours_left;
    document.querySelector('.minute').innerText = minutes_left;
    document.querySelector('.second').innerText = seconds_left;
}

setInterval(countdown, 1000)