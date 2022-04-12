input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            SPRITE.move(-1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            SPRITE.move(1)
            SPRITE.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            SPRITE.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            SPRITE.move(-1)
            SPRITE.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        for (let index = 0; index < 4; index++) {
            SPRITE.change(LedSpriteProperty.Y, -1)
            basic.pause(500)
        }
        SPRITE.change(LedSpriteProperty.X, 5)
        basic.pause(500)
    }
})
let SPRITE: game.LedSprite = null
SPRITE = game.createSprite(4, 0)
basic.forever(function () {
	
})
