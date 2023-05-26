// About Sections 
let about = document.querySelector("section#about .row:last-child");

let aboutContent = [
    'I am a very honest and bubbly person. I enjoying interacting with different people and learning about different things and in different work enviroments.',
    "I am very passionate about coding and problem sovling. I can get very excited with certain topics and certain types of challengers. I learnt about HTML, CSS & Bootstrap which was fun and exciting. However, what I am truly interested in learning is JavaScript."
]

// loop through the content 
aboutContent.forEach( (content)=>{
    about.innerHTML += `
    <p class="lead">${content}</p>
    `
});

// Education
let education = [
    {
        id: 1,
        year: 2023,
        description: 'Studying Full Stack Software Developmet',
        place: 'Life Choices',
        type: '',
        certificate: ''
    },
    {
        id: 2,
        year: 2020,
        description: 'I Gradutated from chef school',
        place: "",
        type: '',
        certificate: ''
    },
    {
        id: 3,
        year: 2019,
        description: 'I got my certficate from Woolworths Test Kitchen',
        place: 'Woolworths Head Office',
        type: '',
        certificate: ''
    },
    {
        id: 7,
        year: 2018,
        description: 'Grade 12',
        place: 'Voortrekker HighSchool',
        type: 'Certificate',
        certificate: ''
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})
