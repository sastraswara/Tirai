from pydub import AudioSegment


for i in range(12):
    if i < 9:
        index = "0{}".format(i+1)
    else:
        index = str(i+1)

    filename = "sta_grain_{}.mp3".format(index)
    print("Working on {}".format(filename))

    sound = AudioSegment.from_mp3(filename)
    faded = sound.fade_out(2000)
    savename = "fade_{}".format(filename)
    faded.export(savename, format="mp3")
    print("Finished working on {}".format(filename))
