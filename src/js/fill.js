/**
 * Created by flavio on 12/03/2017.
 */

function createList() {
    var container = document.getElementsByClassName('chat-container')[0];
    var ul=document.createElement('ul');
    ul.setAttribute('class', 'container');

    CONVERSATION.forEach(function (message){
        var li = document.createElement('li');
        li.setAttribute('class', 'message-container');
        var p = document.createElement('p');
        p.setAttribute('class', 'message');

        if (message.stars){
            p.setAttribute('class', 'message stars');
            p.innerHTML = createStars(message);
        }  else {
            p.innerHTML = message.message;

            if (message.mine) p.setAttribute('class',  p.getAttribute('class') + ' mine');

        }

        li.appendChild(p);
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

function createStars(message) {
    var items = [];

    for (var skill = 0;skill < message.stars.length;skill++){
        var name = message.message[skill];
        var count = message.stars[skill];

        var container = document.createElement('div');
        container.className = 'skill'
        var star;

        var label = document.createElement('span');
        label.className = 'stars-name'
        label.innerHTML = name;
        container.appendChild(label);

        var intCount = Math.floor(count);
        for (var i = 0;i < intCount;i++){
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

    return items.map(function (item){
        return item.outerHTML
    }).join('');
}

document.addEventListener("DOMContentLoaded", createList);
