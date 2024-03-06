'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:



$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
		// Action: Play Marimba
		class PlayMarimba extends Monogatari.Action {
			static matchString([action]) {
				return action === "playMarimba";
			}
			constructor([myaction, soundType]){
				super();
				this.soundType = soundType;
			}
			apply() {
				// Play random index
        let soundArr, idx, sound;

				switch (this.soundType) {
					case "oneshot":
						soundArr = [
							"m01",
							"m02",
							"m03",
							"m04",
							"m05",
							"m06",
							"m07",
							"m08",
							"m09",
							"m10",
							"m11",
							"m12"
						];
    				idx = Math.floor(Math.random() * soundArr.length);
    				sound = soundArr[idx];
    				monogatari.run("play music " + sound);
						break;

					case "grain":
						soundArr = [
							"g01",
							"g02",
							"g03",
							"g04",
							"g05",
							"g06",
							"g07",
							"g08",
							"g09",
							"g10",
							"g11",
							"g12"
						];
    				idx = Math.floor(Math.random() * soundArr.length);
    				sound = soundArr[idx];
            console.log(sound);
    				monogatari.storage({
    					previousMusic: sound
    				});
    				monogatari.run("stop music {{previousMusic}} with fade 2");
    				monogatari.run("play music " + sound);
						break;
				}
			}

			revert() {
        //pass
			}
		}

		PlayMarimba.id = "PlayMarimba";
		monogatari.registerAction(PlayMarimba);

	});
});
