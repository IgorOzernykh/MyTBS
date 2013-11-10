function createUnits(pl)
{
    for (var i = 0; i < pl.maxUnitCount; i++)
    {
        var actor = factory.createActor(0, pl);
        pl.buyNewUnit(actor, 1);
        if (!pl.isEnemy)
        {
            gameField.occupyCell(pl.playerUnits[i], i + 1, 0);
            pl.playerUnits[i].curRow = i + 1;
            pl.playerUnits[i].curCol = 0;
        }
        else
        {
            gameField.occupyCell(pl.playerUnits[i], i + 1, gameField.columns - 1);
            pl.playerUnits[i].curRow = i + 1;
            pl.playerUnits[i].curCol = gameField.columns - 1;
        }
    }
    playerReady()
}
/*
function playerReady()
{
    numPlayersReady++;
    if (numPlayersReady == 2)
    {
        playersReady();
    }
}

function playersReady()
{
    players  = [player, enemy];
    unitTurn()
}*/
