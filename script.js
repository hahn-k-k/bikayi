// splash screen functionality
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000)
        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300)
    })
})

// Waves Animations
let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value + 4 + 'px';
    wave2.style.backgroundPositionX = 300 + value + -4 + 'px';
    wave3.style.backgroundPositionX = 200 + value + 2 + 'px';
    wave4.style.backgroundPositionX = 100 + value + -2 + 'px';
})

// Using the Fetch API to retrieve the Data from data.json ==> script.js ==> index.html  
fetch("./data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        /*
        for getting whole data
        console.log(data);

        for getting ID
        console.log(data.prizes[0].laureates[0].id);

        for getting firstname
        console.log(data.prizes[0].laureates[0].firstname);
        document.querySelector("#firstname").innerHTML = data.prizes[i].laureates[j].firstname;

        for getting lastname
        console.log(data.prizes[0].laureates[0].surname);
        document.querySelector("#surname").innerHTML = data.prizes[i].laureates[j].surname;

        for getting year
        console.log(data.prizes[0].year);
        document.querySelector("#year").innerHTML = data.prizes[i].year;

        for getting category
        console.log(data.prizes[0].category);
        document.querySelector("#category").innerHTML = data.prizes[i].category;
        */


        let output = "";

        for (let i = 0; i < Object.keys(data.prizes).length; i++) {
            try {
                for (let j = 0; j < 4; j++) {
                    /*
                    this was useful for the HTML Table
                    output += `
                        <div class="table-row">
                            <div class="table-cell first-cell">
                                <p id="firstname">${data.prizes[i].laureates[j].firstname}</p>
                            </div>
                            <div class="table-cell first-cell">
                                <p id="surname">${data.prizes[i].laureates[j].surname}</p>
                            </div>
                            <div class="table-cell first-cell">
                                <p id="year">${data.prizes[i].year}</p>
                            </div>
                            <div class="table-cell first-cell">
                                <p id="category">${data.prizes[i].category}</p>
                            </div>
                        </div>
                    `;
                    */
                    output += `
                        <div class="card">
                            <div class="box">
                                <div class="content">
                                    <h2 id="id-no">${data.prizes[i].laureates[j].id}</h2>
                                    <h3>${data.prizes[i].laureates[j].firstname}</h3>
                                    <h4>${data.prizes[i].laureates[j].surname}</h4>
                                    <p>${data.prizes[i].year}</p>
                                    <p>${data.prizes[i].category}</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>    
                    `;
                }
            } catch (e) {

            }
        }


        document.querySelector(".container").innerHTML = output;

    });