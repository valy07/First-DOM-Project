let students = [
    {
        name: 'Marian',
        gender: 'male',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Angel'
    },
    {
        name: 'Cristina',
        gender: 'female',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Bear'
    },
    {
        name: 'Costel',
        gender: 'male',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Loki'
    },
    {
        name: 'Diana',
        gender: 'female',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Garfield'
    },
    {
        name: 'Marius',
        gender: 'male',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Coco'
    },
    {
        name: 'Izabela',
        gender: 'female',
        avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Salem'
    }
];

const mainHeader = document.querySelector('h1');
mainHeader.classList.add('header');

const mainDiv = document.querySelector('.main-container');

for (let i = 0; i < students.length; i++) {
    
    let avatar = document.createElement('img');
    avatar.src = `${students[i].avatar}`;
    avatar.classList.add('avatar');
    
    let newDivs = document.createElement('div');
    newDivs.innerText = `${students[i].name}`;

    newDivs.appendChild(avatar);

    if (students[i].gender === 'female') {
        newDivs.classList.add('female', 'card');
    } else {
        newDivs.classList.add('male', 'card');
    }

    
    mainDiv.appendChild(newDivs);
}