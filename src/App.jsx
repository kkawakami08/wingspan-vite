import PlayerBirdHand from "@/components/game/bird/PlayerBirdHand";
import BirdDeck from "@/components/game/bird/BirdDeck";
import BirdTray from "@/components/game/bird/BirdTray";
import SelectedBirds from "@/components/game/bird/SelectedBirds";
import BirdFeeder from "@/components/game/food/BirdFeeder";
import HabitatMat from "@/components/game/mat/HabitatMat";
import SelectedFood from "@/components/game/food/SelectedFood";
import PlayerFoodSupply from "@/components/game/food/PlayerFoodSupply";
import FoodSupply from "@/components/game/food/FoodSupply";
import BonusDeck from "@/components/game/bird/BonusDeck";
import BirdDiscard from "@/components/game/bird/BirdDiscard";
import BonusDiscard from "@/components/game/bird/BonusDiscard";

import { useAtom } from "jotai";
import {
  playerEggSupplyAtom,
  brownPowerContinueBtnAtom,
  brownBirdCopyAtom,
  currentActionAtom,
  birdFeederAtom,
  disableClickAtom,
  currentActionTextAtom,
  brownBirdVariableAtom,
  resourceQuantityAtom,
  selectedFoodAtom,
  forestAtom,
  grasslandAtom,
  wetlandAtom,
  brownPowerEndAtom,
  discardQuantityAtom,
  playerFoodSupplyAtom,
  forestBirdCountAtom,
  forestBrownBirdsAtom,
  grasslandBirdCountAtom,
  grasslandBrownBirdsAtom,
  wetlandBrownBirdsAtom,
  wetlandBirdCountAtom,
  playBirdAtom,
  selectedCardsAtom,
} from "@/utils/jotaiStore";
import BirdCardOptions from "@/components/game/card/BirdCardOptions";

const App = () => {
  const [playerEggs] = useAtom(playerEggSupplyAtom);
  const [playerFood] = useAtom(playerFoodSupplyAtom);
  const [forest, setForest] = useAtom(forestAtom);
  const [grassland, setGrassland] = useAtom(grasslandAtom);
  const [wetland, setWetland] = useAtom(wetlandAtom);
  const [brownPowerContinue, setBrownPowerContinue] = useAtom(
    brownPowerContinueBtnAtom
  );
  const [currentAction, setCurrentAction] = useAtom(currentActionAtom);
  const [, setCurrentActionText] = useAtom(currentActionTextAtom);
  const [, setDisableClick] = useAtom(disableClickAtom);
  const [resourceQuantity, setResourceQuantity] = useAtom(resourceQuantityAtom);
  const [brownBirdVariable, setBrownBirdVariable] = useAtom(
    brownBirdVariableAtom
  );
  const [, setSelectedFood] = useAtom(selectedFoodAtom);
  const [, setSelectedCards] = useAtom(selectedCardsAtom);
  const [, setPlayBirdState] = useAtom(playBirdAtom);
  const [birdFeeder] = useAtom(birdFeederAtom);
  const [brownBirdCopy, setBrownBirdCopy] = useAtom(brownBirdCopyAtom);
  const [brownPowerEnd, setBrownPowerEnd] = useAtom(brownPowerEndAtom);
  const [discardQuantity, setDiscardQuantity] = useAtom(discardQuantityAtom);

  const [forestBirdCount, setForestBirdCount] = useAtom(forestBirdCountAtom);
  const [grasslandBirdCount, setGrasslandBirdCount] = useAtom(
    grasslandBirdCountAtom
  );
  const [wetlandBirdCount, setWetlandBirdCount] = useAtom(wetlandBirdCountAtom);

  const [, setForestBrownBirds] = useAtom(forestBrownBirdsAtom);
  const [, setGrasslandBrownBirds] = useAtom(grasslandBrownBirdsAtom);
  const [, setWetlandBrownBirds] = useAtom(wetlandBrownBirdsAtom);

  const moveBirdSupply = {
    forestBirdCount: forestBirdCount,
    setForestBirdCount: setForestBirdCount,
    grasslandBirdCount: grasslandBirdCount,
    setGrasslandBirdCount: setGrasslandBirdCount,
    wetlandBirdCount: wetlandBirdCount,
    setWetlandBirdCount: setWetlandBirdCount,
    setForestBrownBirds: setForestBrownBirds,
    setGrasslandBrownBirds: setGrasslandBrownBirds,
    setWetlandBrownBirds: setWetlandBrownBirds,
  };

  const brownBirdSupply = {
    forest: forest,
    setForest: setForest,

    grassland: grassland,
    setGrassland: setGrassland,

    wetland: wetland,
    setWetland: setWetland,

    birdFeeder: birdFeeder,

    setPlayBirdState: setPlayBirdState,

    setSelectedCards: setSelectedCards,

    setDisableClick: setDisableClick,

    setCurrentActionText: setCurrentActionText,

    resourceQuantity: resourceQuantity,
    setResourceQuantity: setResourceQuantity,

    brownBirdVariable: brownBirdVariable,
    setBrownBirdVariable: setBrownBirdVariable,

    setBrownPowerContinueBtn: setBrownPowerContinue,
    brownPowerContinueBtn: brownPowerContinue,

    currentAction: currentAction,
    setCurrentAction: setCurrentAction,

    setBrownBirdCopy: setBrownBirdCopy,
    brownBirdCopy: brownBirdCopy,

    setSelectedFood: setSelectedFood,

    playerEggs: playerEggs,
    playerFood: playerFood,

    brownPowerEnd: brownPowerEnd,
    setBrownPowerEnd: setBrownPowerEnd,

    discardQuantity: discardQuantity,
    setDiscardQuantity: setDiscardQuantity,
  };

  return (
    <div className="grid grid-cols-12 p-5 gap-5">
      {/* //overlay over components */}
      <HabitatMat
        brownBirdSupply={brownBirdSupply}
        moveBirdSupply={moveBirdSupply}
      />
      <SelectedBirds
        brownBirdSupply={brownBirdSupply}
        moveBirdSupply={moveBirdSupply}
      />
      {brownBirdSupply.currentAction === "whiteSelect" && <BirdCardOptions />}
      <SelectedFood
        brownBirdSupply={brownBirdSupply}
        moveBirdSupply={moveBirdSupply}
      />
      <BirdFeeder />
      <FoodSupply brownBirdSupply={brownBirdSupply} />
      <div className="col-span-12 flex justify-around ">
        <BirdDeck brownBirdSupply={brownBirdSupply} />
        <BirdDiscard />
        <BirdTray />
        <BonusDeck />
        <BonusDiscard />
      </div>

      {/* //separate tab */}

      <PlayerFoodSupply />
      <PlayerBirdHand />
    </div>
  );
};

export default App;
