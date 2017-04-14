/**
 * Created by flavio on 12/03/2017.
 */

const CONVERSATION = [
    {
        "message": "Hey there! How are you doing?"
    },
    {
        "message": "I'm Flavio, and that's the first-of-its-kind <strong>conversational resume</strong>."
    },
    {
        "message": "What's that??",
        "mine": true
    },
    {
        "message": "Yeah, I know. A pretty unconventional resume."
    },
    {
        "message": "Well, great companies don't want to hire ordinary professionals. So, why bother with copy-pasted templates?"
    },
    {
        "message": "But don't worry, this resume is even more informative than the ordinary ones."
    },
    {
        "message": "Ok then, let's give it a try. Can you start from your <strong>education</strong>?",
        "id" : "education",
        "mine": true
    },
    {
        "message": "Of course."
    },
    {
        "message": "I got the <strong>bachelor's degree</strong> in Computer Engineering from the Politecnico di Milano. It was 2012."
    },
    {
        "message": "Then, I spent 1 year at the Universidade Federal do Espirito Santo, in Vitória, Brazil."
    },
    {
        "message": "Finally, I took my <strong>Master's degree</strong> (still Computer Engineering) in the Politecnico in 2015. Final grade: 107/110."
    },
    {
        "message": "Here's <a href=\"https://www.amazon.com/SMAD-System-Multimodal-Assistive-Domotics/dp/3659829609\">my master thesis</a>, btw. I developed a domotic system for people with motor disabilities."
    },
    {
        "message": "Fine. What about your <strong>work experience</strong>?",
        "id" : "work",
        "mine": true
    },
    {
        "message": "Still in 2015, I started working for Mogai/EBRAND at Vitória."
    },
    {
        "message": "It was a cool R&D project called <a href=\"https://www.pic4turtle.com\">Pic4Turtle</a>, with the aim of classifying sea turtle species in pictures."
    },
    {
        "message": "I tackled the problem using <strong>deep learning</strong> (convolutional neural networks) to transform images and make them easier to classify."
    },
    {
        "message": "Using a pretty challenging dataset, with real-world pictures, the model achieved optimal results (nearly 90% accuracy)."
    },
    {
        "message": "Right after that, I became a full-stack developer for the whole project."
    },
    {
        "message": "And now?",
        "mine": true
    },
    {
        "message": "Since mid 2016, I switched to a startup called <a href=\"https://www.kuau.com.br\">KUAU</a>, committed to <strong>radically change secundary education</strong> in Brazil."
    },
    {
        "message": "My current job description is <strong>technical lead</strong>. In a small group such as ours, this means a bunch of tasks."
    },
    {
        "message": "Full-stack developer, team leader and product manager."
    },
    {
        "message": "What did you feel as the high points of these experiences?",
        "mine": true
    },
    {
        "message": "I'm glad you asked! It has been an amazing journey."
    },
    {
        "message": "First of all, solving interesting and non-trivial problems without supervision. <b>I love to solve problems</b> with great results!"
    },
    {
        "message": "<b>Designing and building digital products</b>, from the idea aaall the way to the App Store. Working in a digital agency helped me to feed my creative side."
    },
    {
        "message": "And <b>leading</b> a small team of young and smart devs to build a shared know-how."
    },
    {
        "message": "Speaking of, I’m proud to report that I first introduce automated tests to them and, in 6 months, we went from zero to End-to-End testing!"
    },
    {
        "message": "Sounds interesting. Can we go deeper into your <strong>tech skills</strong>?",
        "id" : "skills",
        "mine": true
    },
    {
        "message": "About that, since a picture is worth a thousand words:"
    },
    {
        "message": ["Machine learning", "Software engineering", "Python", "Javascript", "Angular", "Java EE", "TDD", "DevOps"],
        "stars": [4.5, 4.5, 4.5, 4.5, 4.5, 4, 4, 4]
    },
    {
        "message": "Less tech, still worthy:"
    },
    {
        "message": ["Data science", "Agile (Scrum)", "Design thinking", "Scientific method", "UX",  "Ethics"],
        "stars": [4.5, 4, 4, 4, 3.5, 4]
    },
    {
        "message": " I'm a voracious learner too. Maybe we can talk about it later on."
    },
    {
        "message": "Of course. Let's talk about yourself before. How would you describe <strong>your personality</strong>?",
        "id" : "personality",
        "mine": true
    },
    {
        "message": "In a word, <strong>eclectic</strong>."
    },
    {
        "message": "There is my analytical self (<em>I’m a computer scientist, after all</em>). I’m reasonable, logical, assertive and dedicated."
    },
    {
        "message": "Then we have my creative side, which makes me curious, intuitive, different and friendly. <q>An open mind is not an empty head</q>"
    },
    {
        "message": "I take <b>data-driven technical and business decision</b>, while I trust my <b>instinct and empathy</b> when it comes to colleagues and end-users."
    },
    {
        "message": "I run on challenges, rather than coffee. And value meaning, rather than money."
    },
    {
        "message": "Ok, right. Can you give some examples of what you learned during the last 6 months?",
        "mine": true
    },
    {
        "message": "I'd been playing around with some very interesting technologies. " +
        "<a href='https://angular.io/'>Angular 2</a>, <a href='http://reactivex.io/'>reactive programming</a>, " +
        "<a href='https://www.elastic.co/products/elasticsearch'>Elasticsearch and Kibana</a>, just to name the most exciting ones."
    },
    {
        "message": "I've also studied Natural Language Processing, Gamification, Interaction design... and Spanish <img class='emoji' alt='wink' src='https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f609.png'>"
    },
    {
        "message": "That's all, I think. How can I get in touch with you?",
        "mine": true
    },
    {
        "message": "Thanks for reading this! I look forward to hear from you."
    },
    {
        "message": "Just drop me a line on <a href='javascript:void(0);' onclick='showEmail(this)'>this email</a> or contact me on <a href='https://www.linkedin.com/in/femferrara'>Linkedin</a>."
    }
];

