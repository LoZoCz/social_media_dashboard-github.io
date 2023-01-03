const clrChange = document.querySelector('.switch-box');
const title1 = document.querySelector('.title-1');
const title2 = document.querySelector('.title-2');
const bigCards = document.querySelectorAll('.follow-card');
const littleCards = document.querySelectorAll('.little-card');
const nicknames = document.querySelectorAll('.nickname');
const followers = document.querySelectorAll('.followers');
const littleTitle = document.querySelectorAll('.little-title');
const littleInfo = document.querySelectorAll('.little-info');
const numberFollowers = document.querySelectorAll('.number-folowers');

clrChange.addEventListener('change', () => {
    if(clrChange.checked){
        // console.log('działa');
        // console.log(bigCards);
        // console.log(ps);

        document.body.style.background = 'linear-gradient(0deg, hsl(230, 17%, 14%) 70%, hsl(232, 19%, 15%) 70%)'
        bigCards.forEach(element => element.style.background = 'hsl(228, 28%, 20%)');
        littleCards.forEach(element => element.style.background = 'hsl(228, 28%, 20%)');
        title1.style.color = 'hsl(0, 0%, 100%)';
        title2.style.color = 'hsl(0, 0%, 100%)';
        nicknames.forEach(element => element.style.color = 'hsl(228, 34%, 66%)');
        followers.forEach(element => element.style.color = 'hsl(228, 34%, 66%)');
        littleTitle.forEach(element => element.style.color = 'hsl(228, 34%, 66%)');
        littleInfo.forEach(element => element.style.color = 'hsl(0, 0%, 100%)');
        numberFollowers.forEach(element => element.style.color = 'hsl(0, 0%, 100%)');
    } else {
        document.body.style.background = 'linear-gradient(0deg, var(--clr-bg) 70%, var(--clr-bg-top) 70%)'
        bigCards.forEach(element => element.style.background = '');
        littleCards.forEach(element => element.style.background = '');
        title1.style.color = '';
        title2.style.color = '';
        nicknames.forEach(element => element.style.color = '');
        followers.forEach(element => element.style.color = '');
        littleTitle.forEach(element => element.style.color = '');
        littleInfo.forEach(element => element.style.color = '');
        numberFollowers.forEach(element => element.style.color = '');
    }
});