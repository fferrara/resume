/**
 * Created by flavio on 12/03/2017.
 */

function createStars(message) {
    let items = [];

    for (let skill = 0; skill < message.stars.length; skill++){
        let name = message.message[skill];
        let count = message.stars[skill];

        let container = document.createElement('div');
        container.className = 'skill';
        let star;

        let label = document.createElement('span');
        label.className = 'stars-name';
        label.innerHTML = name;
        container.appendChild(label);

        let intCount = Math.floor(count);
        let i = 0;
        for (;i < intCount;i++){
            star = document.createElement('label');
            star.setAttribute('id', 'star' + i);
            star.className = 'full';

            container.appendChild(star);
        }

        if (i < count){
            star = document.createElement('label');
            star.setAttribute('id', 'star' + count);
            star.className = 'half';

            container.appendChild(star);
        }

        items.push(container);
    }

    return items.map(item => item.outerHTML).join('');
}

function createList() {
    let container = document.getElementsByClassName('chat-container')[0];
    let ul=document.createElement('ul');
    ul.setAttribute('class', 'container');

    CONVERSATION.forEach(function (message){
        let li = document.createElement('li');
        li.setAttribute('class', 'message-container');
        let p = document.createElement('p');
        p.setAttribute('class', 'message');

        if (message.stars){
            p.setAttribute('class', 'message stars');
            p.innerHTML = createStars(message);
        }  else {
            p.innerHTML = message.message;

            if (message.mine) {
                p.setAttribute('class',  p.getAttribute('class') + ' mine');
                li.setAttribute('class',  li.getAttribute('class') + ' mine');
            }
        }

        li.appendChild(p);
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", createList);
