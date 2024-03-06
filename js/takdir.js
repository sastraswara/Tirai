// Declare music assets
monogatari.assets("music", {
    "m01": "sta_marimba_01.mp3",
    "m02": "sta_marimba_02.mp3",
    "m03": "sta_marimba_03.mp3",
    "m04": "sta_marimba_04.mp3",
    "m05": "sta_marimba_05.mp3",
    "m06": "sta_marimba_06.mp3",
    "m07": "sta_marimba_07.mp3",
    "m08": "sta_marimba_08.mp3",
    "m09": "sta_marimba_09.mp3",
    "m10": "sta_marimba_10.mp3",
    "m11": "sta_marimba_11.mp3",
    "m12": "sta_marimba_12.mp3",
    "g01": "sta_grain_01.mp3",
    "g02": "sta_grain_02.mp3",
    "g03": "sta_grain_03.mp3",
    "g04": "sta_grain_04.mp3",
    "g05": "sta_grain_05.mp3",
    "g06": "sta_grain_06.mp3",
    "g07": "sta_grain_07.mp3",
    "g08": "sta_grain_08.mp3",
    "g09": "sta_grain_09.mp3",
    "g10": "sta_grain_10.mp3",
    "g11": "sta_grain_11.mp3",
    "g12": "sta_grain_12.mp3"
});

// Choice Text
const staChoice = {
    "Congress": "(Sometimes, I still remember that one day during the Language Congress several years ago.)",
    "NewPosition": "(The war brings many changes.)",
    "Mirna": "(Meanwhile, memory of my late wife arose.)",
    "ToTheSuburb": "(I don't feel safe living in the city)",
    "ViolentTeacher": "(Often I feel impatient with how things are...)",
    "Sugianti": "(Now, I wonder what S. is doing?)",
    "Study": "(But I think I should continue with my study?)",
    "LanguageCommision": "(Ah, the young language of our...)",
    "YouthMovement": "(At the moment, the youth are making their move)",
    "TheFilthyPoet": "(...why this young filthy poet comes to mind?)",
    "WorkPlan": "(The youth movement asked me for something)",
    "TheCapture": "(My fear is coming true)",
    "BehindBars": "(...when the body is captured, the mind should stay free...)",
    "WorkInPrison": "(There are works to be done)",
    "Interogation": "(Is this the end?)",
    "Police": "(...what kind of person is he?)",
    "LearningInPrison": "(A dialogue with oneself, a friend for eternity)",
    "Observation": "(...the young filthy poet---again)",
    "BuyingBooks": "(Short trip to the book seller?)",
    "SayingGoodbye": "(Is it time to say goodbye?)",
    "NewOrganization": "(This is no time to sit and do nothing)",
    "NewPublishingHouse": "(I think this is what I'll do...)",
    "NewPoets": "(Our history begins in the twentieth century)"
};


// The text
monogatari.script({
    "AtTheOffice": [
        "show scene #000000",
        "playMarimba oneshot",
        "nvl In the confines of this office, I grapple with the complexities of language.",
        "nvl I sense that the occupying government will compel us all to adopt their language.",
        "nvl Our language is still too young to stand alongside the myriad languages of the world.",
        "nvl But that is what we have.",
        "nvl Before me, a pile of words accumulates:",
        "playMarimba oneshot",
        "nvl Words that are in need of translation, equivalents that are in need of search, and meanings that are in need of discovery.",
        "nvl If our young language has a goal to achieve, it is to become a language of knowledge and science, a language that helps us achieve enlightenment.",
        {
            "Choice": {
                "Congress": {
                    "Text": staChoice.Congress,
                    "Do": "jump Congress"
                },
                "NewPosition": {
                    "Text": staChoice.NewPosition,
                    "Do": "jump NewPosition"
                }
            }
        }
    ],

    "Congress": [
        "show scene #000000",
        "playMarimba oneshot",
        "nvl Perhaps I've fallen into the realm of obsession.",
        "nvl Yet, this cultural polemic is a crucial crossroads, shaping our nation's course as it emerges.",
        "playMarimba oneshot",
        "nvl People without a clear identity claim to be against individualism? Our egos are not even formed yet, which makes us value ourselves and our rights as human beings.",
        "nvl And why the disdain for intellectualism? We're still in the infancy of our intellect, which we must nurture for a brighter tomorrow.",
        "playMarimba oneshot",
        "nvl Even the rejection of materialism puzzles me. People on the brink of starvation, yet anti-materialism? Let us use these resources to improve our lives!",
        "playMarimba oneshot",
        "nvl Whispers of a fanatic echoes in the ink.",
        {
            "Choice": {
                "Mirna": {
                    'Text': staChoice.Mirna,
                    'Do': 'jump Mirna'
                },
                "ToTheSuburb": {
                    'Text': staChoice.ToTheSuburb,
                    'Do': 'jump ToTheSuburb'
                }
            }
        }
    ],

    "NewPosition": [
        "show scene #000000",
        "playMarimba oneshot",
        "nvl When the publishing house I was working for was closed down, many friends helped me to find a new job.",
        "nvl At first, I was asked to work at a military news agency but I didn't like working there.",
        "playMarimba oneshot",
        "nvl What needed to be done there was to translate news and policies coming from the headquarter.",
        "nvl The occupancy government is beginning to establish itself.",
        "nvl A colleague in the news agency once heard a story:",
        "playMarimba oneshot",
        "nvl One day a family in a village found colonial soldiers running aimlessly towards the forest.",
        "nvl The family knew something was wrong with the soldiers' behaviour.",
        "nvl As soon as they heard the sound of gunfire, the family ran to the forest as well.",
        "playMarimba oneshot",
        "nvl It was deep and far when they found a farmer's hut inside the forest. They stopped running.",
        "nvl Inside the hut, they found several families who had also fled from the village.",
        {
            'Choice': {
                'ViolentTeacher': {
                    'Text': staChoice.ViolentTeacher,
                    'Do': 'jump ViolentTeacher'
                },
                'LanguageCommision': {
                    'Text': staChoice.LanguageCommision,
                    'Do': 'jump LanguageCommision'
                }
            }
        }
    ],

    "Mirna": [
        "show scene #000000",
        "playMarimba oneshot",
        "nvl Before this war started, about two years ago, I had been hospitalised in the town of B.",
        "nvl The diagnosis: heart disease.", 
        "playMarimba oneshot",
        "nvl A few weeks earlier, I had received some extra money from the sale of my last novel.",
        "nvl I sent the money by post to my wife in the village, and a few days later I received a letter:",
        "nvl I found out that she had died in an accident. The money was used for her funeral.",
        "playMarimba oneshot",
        "nvl I spent many nights crying.",
        "nvl A friend at work recommended that I go to the hospital in the city of B.",
        "nvl There I calmed down.",
        "playMarimba oneshot",
        "nvl Since I felt better physically, I used my sick leave to write a new novel.",
        {
            'Choice': {
                'ToTheSuburb': {
                    'Text': staChoice.ToTheSuburb,
                    'Do': 'jump ToTheSuburb'
                },
                'AtTheOffice': {
                    'Text': staChoice.AtTheOffice,
                    'Do': 'jump AtTheOffice'
                }
            }
        }
    ],

    "ToTheSuburb": [
        "show scene #000000",
        "playMarimba oneshot",
        "nvl When the occupying forces were finally arriving, the colonial population was purged.",
        "nvl One of the effects of this purge was the closure of some businesses.", 
        "playMarimba oneshot",
        "nvl I was out of work for a while.", 
        "nvl At that time I was also worried about the situation of my children in the village.",
        "playMarimba oneshot",
        "nvl I decided to take care of them by moving to the suburbs of the city of J.", 
        "nvl There I could grow crops and tend the garden. The children had plenty of space to play and run around.", 
        "playMarimba oneshot",
        "nvl Away from the hustle and bustle of the city, away from the threat of war, back in touch with the plants and the soil, back in touch with the humanity that lies within each of us.", 
        "nvl Under the scorching sun and drops of sweat, I often think of S. Am I in love?",
        {
            'Choice': {
                'Study': {
                    'Text': staChoice.Study,
                    'Do': 'jump Study'
                },
                'Congress': {
                    'Text': staChoice.Congress,
                    'Do': 'jump Congress'
                }
            }
        }
    ],

    "ViolentTeacher": [
        "show scene #000000",
        "playMarimba oneshot",
        "nvl In my spare time, I sometimes think I'm not patient enough when it comes to teaching.",
        "nvl I was a teacher once, a long time ago. I was probably too young for that kind of work.", 
        "playMarimba oneshot",
        "nvl I tend to be impatient. I just wanted to make some money, then go back to my writing.",
        "nvl Those students often didn't pay attention to my teaching. So I gave some of them a slap if they got bad marks.",
        "nvl There were so many ignorant students, that I slapped almost the whole class in the face.",
        "playMarimba oneshot",
        "nvl Then this was apparently submitted to the newspaper. So one day an article was published:",
        "nvl Sadistic Teacher at School.",
        "playMarimba oneshot",
        "nvl I was asked to resign. That I did.",
        "playMarimba oneshot",
        "nvl Maybe the job of a teacher is better suited to people who aren't as passionate as I am.",
        {
            'Choice': {
                'Study': {
                    'Text': staChoice.Study,
                    'Do': 'jump Study'
                },
                'YouthMovement': {
                    'Text': staChoice.YouthMovement,
                    'Do': 'jump YouthMovement'
                }
            }
        }
    ],

    "Sugianti": [
        "show scene #000000",
        "playMarimba oneshot",
        "nvl This is how I met S.",
        "playMarimba oneshot",
        "nvl Mr. H., my colleague, told me about a daughter of his colleague who recently came home from studying abroad.",
        "nvl He recommended me to send her my celebrated novel, not only to assist her in her learning of our language, but also the theme of a modern independent woman would be of interest to her.",
        "playMarimba oneshot",
        "nvl I did, and she invited me for the first time to meet her in her house.",
        "nvl We had a nice discussion, and many discussions follow in many meetings afterwards.",
        "playMarimba oneshot",
        "nvl Her family was against this relationship.", 
        "nvl I was a widower with three children, something her family did not like.",
        "playMarimba oneshot",
        "nvl Our relationship continued in secret.",
        "nvl One time we went for a film and her brother found us. He said:",
        "playMarimba oneshot",
        "nvl You should know yourself. Break up with our sister. Be aware of your position!",
        "nvl We postponed our marriage until the war was nearly finished.",
        "playMarimba oneshot",
        {
            'Choice': {
                'Mirna': {
                    'Text': staChoice.Mirna,
                    'Do': 'jump Mirna'
                },
                'LanguageCommision': {
                    'Text': staChoice.LanguageCommision,
                    'Do': 'jump LanguageCommision'
                }
            }
        }
    ],

    "Study": [
        "show scene #000000",
        "playMarimba oneshot",
        "nvl One of my desires is to learn.",
        "nvl After all, I was inspired by S. Her starting salary alone was twice of mine.", 
        "nvl I graduated from teacher school at the city of B., she graduated from a university abroad.",
        "nvl I didn't have the diploma to get into college, but I thought I'd try to apply.",
        "playMarimba oneshot",
        "nvl Coincidentally, a professor who works in this office is a language lecturer at the law school.",
        "nvl When I told him of my intention, he asked me to meet a professor, TH by name.",
        "nvl So I followed that suggestion. It appears that the professor had been told about my work and my published novels.",
        "nvl He told me: 'Send us a piece of your best writing, and we'll consider it.'",
        "nvl So I did. I got accepted.",
        "playMarimba oneshot",
        "nvl I told S. about this. She also told me:",
        "nvl She needs to move out of the city J. due to her work.",
        "nvl I suspect her family was involved in this decission.",
        {
            'Choice': {
                'ViolentTeacher': {
                    'Text': staChoice.ViolentTeacher,
                    'Do': 'jump ViolentTeacher'
                },
                'Sugianti': {
                    'Text': staChoice.Sugianti,
                    'Do': 'jump Sugianti'
                }
            }
        }
    ],

    "LanguageCommision": [
        "show scene #000000",
        "playMarimba oneshot",
        "nvl New language blooms",
        "nvl Tounges in transition",
        "nvl A growing lexicon.",
        "nvl I argued: we should standardise the use of language in scientific fields used in schools.",
        "nvl So far, each school uses a variety of terms, from a variety of languages from across the continent.",
        "playMarimba oneshot",
        "nvl I suggested: let's standardise this with our young language.",
        "nvl And so it came to pass that we looked for translations--often inventing new words--for the existing terms.",
        "nvl At least 400,000 words have been translated so far.",
        "nvl This is just looking for equivalents, not to mention grammar issues.",
        "nvl The criterion: a prohibition on excessive use of regional languages.",
        "playMarimba oneshot",
        "nvl We must ensure that this emerging language does not once again favor only a select few.",
        "playMarimba oneshot",
        {
            'Choice': {
                'YouthMovement': {
                    'Text': staChoice.YouthMovement,
                    'Do': 'jump YouthMovement'
                },
                'TheFilthyPoet': {
                    'Text': staChoice.TheFilthyPoet,
                    'Do': 'jump TheFilthyPoet'
                }
            }
        }
    ],

    "YouthMovement": [
        "show scene #000000",
        "playMarimba oneshot",
        "nvl The Language Office is home to many young writers. One of the most prominent is IN, who seems to be being courted by a young, filthy poet.",
        "nvl I once told IN to be careful. Her essays and columns are good, but I fear for her safety.",
        "nvl She writes too harshly against the occupancy government.",
        "nvl The office was not only a centre for literary and legal discussions, but also for political rumours.",
        "nvl In meetings, there were always leaks of the occupation government's politics.",
        "playMarimba oneshot",
        "nvl Some youth have close contacts at the university, and are closely connected to the student movement.",
        "nvl It was a tense situation, but it was spread all over the place.",
        "nvl At a later date, IN was reported missing.",
        "nvl She was last seen travelling to the outskirt of the town B. with her university friends.",
        {
            'Choice': {
                'Sugianti': {
                    'Text': staChoice.Sugianti,
                    'Do': 'jump Sugianti'
                },
                'WorkPlan': {
                    'Text': staChoice.WorkPlan,
                    'Do': 'jump WorkPlan'
                }
            }
        }
    ],

    "TheFilthyPoet": [
        "show scene #000000",
        "playMarimba grain",
        "nvl Perhaps it is a joy to see many young people interested in art, literature and culture.",
        "nvl Particularly, in initiating a literary character that has a national identity.",
        "nvl But among the many poets of the younger generation, one is the most striking and courageous:",
        "nvl The Filthy Youth.",
        "nvl He was more like a naughty boy who played here and there, although he was good at getting along with all the cultural avant-garde.",
        "nvl He came and went as he pleased in my office. Sometimes he reads in silence, sometimes he makes fool out of himself.",
        "nvl But I think he only comes to approach IN, one of our employees.",
        "nvl When I asked IN if she was interested in the filthy young man, she replied: 'Who could be interested in such a person?",
        {
            'Choice': {
                'BehindBars': {
                    'Text': staChoice.BehindBars,
                    'Do': 'jump BehindBars'
                },
                'TheCapture': {
                    'Text': staChoice.TheCapture,
                    'Do': 'jump TheCapture'
                }
            }
        }
    ],

    "WorkPlan": [
        "show scene #000000",
        "playMarimba grain",
        "nvl The youth movement, who were continuing to move underground, they are preparing for independence from the occupying government.",
        "nvl At one point, they came to me and told me that they needed a guide: a direction on what to prepare for a country that had just been liberated from colonial and occupation rule.", 
        "nvl I fulfilled their request, although the 'workplan' that I wrote was more concerned with intellectual and cultural issues.", 
        "nvl I put everything in there: the issue of people's representation, representation abroad, cultural direction, the issue of language and national identity, and so on.", 
        "nvl When I finished writing it, I gave it to one of the young men I trusted.", 
        "nvl I said: 'Don't show this to just anyone.'",
        {
            'Choice': {
                'TheFilthyPoet': {
                    'Text': staChoice.TheFilthyPoet,
                    'Do': 'jump TheFilthyPoet'
                },
                'Interogation': {
                    'Text': staChoice.Interogation,
                    'Do': 'jump Interogation'
                }
            }
        }
    ],

    "TheCapture": [
        "show scene #000000",
        "playMarimba grain",
        "nvl One day, I heard that someone from the youth movement, ST, was arrested by the secret police.",
        "nvl This comrade also revealed that ST had something I had written.",
        "nvl The secret police would, eventually, arrest me for allegedly preparing a rebellion. And they did come to arrest me.",
        "playMarimba grain",
        "nvl I was arrested and thrown into a cell.",
        "nvl I thought of my children in the suburbs. I thought of my beloved S. I thought, perhaps I should be prepared to be killed, beheaded.",
        "nvl Meanwhile, I didn't think my life's work was done. Surely, there was something I could do, even from behind bars.",
        "playMarimba grain",
        {
            'Choice': {
                'Police': {
                    'Text': staChoice.Police,
                    'Do': 'jump Police'
                },
                'Interogation': {
                    'Text': staChoice.Interogation,
                    'Do': 'jump Interogation'
                }
            }
        }
    ],

    "BehindBars": [
        "show scene #000000",
        "playMarimba grain",
        "nvl The cell was filled with ten other prisoners. Their bodies were full of ulcers.",
        "nvl The sanitation of this cell is terrible. In just three days, my skin was full of ulcers like theirs.",
        "nvl We slept on boards lined up in a row. These boards were infested with bedbugs. Out of the broken pieces of wall would pour small insects.",
        "nvl When we lay down on the bed, the creatures would invade our bodies, crawling over our cheeks, lips, and nostrils.",
        "playMarimba grain",
        "nvl But there's still plenty of work!",
        "nvl We cannot suffer if we do not choose to suffer.",
        "nvl It is in my power whether this prison cell is paradise or hell. I want this cell to be a paradise only: a paradise for my work.",
        {
            'Choice': {
                'WorkPlan': {
                    'Text': staChoice.WorkPlan,
                    'Do': 'jump WorkPlan'
                },
                'WorkInPrison': {
                    'Text': staChoice.WorkInPrison,
                    'Do': 'jump WorkInPrison'
                }
            }
        }
    ],

    "WorkInPrison": [
        "show scene #000000",
        "playMarimba grain",
        "nvl In this prison cell, I remembered my days as a terrible teacher. Maybe in this prison cell I can make amends for that.",
        "nvl I divided my work in this cell into two. Firstly: thinking. I must complete my contemplation on the direction of this nation's culture, how to achieve it in policy, what cultural tools must be prepared.",
        "playMarimba grain",
        "nvl The second is education. I have the opportunity to be educated to higher education. Most of the people in this prison can't read and write because they never went to school. So at least I taught them how to read and write.",
        "nvl I asked myself: 'What is the meaning of life?' I answer by the way I behave. Life is hard, so I lived it with equal tenacity.",
        "playMarimba grain",
        {
            'Choice': {
                'Police': {
                    'Text': staChoice.Police,
                    'Do': 'jump Police'
                },
                'Interogation': {
                    'Text': staChoice.Interogation,
                    'Do': 'jump Interogation'
                }
            }
        }
    ],

    "Interogation": [
        "show scene #000000",
        "playMarimba grain",
        "nvl There was only one person in the interrogation room. He started to talk with a question:",
        "nvl 'So you don't believe that the occupation government will fulfil its promise to give your nation independence when the war is finally over?'",
        "nvl 'No, I don't believe it.'",
        "nvl He didn't respond. The silence was too excruciating, so I continued:",
        "playMarimba grain",
        "nvl 'I don't believe it because...'",
        "nvl As if possessed by some force, I shared my thoughts on politics, nationalism, democracy, religion, the struggle of nations.",
        "nvl The fear of death was slowly replaced with relief. Because it was in the interrogation room that I could open up and recognise my inner self.",
        "nvl When I finished my intellectual oration, I was panting slightly.",
        "playMarimba grain",
        {
            'Choice': {
                'BehindBars': {
                    'Text': staChoice.BehindBars,
                    'Do': 'jump BehindBars'
                },
                'Observation': {
                    'Text': staChoice.Observation,
                    'Do': 'jump Observation'
                }
            }
        }
    ],

    "Police": [
        "show scene #000000",
        "playMarimba grain",
        "nvl The questioning in the interrogation room was long. The quiet policeman approached me slowly. He reached into the breast pocket of his uniform.",
        "nvl He showed me a photograph.",
        "nvl 'Look,' he said. I obliged. In the photo I saw a woman with three children. Two boys, one girl.",
        "nvl 'This is my wife and children.'",
        "nvl He put the photo back in the breast pocket of his uniform.",
        "playMarimba grain",
        "nvl 'I am also unhappy with how my people treat this country.'",
        "nvl He sat down, took out his cigarette and lighter, crossed his legs. He hands me a cigarette. I take it. Then he lit my cigarette.",
        "nvl Exhaling the smoke, he said,",
        "nvl 'Some of your books have been confiscated. You can choose which ones you want to read in prison.'",
        "nvl The policeman smoked. I smoked too. During the time we smoked, it was as if we shared a special bond.",
        {
            'Choice': {
                'LearningInPrison': {
                    'Text': staChoice.LearningInPrison,
                    'Do': 'jump LearningInPrison'
                },
                'BuyingBooks': {
                    'Text': staChoice.BuyingBooks,
                    'Do': 'jump BuyingBooks'
                }
            }
        }
    ],

    "LearningInPrison": [
        "show scene #000000",
        "playMarimba grain",
        "nvl I decided to finish studying the book by the philosopher K. It was one of the confiscated items.",
        "nvl I spent three months in prison studying, and teaching.",
        "nvl Even if one's body is held captive, one's mind is always free.",
        "nvl Even in solitude, if one is used to exercising one's inner nature, one will always feel abundant.",
        "nvl In that kind of captivity, I had an inner friend who discussed and conversed with me.",
        "nvl With the liveliness of my inner life, I could encourage my friends in prison.",
        "nvl After three months in custody, I was released. I never saw the policeman who interrogated me again.",
        {
            'Choice': {
                'BuyingBooks': {
                    'Text': staChoice.BuyingBooks,
                    'Do': 'jump BuyingBooks'
                },
                'SayingGoodbye': {
                    'Text': staChoice.SayingGoodbye,
                    'Do': 'jump SayingGoodbye'
                }
            }
        }
    ],

    "Observation": [
        "show scene #000000",
        "nvl When I returned to the office, I found out that the filthy young man was getting more and more out of shape.",
        "nvl He was often in and out of jail for stealing. Sometimes, he also sold his friends' belongings without permission.",
        "nvl He still wrote brilliant poems, which he recited brilliantly too. He uses language like a wild animal in pain, charging without restraint.",
        "nvl His eyes were always red due to lack of sleep. I thought, I want to give him a chance. I introduced him to a friend in the statistics office who gave him a job.",
        "nvl He got it: as a translator and transcriber of information from foreign languages.",
        "nvl Then I also asked him if he would be interested in starting a new arts and literature magazine with me. He agreed.",
        "nvl But soon he disappeared again. He abandoned the job - even though it paid well and was enough to support a decent life. He was back on the streets.",
        "nvl I didn't pursue the matter any further with him.",
        {
            'Choice': {
                'LearningInPrison': {
                    'Text': staChoice.LearningInPrison,
                    'Do': 'jump LearningInPrison'
                },
                'NewOrganization': {
                    'Text': staChoice.NewOrganization,
                    'Do': 'jump NewOrganization'
                }
            }
        }
    ],

    "BuyingBooks": [
        "show scene #000000",
        "nvl When the colonial citizens were rounded up by the occupying government, many of their books were sold at flea markets.",
        "nvl After becoming more determined to study philosophy, I realised that what I needed to do was to broaden my horizons and knowledge in that field.",
        "nvl So when I had money, I bought those second-hand philosophy books one by one.",
        "nvl Sometimes, if I knew a friend who was also interested, I'd offer to buy the books for them.",
        "nvl I'd find two or three friends and buy two or three books. I take some profit, so that the profit from selling the books is enough to pay for my own book.",
        "nvl We had to rack our brains a bit most of the time.",
        "nvl Because of this experience, later on, I ended up having my own bookshop.",
        {
            'Choice': {
                'SayingGoodbye': {
                    'Text': staChoice.SayingGoodbye,
                    'Do': 'jump SayingGoodbye'
                },
                'NewPublishingHouse': {
                    'Text': staChoice.NewPublishingHouse,
                    'Do': 'jump NewPublishingHouse'
                }
            }
        }
    ],

    "SayingGoodbye": [
        "show scene #000000",
        "nvl One day I organised my late wife's belongings. I thought it was time to say goodbye.",
        "nvl I sorted out her clothes, preparing them to be sent to relatives.",
        "nvl I found that she apparently kept some gold, though not much.",
        "nvl Suddenly a calling came to me:",
        "nvl 'My field of work is writing and educating.'",
        "nvl When I visited my late wife's grave, I told her that a new age was coming. I said that I would use her legacy in this world to participate in building that new age.",
        "nvl I said goodbye to her.",
        "nvl Now, I thought I was ready to marry S.",
        "nvl That is: with or without her family's blessing.",
        {
            'Choice': {
                'NewOrganization': {
                    'Text': staChoice.NewOrganization,
                    'Do': 'jump NewOrganization'
                },
                'NewPoets': {
                    'Text': staChoice.NewPoets,
                    'Do': 'jump NewPoets'
                }
            }
        }
    ],

    "NewOrganization": [
        "show scene #000000",
        "nvl The youth and student movements continue to demand freedom from the occupying government.",
        "nvl I thought that the intellectuals must also take action.",
        "nvl So, on the initiative of some friends, we founded an association that aims to promote science and culture.",
        "nvl Not all young people are educated or have the opportunity to study. So we organised various courses, from sociology, economics, politics and so on.",
        "nvl I taught the philosophy course.",
        "Meanwhile, I heard rumours of a plan to seize independence by force by the youth movement.",
        {
            'Choice': {
                'NewPublishingHouse': {
                    'Text': staChoice.NewPublishingHouse,
                    'Do': 'jump NewPublishingHouse'
                },
                'Observation': {
                    'Text': staChoice.Observation,
                    'Do': 'jump Observation'
                }
            }
        }
    ],

    "NewPublishingHouse": [
        "show scene #000000",
        "nvl I finally sold the gold left by my late wife.",
        "nvl I bought printing papers and rent a warehouse. I decided to print magazines.",
        "nvl With my experience in managing magazines and my connections in the printing industry, I wanted to start a business in publishing.",
        "nvl 'Writing and educating' became the main guideline of the work.",
        "nvl After independence and the end of the war, my new magazine was published.",
        "nvl I called it Majalah Pembangunan.",
        {
            'Choice': {
                'SayingGoodbye': {
                    'Text': staChoice.SayingGoodbye,
                    'Do': 'jump SayingGoodbye'
                },
                'NewPoets': {
                    'Text': staChoice.NewPoets,
                    'Do': 'jump NewPoets'
                }
            }
        }
    ],

    "NewPoets": [
        "show scene #000000",
        "nvl A reminiscence of the spirit of my age.",
        "nvl Within the magazine I co-manage with three companions years ago, we developed the preparations for the impending era.",
        "nvl The magazine is imbued with the voices of the New Poets, architects of a new society and a new culture.",
        "nvl Who, then, are these New Poets?",
        "nvl These poets are inspired by the turbulent times of the 20th century. They are ready to create something that is belonging to them.",
        "nvl They are aware of their historical past, but they are free from its constraints. They will create untethered narratives.",
        "nvl And who are these New Poets?",
        "nvl They are the authors who harmonize themselves with the great shifts of this age.", 
        "nvl Our history begins in the twentieth century.",
        "end"
    ]
})
