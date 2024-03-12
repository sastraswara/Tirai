	//3. Inside the init function:
	//	Action: TestAction
	
	class TestAction extends Monogatari.Action {

        // using a static so the player is shared across all instances of the action
        static player;

        // loading the file only once in the setup
        static setup() {
            TestAction.player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
            
            Tone.loaded().then(() => {
                console.log("TestAction player is loaded");
                return Promise.resolve ();
            });
        }

        static matchString([action]) {
            return action === "TestAction";
        }
        constructor([TestAction, input1]){
            super();
            console.log("TestAction instance is constructed with input1: " + input1);
            this.input1 = input1;
        }

        apply() {
            // Play random index
            console.log("Testaction is executing with input1: " + this.input1);
            TestAction.player.start();

            let input1Float = parseFloat(this.input1);
            const distortion = new Tone.Distortion(input1Float).toDestination();
            //connect a player to the distortion
            TestAction.player.connect(distortion);

            return Promise.resolve ();
        }

        revert() {
        }
       
    }

    TestAction.id = "TestAction";
    monogatari.registerAction(TestAction);