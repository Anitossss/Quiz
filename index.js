const inputNodeDeadSoul = document.querySelector('.Js-input-deadSoul');
const buttonNodeDeadSoul = document.querySelector('.Js-button-deadSoul');
const outputNodeDeadSoul = document.querySelector('.Js-output-deadSoul');
const inputNodePicture = document.querySelector('.Js-input-picture');
const buttonNodePicture = document.querySelector('.Js-button-picture');
const outputNodePicture = document.querySelector('.Js-output-picture');

buttonNodeDeadSoul.addEventListener('click', function() {
    const answerDeadSoul = inputNodeDeadSoul.value;
    let outputDeadSoul = 'Ответ правильный';

    if (answerDeadSoul !== 'Гоголь'&& answerDeadSoul !== 'гоголь'&& answerDeadSoul !== 'Николай Гоголь') {
        outputDeadSoul = 'Ответ неправильный';
    }
    outputNodeDeadSoul.innerHTML = outputDeadSoul;
});
    
    buttonNodePicture.addEventListener('click', function() {
     const answerPicture = inputNodePicture.value;
    let outputPicture = 'Ответ правильный';

    if (answerPicture !== 'Джим Керри'&& answerPicture !== 'Керри') {
        outputPicture = 'Ответ неправильный';
    }
    outputNodePicture.innerHTML = outputPicture;
});
