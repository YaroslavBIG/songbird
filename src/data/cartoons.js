/* eslint-disable max-len */
import kennyVoice from 'sounds/cartoons/sp/Kenny.mp3';
import kyleVoice from 'sounds/cartoons/sp/Kyle.mp3';
import stanVoice from 'sounds/cartoons/sp/Stan.mp3';
import fryVoice from 'sounds/cartoons/futurama/fry.mp3';
import leelaVoice from 'sounds/cartoons/futurama/leela.mp3';
import benderVoice from 'sounds/cartoons/futurama/bender.mp3';
import profVoice from 'sounds/cartoons/futurama/prof.mp3';
import amyVoice from 'sounds/cartoons/futurama/amy.mp3';
import zoidbergVoice from 'sounds/cartoons/futurama/zoidberg.mp3';

export const cartoonsData = [
  [
    {
      id: 1,
      name: 'Homer',
      species: 'Homer Jay Simpson',
      description: `
        Age: 36-39 (was 36 in earlier episodes, but is now 38/39)
        Identity: A big oaf of a father.
        Weight: 239lbs to 260lbs (heaviest was 315lbs)
        Occupation: Safety Inspector (Sector 7G) at Springfield Nuclear Power Plant.
        Credit card no.: 5784365343410709
        Best friend: Barney Gumble
        Enemies: Ned Flanders, the water department, God...
        Hero: Steve McQueen
        `,
      image: 'https://vignette.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png',
      audio: 'https://www.thesoundarchive.com/simpsons/homer/mchocola.mp3',
    },
    {
      id: 2,
      name: 'Bart',
      species: 'Bartholomew Jo-Jo Simpson',
      description: `
        Identity: The troublemaker of the Simpson family.
        Age: 10 (2 years and 38 days older than Lisa)
        Family: Homer, Marge, Lisa, Maggie, Abe, Jacqueline, Patty, Selma, Herb
        Blood type: Double-O negative.
        Allergies: Butterscotch, imitation butterscotch, glow-in-the-dark make-up.
        Catchphrases: Aye Carumba!, Eat my shorts, I didn't do it!
        Best friend: Milhouse Van Houten
        Enemies: Nelson Muntz, Jimbo Jones, Dolph and Kearney
        Mortal enemies: Sideshow Bob, Dr Dementia
        Hero: Ronny Beck
        Idol: Krusty the Klown
      `,
      image: 'https://vignette.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png',
      audio: 'https://www.thesoundarchive.com/simpsons/bart/damned.mp3',
    },
    {
      id: 3,
      name: 'Lisa',
      species: 'Lisa Marie Simpson',
      description: `
      Identity: The smart middle child. She is the moral center of the show.
      Age: 8
      Related to: Homer, Marge, Lisa, Maggie, Abe, Jacqueline, Patty, Selma, Herb.
      Catchphrases: "If anyone wants me I'll be in my room."
      Best friend: Janey.
      Enemies: Allison Taylor, Ralph Wiggum
      Idol: The late Bleeding Gums Murphy
      `,
      image: 'https://vignette.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png',
      audio: 'https://www.thesoundarchive.com/simpsons/misc/lisafox.mp3',
    },
    {
      id: 4,
      name: 'Marge',
      species: 'Marge (Bouvier) Simpson',
      description: `
      Identity: Nagging housewife and mother - the backbone of the Simpson family.
      Age: 34
      Height: 8' 6"
      Shoe size: 13AA
      Maiden name: Bouvier
      Occupation: Housewife/homemaker
      Related to: Homer (husband), Bart, Lisa, and Maggie (kids), Patty and Selma (sisters), and Jacqueline Bouvier (mother)
      Catchphrases: Murmur/groan/nagging
      Best friend: Ruth Powers
      Enemies: None at present
      Hobbies: Knitting, loom
      `,
      image: 'https://vignette.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png',
      audio: 'https://www.thesoundarchive.com/simpsons/misc/margenedpipe.mp3',
    },
    {
      id: 5,
      name: 'Grampa',
      species: 'Abraham Jebediah Simpson II',
      description: `
      Identity: Complaining old man, father of Homer.
      Age: Over 80.
      Occupation: Retired.
      Residence: Springfield Retirement Castle.
      Relatives: Two sons, Homer and Herb (a result of a one night stand at the carnival).
      Prescriptions: Two red pills for back spasms and a yellow one for arrhythmia.
      Idol: TV star Matlock.
      Favorite Shop: Herman's Military Antiques.
      `,
      image: 'https://vignette.wikia.nocookie.net/simpsons/images/a/a9/Abraham_Simpson.png',
      audio: 'https://www.thesoundarchive.com/simpsons/misc/gramps.mp3',
    },
    {
      id: 6,
      name: 'Burns',
      species: 'Charles Montgomery Plantagenet Schicklgruber Burns',
      description: `
      Identity: Money-grabbing billionaire owner of the Springfield Nuclear Power Plant.
      Age: 81 or 104.
      Blood type: Double-O negative
      Related to: Larry, his long-lost, sixty year old illegitimate son.
      Alias: Mr. Snrub.
      Treasured childhood toy: Bobo, a bear which he gave up for a life of fortune.
      Admired by: Waylon Smithers
      Member of: The Stonecutters.
      `,
      image: 'https://vignette.wikia.nocookie.net/simpsons/images/a/a7/Montgomery_Burns.png',
      audio: 'https://www.thesoundarchive.com/simpsons/burns/Mr-Burns-punishment.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Cartman',
      species: 'Eric Theodore Cartman',
      description: `
      Referred to as just Cartman, is one of the main characters.
      None of the other three main children really consider Cartman their friend and do not know
      why they started hanging out with him in the first place,
      but a certain form of unstable friendship ends up being born between them.
      However he is usually Kyle's first choice when he breaks his friendship with Stan.
      `,
      image: 'https://vignette.wikia.nocookie.net/southpark/images/c/c4/Eric-cartman.png',
      audio: 'https://www.thesoundarchive.com/spsounds/Hippy.mp3',
    },
    {
      id: 2,
      name: 'Kenny',
      species: 'Kenneth McCormick',
      description: `
        One of South Park's main characters,
        Kenny is most famous for dying in almost every episode in the first five seasons of South Park.
        He is also easily recognizable for almost always wearing an orange parka, or just having his face hidden,
        that covers most of his face and muffles his speech.
      `,
      image: 'https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/',
      audio: kennyVoice,
    },
    {
      id: 3,
      name: 'Kyle',
      species: 'Kyle Broflovski',
      description: `
      One of South Park's main characters. Based on co-creator Matt Stone,
      Kyle is a member of the only Jewish family in South Park.
      He is often noted for this, as well as his intelligence.
      `,
      image: 'https://vignette.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png',
      audio: kyleVoice,
    },
    {
      id: 4,
      name: 'Stan',
      species: 'Stanley Marsh',
      description: `
      One of South Park's main characters.
      Stan attends South Park Elementary as part of Mr. Garrison's Fourth Grade Class (formerly Third).
      Stan's father Randy is a geologist, and his mother Sharon is a secretary at Tom's Rhinoplasty.
      He briefly had a step-father in "Clubhouses", named Roy.
      `,
      image: 'https://vignette.wikia.nocookie.net/southpark/images/c/c6/Stan-marsh-0.png',
      audio: stanVoice,
    },
    {
      id: 5,
      name: 'Barbrady',
      species: 'Officer Barbrady',
      description: `
      South Park's main police officer,
      with a relatively poor vocabulary.
      He is extremely incompetent at his job,
      usually being incapable of solving the crimes he is legally obliged to investigate.
      Despite this, he does manage to maintain the balance of peace in South Park as shown in "Chickenlover" when,
      shortly after he retired, the city fell into chaos.
      `,
      image: 'https://vignette.wikia.nocookie.net/southpark/images/8/8e/Officer-barbrady.png',
      audio: 'https://www.thesoundarchive.com/spsounds/troublemakers.mp3',
    },
    {
      id: 6,
      name: 'Mackey',
      species: 'Mr. Mackey, Junior',
      description: `
      the counselor at South Park Elementary,
      best known for saying "m'kay" at the end of most of his sentences.
      He also serves on the City Council as head of Public Health. His first name is unknown.
      `,
      image: 'https://vignette.wikia.nocookie.net/southpark/images/5/58/Mr_Mackey_New.png',
      audio: 'https://www.thesoundarchive.com/spsounds/Alcohol.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Fry',
      species: 'Philip J. Fry',
      description: `
      (born August 14, 1974), commonly known simply by his surname Fry,
       is the main protagonist of the animated sitcom Futurama.
       Fry was a native to the 20th century who was cryogenically frozen seconds into the year 2000,
       having fallen in just as 1999 ended. He was revived in 2999 and subsequently became a Delivery boy for the Planet Express Company.
       He is the male protagonist of Futurama.
      `,
      image: 'https://vignette.wikia.nocookie.net/en.futurama/images/c/c0/Philip-J-Fry.png/',
      audio: fryVoice,
    },
    {
      id: 2,
      name: 'Leela',
      species: 'Turanga Leela',
      description: `
      Leela is the only person from her species that lives on earth.
      She was brought up in an orphanage and attended high school where she was a bit of an outcast for having oneeye and went dateless to her prom.
      She took up kick boxing and other similar sports to make up for the lack of friends.
      Whether she attended college is unknown.
      She later got a job as a fate assignment officer and after a while met Fry while she was assigning a career to him.
      He convinced her to quit and she was then offered a job, along with Fry and Bender,
      on the Planet Express delivery crew where she impressed Professor Farnsworth enough for him to make her captain.
      `,
      image: 'https://vignette.wikia.nocookie.net/enfuturama/images/a/ae/Turanga-Leela.png',
      audio: leelaVoice,
    },
    {
      id: 3,
      name: 'Bender',
      species: 'Bender Bending Rodríguez',
      description: `
        Unit 22 Bending Unit and was his mothers 1729 th son.
        His father was killed by a can opener. Comprising of 40% Zinc and 40% Titanium
        he later attended Bending State college where he majored in Bending and minored in Robo-American studies.
        He became a legend for his pranks while being part of the house Epsilon rho rho. He then took up a successful career in bending Girders but tried to kill himself when he found out they were for suicide booths.
        He was saved by Fry and later took up the job of ships cook at Planet Express.
      `,
      image: 'https://vignette.wikia.nocookie.net/enfuturama/images/a/a6/Bender_Rodriguez.png',
      audio: benderVoice,
    },
    {
      id: 4,
      name: 'Farnsworth',
      species: 'Hubert J. Farnsworth',
      description: `
      Professor Hubert Farnsworth is the oldest living member of The Academy of Professors.
      He was born in 2841. He currently owns the Planet Express delivery firm so as to fund his inventing.
      He also lectures at Mars University on the mathematics of quantum neutrino fields
      (he made up the name so no one would dare take it).
      He is technically 160 years old but to avoid being picked up by the sunset squad and taken to
      the near death star he says he is 150.
      `,
      image: 'https://vignette.wikia.nocookie.net/enfuturama/images/4/4e/Professor-Farnsworth.png',
      audio: profVoice,
    },
    {
      id: 5,
      name: 'Amy',
      species: 'Amy Kroker (née Wong)',
      description: `
      Amy Wong is a young Mars University student interning at Planet Express.
      She is daughter to two very pushy parents, Inez and Leo,
      who are desperate for her to produce a grandchild for them.
      Her family come from a very rich background.
      She wears sweats most of the time mainly to go against her parents comments about dressing like a real lady.
      But she does have a large, very fashionable wardrobe usually for clubbing and attracting handsome men.
      Her man-eating style often gets her into conflict with Leela but they are mostly friends.
      She is currently dating DOOP Lieutenant Kif Kroker
      `,
      image: 'https://vignette.wikia.nocookie.net/enfuturama/images/9/94/AmyWong.png',
      audio: amyVoice,
    },
    {
      id: 6,
      name: 'Zoidberg',
      species: 'Dr. John A. Zoidberg',
      description: `
      Dr Zoidberg left his home planet to become a rich doctor but instead he became the Planet Express staff doctor.
      He went to high school where he made people laugh by having barnacles on his face.
      When it is time for mating season on his planet, Decapod 10,
      he becomes angry and violent as well as producing a large fin atop his head.
      But once his species has mated they die. His species have their small brains in their rump.
      He has a cousin Zoidfarb and an Uncle, Harold Zoid, who is a silent hologram star.
      He has a desire to be famous wether it's in the movies or the stand up comedy circuit.
      `,
      image: 'https://vignette.wikia.nocookie.net/en.futurama/images/4/4a/Dr_John_Zoidberg.png',
      audio: zoidbergVoice,
    },
  ],
  [
    {
      id: 1,
      name: 'Rick',
      species: 'Richard Sanchez',
      description: `
      Also known as Rick C-137,
      is the titular main protagonist of Rick and Morty.
      He is a genius scientist whose alcoholism and reckless,
      nihilistic behavior are a source of concern for his daughter's family, as well as the safety of their son, Morty.
      `,
      image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Rick_Sanchez.png',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ram/rick/2/horse.mp3',
    },
    {
      id: 2,
      name: 'Morty',
      species: 'Mortimer Smith Sr.',
      description: `
      One of the two eponymous main protagonists in Rick and Morty.
      Morty is 14 years old
      He is the grandson of Rick and is often forced to tag along on his various misadventures.
      Morty attends Harry Herpson High School along with his sister, Summer.
      `,
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Morty_Smith.png',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ram/morty/1/didntmean.mp3',
    },
    {
      id: 3,
      name: 'Beth',
      species: 'Beth Smith (née Sanchez)',
      description: `
      She is the daughter of Rick Sanchez and Mrs. Sanchez/Diane Sanchez,
      the wife of Jerry Smith, and the mother of Summer Smith and of the deceased Morty Smith,
      she is also the daughter-in-law of Leonard Smith and Joyce Smith,
      and the granddaughter of Rick's Father and an unnamed woman.
      She currently acts as the mother and the daughter of the Morty Smith and Rick Sanchez from Dimension C-137, respectively.
      She currently works as a veterinarian at the St. Equis Hospital.
      `,
      image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ram/beth/1/prison.mp3',
    },
    {
      id: 4,
      name: 'Summer',
      species: 'Summer Smith',
      description: `
        She is the daughter of Jerry Smith and Beth Smith/Clone Beth, the older sister of Morty Smith,
        the granddaughter of Leonard Smith, Joyce Smith, Rick Sanchez and Mrs. Sanchez/Diane Sanchez,
        the great-granddaughter of Rick's Father and a unnamed woman, and the great-niece of the Unnamed Uncle,
        she currently acts as the older sister and the granddaughter of the Morty and Rick from Dimension C-137.
        She is the only other member of the the Smith Family to be aware of that fact.
      `,
      image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/a/ad/Summer_is_cool.jpeg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ram/summer/1/dropped.mp3',
    },
    {
      id: 5,
      name: 'Jerry',
      species: 'Jerry Smith',
      description: `
       Jerry is the husband of Beth Smith, the father of Summer Smith and Morty Smith,
       and the son-in-law of Rick Sanchez.
       The first half of season 1 mostly featured Jerry C-137,
       while the current Jerry was born in and inhabits the Replacement dimension.
       Jerry's marriage to Beth is often rocky and unstable,
       as he spent most of season 3 living in a separate apartment after he divorced with Beth until he and
       Beth reconcile at the Season 3 finale. Jerry has an adversarial relationship with his father-in-law Rick,
       and he often competes with Rick for the admiration of his family.
      `,
      image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/f/f1/Jerry_Smith.png',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ram/jerry/1/canbe.mp3',
    },
    {
      id: 6,
      name: 'Meeseeks',
      species: 'Mr. Meeseeks',
      description: `
      Meeseeks are creatures who are created to serve a singular purpose for which they will go to any length to fulfill.
      After they serve their purpose, they expire and vanish into the air.
      Their motivation to help others comes from the fact that existence is painful to a Meeseeks,
      and the only way to be removed from existence is to complete the task they were called to perform.
      Physical violence or damage cannot eliminate them.
      `,
      image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/6/6c/MeeseeksHQ.png',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ram/meeseeks/1/task.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Stan',
      species: 'Stan Smith',
      description: `
      Stan has worked for the Central Intelligence Agency since the 80s,
      as a field agent and weapons expert under Deputy-Director Avery Bullock. In this role,
      his work has included the interrogation of possible terrorists.
      Stan is always on alert for terrorist activity, at work, and in his home life.
      `,
      image: 'https://static.wikia.nocookie.net/americandad/images/0/0d/AmericanDad_09_Stan_v1F.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ad/stan/1/gettingmarr.mp3',
    },
    {
      id: 2,
      name: 'Francine',
      species: 'Francine Smith (née Ling; formerly Dawson)',
      description: `
      Wife of Stan Smith and the mother of Hayley Smith and Steve Smith.
      Francine was born to Nicholas and Cassandra Dawson.
      When Francine was a young toddler in "Big Trouble in Little Langley",
      her parents gave her up to be in first class on a plane. Not much is known about Francine's younger years;
      however, she was brought up in an orphanage.
      At the age of 7, she was adopted and raised by a Chinese couple, Ma Ma and Bah Bah Ling.
      `,
      image: 'https://static.wikia.nocookie.net/americandad/images/1/16/AmericanDad_09_Francine_v1F.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ad/francine/1/70-80chance.mp3',
    },
    {
      id: 3,
      name: 'Steve',
      species: 'Steven Anita Smith',
      description: `
        Son of Francine and Stan Smith.
        Steve is a bit of a social outcast, but has three close friends.
        Steve and his friends spend a lot of time playing.
        He has only recently entered puberty which he is very proud of,
        and is always trying to lose his virginity or have a girlfriend.
      `,
      image: 'https://static.wikia.nocookie.net/americandad/images/1/17/AmericanDad_09_Steve_v1F.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ad/steve/1/quessex.mp3',
    },
    {
      id: 4,
      name: 'Hayley',
      species: 'Hayley Dreamsmasher Smith-Fischer',
      description: `
       Eldest child of Francine and Stan Smith. Hayley, age 19.
       She was born on a trip to Africa after Stan ignored the doctor's advice who said Francine would give birth any day.
       Hayley is an ultra liberal. She is a casual user of marijuana, helps the homeless.
       Hayley is a talented guitarist and singer.
      `,
      image: 'https://static.wikia.nocookie.net/americandad/images/b/b6/Gal_hayley.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ad/hayley/1/gonnadie.mp3',
    },
    {
      id: 5,
      name: 'Roger',
      species: 'Roger',
      description: `
      He is a space alien whose appearance resembles that of the greys living with the Smith family.
      His planet is never seen or described in-depth, although Roger claims the climate
      of his home world is 400 degrees colder than most ecosystems of Earth, with the possible exception of Antarctica
      Roger is sarcastic, surly, amoral, self-centered, hedonistic, alcoholic, and dresses up in a variety of personas.

      `,
      image: 'https://static.wikia.nocookie.net/americandad/images/b/b9/AmericanDad_09_Roger_v1F.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ad/roger/1/noofcour.mp3',
    },
    {
      id: 6,
      name: 'Klaus',
      species: 'Klaus Heisler',
      description: `
      Klaus was once an East German Olympic ski-jumper until his brainwaves were switched with that of a
      goldfish in the 1986 Winter Olympics
      by the CIA to prevent him from winning the gold medal. Klaus' human body with the goldfish
      brain headed for a nearby stream, and was later found frozen and allowed to decay by the CIA
      Klaus took up residency with the Smith family, where the CIA ordered Stan to have him pose as their pet,
      a fact Klaus has still apparently not come to terms with.
      `,
      image: 'https://static.wikia.nocookie.net/americandad/images/2/20/AmericanDad_09_Klaus_v1F.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/ad/klaus/1/pullself.mp3',
    },
  ],
  [
    {
      id: 1,
      name: 'Peter',
      species: 'Peter Löwenbräu Griffin, Sr.',
      description: `
      Age: 43.
      Born in Mexico, where his mother had tried unsuccessfully to abort him.
      Peter agreed to abandon a revolt of his father-in-law Carter Pewterschmidt's servants in
      exchange for him using his connections to make Peter a United States citizen.
      Peter's favorite pastime is watching TV.
      Peter also has a habit of proving his masculinity, not wanting Lois to fall for another man.
      `,
      image: 'https://vignette.wikia.nocookie.net/familyguy/images/a/aa/FamilyGuy_Single_PeterDrink_R7.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/fg/peter/3/sayfat.mp3',
    },
    {
      id: 2,
      name: 'Stewie',
      species: 'Stewart Gilligan Griffin',
      description: `
        Flamboyant and eccentric one year old infant of Peter and Lois Griffin. Mentally he seems much older.
        Stewie is well-spoken, with an advanced vocabulary, an upper-class British accent and an ambiguous sexual orientation.
        He refers to Peter often as 'The Fat man' and his mother by her given name, Lois.
        Despite all of Stewie's evil traits he did genuinely care about Brian.
        He still wants to kill Lois and take over the world but those goals have taken a back seat.
      `,
      image: 'https://vignette.wikia.nocookie.net/familyguy/images/9/90/FamilyGuy_Single_StewieBackpack_R7.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/fg/stewie/2/keepintouch.mp3',
    },
    {
      id: 3,
      name: 'Lois',
      species: 'Lois Patrice Griffin (née Pewterschmidt)',
      description: `
        Age: 43.
        Born Lois Pewterschmidt, she was brought up in an extremely wealthy household with her sister, Carol.
        They also have a long-lost older brother, Patrick, who was sent to a mental asylum after he became a serial killer.
        She met Peter when he was employed as a towel boy by her aunt. Her rich father, Carter Pewterschmidt,
        cannot stand Peter and makes rude comments at every chance he gets. Peter seems to unintentionally do his absolute
        best to be a thorn in her side. Lois is currently a full-time-mom and also a taught piano in the early years on
        the side.
      `,
      image: 'https://vignette.wikia.nocookie.net/familyguy/images/7/7c/FamilyGuy_Single_LoisPose_R7.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/fg/lois/2/normal.mp3',
    },
    {
      id: 4,
      name: 'Brian',
      species: 'Brian Griffin',
      description: `
        He is an 8-year old talking white Labrador who has lived with the Griffin family since Peter picked him up.
        He also possesses various anthropomorphic qualities,
        such as the ability to speak intelligently, drive a car, and walk bipedally.
        Brian has a cultured background; he loves opera and jazz, and is a fan of John Coltrane.
        Brian speaks fluent French and Tagalog, and is competent in Spanish. He is also a member of MENSA.
      `,
      image: 'https://vignette.wikia.nocookie.net/familyguy/images/c/c2/FamilyGuy_Single_BrianWriter_R7.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/fg/brian/2/notcomf.mp3',
    },
    {
      id: 5,
      name: 'Chris',
      species: 'Christopher Cross Griffin',
      description: `
        Middle child of the Griffin family. He is 13 in the first three seasons, and declared 14.
        Though Chris is not the brightest one in the family, he is particularly coherent and makes a good point when
        talking about movies with Carl. Chris deals with the problems that most pubescent boys face: acne, girls, and school.
        Chris has been known to feel self-conscious about himself, especially his weight.
        He was referred to as an "Elephant Child" when he was born.
        Chris is also willing to do something as drastic as to convert to Judaism order to do better in school.
      `,
      image: 'https://vignette.wikia.nocookie.net/familyguy/images/e/ee/FamilyGuy_Single_ChrisText_R7.jpg',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/fg/chris/1/yourfunny.mp3',
    },
    {
      id: 6,
      name: 'Meg',
      species: 'Megan, aka Megatron Griffin ',
      description: `
        Age: 16.
        Oldest child of Lois and Peter Griffin, and the sister of Chris and Stewie Griffin.
        She is currently attending James Woods Regional High School.
        Meg explains that her father changed her birth certificate to "Megatron"
        after her mother had already selected Megan.
        Meg was originally depicted as the "sweet, teenage daughter" who typically took
        the blame for the terrible things done by the other members of her family.
        However, over the years, the writers stripped Meg down to a desperate teenager who is hardly noticed by her family.
      `,
      image: 'https://vignette.wikia.nocookie.net/familyguy/images/1/1b/FamilyGuy_Single_MegMakeup_R7.jpg ',
      audio: 'https://www.cartoonsoundboards.com/wp-content/audio/fg/meg/1/begreat.mp3',
    },
  ],
  [
    {
      id: 1,
      name: '',
      species: '',
      description: '',
      image: '',
      audio: '',
    },
    {
      id: 2,
      name: '',
      species: '',
      description: '',
      image: '',
      audio: '',
    },
    {
      id: 3,
      name: '',
      species: '',
      description: '',
      image: '',
      audio: '',
    },
    {
      id: 4,
      name: '',
      species: '',
      description: '',
      image: '',
      audio: '',
    },
    {
      id: 5,
      name: '',
      species: '',
      description: '',
      image: '',
      audio: '',
    },
    {
      id: 6,
      name: '',
      species: '',
      description: '',
      image: '',
      audio: '',
    },
  ],
];
