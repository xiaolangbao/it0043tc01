document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.flex-container1');
    const boxes = document.querySelectorAll('.box');
    const gapInput = document.getElementById('gap');
    const growInputs = [
        document.getElementById('grow-b1-input'),
        document.getElementById('grow-b2-input'),
        document.getElementById('grow-b3-input')
    ];

    const setContainerStyle = (property, value) => {
        container.style[property] = value;
    };

    const setBoxGrow = (index, value) => {
        boxes[index].style.flexGrow = value;
    };

    const buttonActions = {
        reset: () => {
            setContainerStyle('flexDirection', 'row');
            setContainerStyle('justifyContent', 'flex-start');
            setContainerStyle('alignItems', 'stretch');
            setContainerStyle('gap', '0px');
            boxes.forEach(box => box.style.flexGrow = '0');
            gapInput.value = 0;
            growInputs.forEach(input => input.value = 0);
        },
        'direction-row': () => setContainerStyle('flexDirection', 'row'),
        'direction-column': () => setContainerStyle('flexDirection', 'column'),
        'Start': () => setContainerStyle('justifyContent', 'flex-start'),
        'Center': () => setContainerStyle('justifyContent', 'center'),
        'End': () => setContainerStyle('justifyContent', 'flex-end'),
        'space-between': () => setContainerStyle('justifyContent', 'space-between'),
        'space-around': () => setContainerStyle('justifyContent', 'space-around'),
        'space-evenly': () => setContainerStyle('justifyContent', 'space-evenly'),
        'start': () => setContainerStyle('alignItems', 'flex-start'),
        'center': () => setContainerStyle('alignItems', 'center'),
        'end': () => setContainerStyle('alignItems', 'flex-end'),
        Gap: () => {
            const gapValue = Math.min(Math.max(gapInput.value, 0), 50);
            setContainerStyle('gap', `${gapValue}px`);
        },
        resetGrow: () => {
            boxes.forEach(box => box.style.flexGrow = '0');
            growInputs.forEach(input => input.value = 0);
        },
        growAll: () => boxes.forEach(box => box.style.flexGrow = '1'),
        'grow-b1': () => setBoxGrow(0, growInputs[0].value),
        'grow-b2': () => setBoxGrow(1, growInputs[1].value),
        'grow-b3': () => setBoxGrow(2, growInputs[2].value)
    };

    document.querySelector('.flex-container').addEventListener('click', (event) => {
        const action = buttonActions[event.target.id];
        if (action) action();
    });
});