	//3. Inside the init function:
	//	Action: Play Marimba
	
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
				console.log("Playing marimba sound");
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
				return Promise.resolve ();
			}

			revert() {
        //pass
			}
		}

		PlayMarimba.id = "PlayMarimba";
		monogatari.registerAction(PlayMarimba);