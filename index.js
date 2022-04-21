const SIZE_BLOCK = 30;

//  механика

const game = {
    area: [
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'x', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'x', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o'],
        ['o', 'o', 'o', 'o', 'x', 'x', 'o', 'o', 'o', 'o'],
    ],
    activeTetromino() {},

    moveLeft() {},

    moveRight() {},

    moveDown() {},

    rotateTetromino() {},
}

//  отрисовка

const container = document.querySelector('.container');

const canvas = document.createElement('canvas');
canvas.classList.add('game-area');
container.append(canvas);
canvas.width = SIZE_BLOCK * 10;
canvas.height = SIZE_BLOCK * 20;

const context = canvas.getContext('2d');

const showArea = (area) => {
    for(let y = 0; y < area.length; y++) {
        const line = area[y];

        for(let x = 0; x < line.length; x++) {
            const block = line[x];
            if(block === 'x') {
                context.fillStyle = 'tomato';
                context.strokeStyle = 'white';
                context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
                context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
            }
        }
    }

};

showArea(game.area);