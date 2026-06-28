document.addEventListener('DOMContentLoaded', function() {
console.log('DOM fully loaded and parsed');

const lesson1Words = [
    { japanese: "わたし", english: "I" },
    { japanese: "あなた", english: "you" },
    { japanese: "あのひと", english: "that person, he, she" },
    { japanese: "さん", english: "Mr., Ms. (title of respect)" },
    { japanese: "ちゃん", english: "(suffix often added to a child's name)" },
    { japanese: "じん", english: "(suffix meaning 'a national of')" },
    { japanese: "せんせい", english: "teacher, instructor （not used when referring to one＇s own job）" },
    { japanese: "きょうし", english: "teacher, instructor" },
    { japanese: "がくせい", english: "student" },
    { japanese: "かいしゃいん", english: "company employee" },
    { japanese: "しゃいん", english: "employee of ～ Company" },
    { japanese: "ぎんこういん", english: "bank employee" },
    { japanese: "いしゃ", english: "[medical] doctor" },
    { japanese: "けんきゅうしゃ", english: "researcher, scholar" },
    { japanese: "だいがく", english: "university" },
    { japanese: "びょういん", english: "hospital" },
    { japanese: "だれ", english: "who" },
    { japanese: "どなた", english: "who [polite]" },
    { japanese: "さい", english: "years old" },
    { japanese: "なんさい", english: "how old" },
    { japanese: "おいくつ", english: "how old [polite]" },
    { japanese: "はい", english: "yes" },
    { japanese: "いいえ", english: "no" },
    { japanese: "はじめまして。", english: "How do you do?" },
    { japanese: "～から きました。", english: "I'm from ～ [country]" },
    { japanese: "どうぞ よろしく", english: "Pleased to meet you." },
    { japanese: "しつれいですが", english: "Excuse me, but" },
    { japanese: "おなまえは？", english: "May I have your name?" },
    { japanese: "こちらは ～さんです。", english: "This is Mr./Ms. ～" }
];

const lesson2Words = [
    { japanese: "これ", english: "this (thing here)" },
    { japanese: "それ", english: "that (thing near the listener)" },
    { japanese: "あれ", english: "that (thing over there)" },
    { japanese: "この ～", english: "this ～, this ～ here" },
    { japanese: "その ～", english: "that ～, that ～ near the listener" },
    { japanese: "あの ～", english: "that ～, that ～ over there" },
    { japanese: "ほん", english: "book" },
    { japanese: "じしょ", english: "dictionary" },
    { japanese: "ざっし", english: "magazine" },
    { japanese: "しんぶん", english: "newspaper" },
    { japanese: "ノート", english: "notebook" },
    { japanese: "てちょう", english: "personal organiser" },
    { japanese: "めいし", english: "business card" },
    { japanese: "カード", english: "(credit) card" },
    { japanese: "えんぴつ", english: "pencil" },
    { japanese: "ボールペン", english: "ballpoint pen" },
    { japanese: "シャープペンシル", english: "mechanical pencil, propelling pencil" },
    { japanese: "かぎ", english: "key" },
    { japanese: "とけい", english: "watch, clock" },
    { japanese: "かさ", english: "umbrella" },
    { japanese: "かばん", english: "bag, briefcase" },
    { japanese: "CD", english: "CD, compact disc" },
    { japanese: "テレビ", english: "television" },
    { japanese: "ラジオ", english: "radio" },
    { japanese: "カメラ", english: "camera" },
    { japanese: "コンピューター", english: "computer" },
    { japanese: "くるま", english: "car, vehicle" },
    { japanese: "つくえ", english: "desk" },
    { japanese: "いす", english: "chair" },
    { japanese: "チョコレート", english: "chocolate" },
    { japanese: "コーヒー", english: "coffee" },
    { japanese: "[お]みやげ", english: "souvenir, present" },
    { japanese: "えいご", english: "the English language" },
    { japanese: "にほんご", english: "the Japanese language" },
    { japanese: "～ご", english: "～ language" },
    { japanese: "なん", english: "what" },
    { japanese: "そう", english: "so" },
    { japanese: "あのう", english: "Er... (used to show hesitation)" },
    { japanese: "えっ", english: "Oh? What! (used when hearing something unexpected)" },
    { japanese: "どうぞ", english: "Here you are. (used when offering something)" },
    { japanese: "[どうも] ありがとう [ございます]", english: "Thank you [very much]." },
    { japanese: "そうですか。", english: "I see." },
    { japanese: "違います。", english: "No, it isn't./You are wrong." },
    { japanese: "あっ", english: "Oh! (used when becoming aware of something)" },
    { japanese: "これから お世話になります。", english: "Thank you in advance for your kindness." },
    { japanese: "こちらこそ [どうぞ] よろしく [お願いします]", english: "Pleased to meet you, too. (response to [どうぞ] よろしく [お願いします])" }
];

const lesson3Words = [
    { japanese: "ここ" , english: "here, this place"},
    { japanese: "そこ" , english: "there, that place near the listener"},
    { japanese: "あそこ" , english: "that place over there"},
    { japanese: "どこ" , english: "where, what place"},
    { japanese: "こちら" , english: "this way"},
    { japanese: "そちら" , english: "that way"},
    { japanese: "あちら" , english: "that ways"},
    { japanese: "どちら" , english: "which way, where"},
    { japanese: "きょうしつ" , english: "classroom"},
    { japanese: "しょくどう" , english: "dining hall, canteen"},
    { japanese: "じむしょ" , english: "office"},
    { japanese: "かいぎしつ" , english: "conference room"},
    { japanese: "うけつけ" , english: "reception desk"},
    { japanese: "ロビー" , english: "lobby"},
    { japanese: "へや" , english: "room"},
    { japanese: "トイレ" , english: "toilet"},
    { japanese: "おてあらい" , english: "toilet"},
    { japanese: "かいだん" , english: "staircase"},
    { japanese: "エレベーター" , english: "lift, elevator"},
    { japanese: "エスカレーター" , english: "escalator"},
    { japanese: "じどうはんばいき" , english: "vending machine"},
    { japanese: "でんわ" , english: "telephone"},
    { japanese: "おくに" , english: "country"},
    { japanese: "かいしゃ" , english: "company"},
    { japanese: "うち" , english: "house"},
    { japanese: "くつ" , english: "shoes"},
    { japanese: "ネクタイ" , english: "necktie"},
    { japanese: "ワイン" , english: "wine"},
    { japanese: "うりば" , english: "department, counter"},
    { japanese: "ちか" , english: "basement"},
    { japanese: "かい" , english: "floor"},
    { japanese: "なんがい" , english: "what floor"},
    { japanese: "えん" , english: "yen"},
    { japanese: "いくら" , english: "how much"},
    { japanese: "ひゃく" , english: "hundred"},
    { japanese: "せん" , english: "thousand"},
    { japanese: "まん" , english: "ten thousand"},
    { japanese: "すみません" , english: "Excuse me"},
    { japanese: "どうも" , english: "Thanks"},
    { japanese: "いらっしゃいませ" , english: "Welcome./May I help you? [a greeting to a customer or a guest entering a shop, etc]"},
    { japanese: "[~を] みせて　ください。" , english: "Please show me[~]"},
    { japanese: "[~を] ください。" , english: "Give me [~], please"},
];

const lesson4Words = [
    { japanese: "おきます" , english: "get up"},
    { japanese: "ねます" , english: "sleep"},
    { japanese: "はたらきます" , english: "work"},
    { japanese: "やすみます" , english: "take a rest"},
    { japanese: "べんきょうします" , english: "study"},
    { japanese: "おわります" , english: "finish"},
    { japanese: "デパート" , english: "department store"},
    { japanese: "ぎんこう" , english: "bank"},
    { japanese: "ゆうびんきょく" , english: "post office"},
    { japanese: "としょかん" , english: "library"},
    { japanese: "びじゅつかん" , english: "art museum"},
    { japanese: "いま" , english: "now"},
    { japanese: "－じ" , english: "－ o＇clock"},
    { japanese: "－ふん（－ぷん）" , english: "－ minute"},
    { japanese: "はん" , english: "half"},
    { japanese: "なんじ" , english: "what time"},
    { japanese: "なんぷん" , english: "what minute"},
    { japanese: "ごぜん" , english: "a.m., morning"},
    { japanese: "ごご" , english: "p.m., afternoon"},
    { japanese: "あさ " , english: "morning"},
    { japanese: "ひる" , english: "noon"},
    { japanese: "ばん（よる)" , english: "night"},
    { japanese: "おととい" , english: "the day before yesterday"},
    { japanese: "きのう" , english: "yesterday"},
    { japanese: "きょう" , english: "today"},
    { japanese: "あした" , english: "tomorrow"},
    { japanese: "あさって" , english: "the day after tomorrow"},
    { japanese: "けさ" , english: "this morning"},
    { japanese: "こんばん" , english: "this evening"},
    { japanese: "やすみ " , english: "rest, a holiday, a day off"},
    { japanese: "ひるやすみ" , english: "lunchtime"},
    { japanese: "しけん" , english: "test, exam"},
    { japanese: "かいぎ" , english: "meeting"},
    { japanese: "えいが" , english: "movie"},
    { japanese: "まいあさ" , english: "every morning"},
    { japanese: "まいばん" , english: "every night"},
    { japanese: "まいにち" , english: "every day"},
    { japanese: "げつようび " , english: "Monday"},
    { japanese: "かようび " , english: "Wednesday"},
    { japanese: "すいようび" , english: "Wednesday"},
    { japanese: "もくようび " , english: "Thursday"},
    { japanese: "きんようび" , english: "Friday"},
    { japanese: "どようび " , english: "Saturday"},
    { japanese: "にちようび " , english: "Sunday"},
    { japanese: "なんようび" , english: "what day of the week"},
    { japanese: "~から" , english: "from~"},
    { japanese: "~まで" , english: "up to ~, until ~"},
    { japanese: "~　と　~" , english: "and"},
    { japanese: "たいへんですね" , english: "Thats tough isnt it"},
    { japanese: "ばんごう" , english: "number"},
    { japanese: "なんばん" , english: "what number"},
    { japanese: "そちら" , english: "your place"}

];

const lesson5Words = [
    { japanese: "いきます" , english: "go"},
    { japanese: "きます" , english: "come"},
    { japanese: "かえります" , english: "go home"},
    { japanese: "がっこう" , english: "school"},
    { japanese: "えき " , english: "station"},
    { japanese: "ひこうき" , english: "airplane"},
    { japanese: "ふね" , english: "ship"},
    { japanese: "でんしゃ" , english: "electric train"},
    { japanese: "ちかてつ" , english: "subway"},
    { japanese: "しんかんせん" , english: "bullet train"},
    { japanese: "バス" , english: "bus"},
    { japanese: "タクシー" , english: "taxi"},
    { japanese: "じてんしゃ" , english: "bicycle"},
    { japanese: "あるいて" , english: "on foot"},
    { japanese: "ひと" , english: "person"},
    { japanese: "かれ" , english: "he, boyfriend"},
    { japanese: "かのじょ" , english: "she, girlfriend"},
    { japanese: "かぞく" , english: "family"},
    { japanese: "ひとりで" , english: "alone"},
    { japanese: "せんしゅう" , english: "last week"},
    { japanese: "こんしゅう" , english: "this week"},
    { japanese: "らいしゅう" , english: "next week"},
    { japanese: "せんげつ" , english: "last month"},
    { japanese: "こんげつ" , english: "this month"},
    { japanese: "らいげつ" , english: "next month"},
    { japanese: "きょねん" , english: "last year"},
    { japanese: "ことし" , english: "this year"},
    { japanese: "らいねん" , english: "next year"},
    { japanese: "－ねん" , english: "-th year"},
    { japanese: "なんねん" , english: "what year"},
    { japanese: "－がつ" , english: "-th month of the year"},
    { japanese: "なんがつ" , english: "what month"},
    { japanese: "ついたち" , english: "1st day"},
    { japanese: "ふつか" , english: "2nd day"},
    { japanese: "みっか" , english: "3rd day"},
    { japanese: "よっか" , english: "4th day"},
    { japanese: "いつか" , english: "5th day"},
    { japanese: "むいか" , english: "6th day"},
    { japanese: "なのか" , english: "7th day"},
    { japanese: "ようか" , english: "8th day"},
    { japanese: "ここのか" , english: "9th day"},
    { japanese: "とおか" , english: "10th day"},
    { japanese: "じゅうよっか" , english: "14th day"},
    { japanese: "はつか" , english: "20th day"},
    { japanese: "にじゅうよっか" , english: "24th day"},
    { japanese: "－にち" , english: "-th day of the month, － day（s）"},
    { japanese: "なんにち" , english: "which day of the month, how many days"},
    { japanese: "いつ" , english: "when"},
    { japanese: "たんじょうび" , english: "birthday"},
    { japanese: "そうですね。" , english: "Yes, it is."},
    { japanese: "［どうも］ありがとう ございました。" , english: "Thank you very much."},
    { japanese: "どう いたしまして。" , english: "You＇re welcome./Don＇t mention it."},
    { japanese: "ーばんせん" , english: "platform － , -th platform"},
    { japanese: "つぎの" , english: "next"},
    { japanese: "ふつう" , english: "local（train）"},
    { japanese: "きゅうこう" , english: "rapid"},
    { japanese: "とっきゅう" , english: "express"},

];

const lesson6Words = [
    { japanese: "たべます", english: "eat" },
    { japanese: "のみます", english: "drink" },
    { japanese: "すいます[たばこを～]", english: "smoke [a cigarette]" },
    { japanese: "みます", english: "see, look at, watch" },
    { japanese: "ききます", english: "hear, listen" },
    { japanese: "よみます", english: "read" },
    { japanese: "かきます", english: "write" },
    { japanese: "かいます", english: "buy" },
    { japanese: "とります[しゃしんを～]", english: "take [a photograph]" },
    { japanese: "あいます[ともだちに～]", english: "meet [a friend]" },
    { japanese: "ごはん", english: "a meal, cooked rice" },
    { japanese: "あさごはん", english: "breakfast" },
    { japanese: "ひるごはん", english: "lunch" },
    { japanese: "ばんごはん", english: "supper" },
    { japanese: "パン", english: "bread" },
    { japanese: "たまご", english: "egg" },
    { japanese: "にく", english: "meat" },
    { japanese: "さかな", english: "fish" },
    { japanese: "やさい", english: "vegetable" },
    { japanese: "くだもの", english: "fruit" },
    { japanese: "みず", english: "water" },
    { japanese: "おちゃ", english: "tea, green tea" },
    { japanese: "こうちゃ", english: "black tea" },
    { japanese: "ぎゅうにゅう (ミルク)", english: "milk" },
    { japanese: "ジュース", english: "juice" },
    { japanese: "ビール", english: "beer" },
    { japanese: "[お]さけ", english: "alcohol, Japanese rice wine" },
    { japanese: "たばこ", english: "tobacco, cigarette" },
    { japanese: "てがみ", english: "letter" },
    { japanese: "レポート", english: "report" },
    { japanese: "しゃしん", english: "photograph" },
    { japanese: "ビデオ", english: "video [tape], video deck" },
    { japanese: "みせ", english: "shop, store" },
    { japanese: "にわ", english: "garden" },
    { japanese: "しゅくだい", english: "homework" },
    { japanese: "テニス", english: "tennis" },
    { japanese: "サッカー", english: "soccer, football" },
    { japanese: "[お]はなみ", english: "cherry-blossom viewing" },
    { japanese: "なに", english: "what" },
    { japanese: "いっしょに", english: "together" },
    { japanese: "ちょっと", english: "a little while, a little bit" },
    { japanese: "いつも", english: "always, usually" },
    { japanese: "ときどき", english: "sometimes" },
    { japanese: "それから", english: "after that, and then" },
    { japanese: "ええ", english: "yes" },
    { japanese: "いいですね。", english: "That's good." },
    { japanese: "わかりました。", english: "I see." },
    { japanese: "なんですか。", english: "Yes? (lit: What is it?)" },
    { japanese: "じゃ、また[あした]。", english: "See you [tomorrow]." }
  ];
  

  const lesson7Words = [
    { japanese: "きります", english: "cut, slice" },
    { japanese: "おくります", english: "send" },
    { japanese: "あげます", english: "give" },
    { japanese: "もらいます", english: "receive" },
    { japanese: "かします", english: "lend" },
    { japanese: "かります", english: "borrow" },
    { japanese: "おしえます", english: "teach" },
    { japanese: "ならいます", english: "learn" },
    { japanese: "かけます[でんわを～]", english: "make [a telephone call]" },
    { japanese: "て", english: "hand, arm" },
    { japanese: "はし", english: "chopsticks" },
    { japanese: "スプーン", english: "spoon" },
    { japanese: "ナイフ", english: "knife" },
    { japanese: "フォーク", english: "fork" },
    { japanese: "はさみ", english: "scissors" },
    { japanese: "パソコン", english: "personal computer" },
    { japanese: "ケータイ", english: "mobile phone, cell phone" },
    { japanese: "メール", english: "e-mail" },
    { japanese: "ねんがじょう", english: "New Year's greeting card" },
    { japanese: "パンチ", english: "punch" },
    { japanese: "ホッチキス", english: "stapler" },
    { japanese: "セロテープ", english: "Sellotape, Scotch tape, clear adhesive tape" },
    { japanese: "けしゴム", english: "rubber, eraser" },
    { japanese: "かみ", english: "paper" },
    { japanese: "はな", english: "flower, blossom" },
    { japanese: "シャツ", english: "shirt" },
    { japanese: "プレゼント", english: "present, gift" },
    { japanese: "にもつ", english: "luggage, baggage, parcel" },
    { japanese: "おかね", english: "money" },
    { japanese: "きっぷ", english: "ticket" },
    { japanese: "クリスマス", english: "Christmas" },
    { japanese: "ちち", english: "(my) father" },
    { japanese: "はは", english: "(my) mother" },
    { japanese: "おとうさん*", english: "(someone else’s) father (also used to address one’s own father)" },
    { japanese: "おかあさん", english: "(someone else’s) mother (also used to address one’s own mother)" },
    { japanese: "もう", english: "already" },
    { japanese: "まだ", english: "not yet" },
    { japanese: "これから", english: "from now on, soon" },
    { japanese: "～、すてきですね。", english: "What a nice [~]!" },
    { japanese: "いらっしゃい。", english: "How nice of you to come. (lit. Welcome.)" },
    { japanese: "どうぞ お上がり ください。", english: "Do come in." },
    { japanese: "しつれいします。", english: "May I? (lit. I commit an incivility.)" },
    { japanese: "[～は] いかがですか。", english: "Won’t you have [~]? / Would you like to have [~]? (used when offering something)" },
    { japanese: "いただきます。", english: "Thank you. / I accept. (said before starting to eat or drink)" },
    { japanese: "ごちそうさま[でした]。", english: "That was delicious. (said after eating or drinking)" }
  ];
  

const lesson8Words = [
    { japanese: "ハンサム[な]", english: "handsome" },
    { japanese: "きれい[な]", english: "beautiful, clean" },
    { japanese: "しずか[な]", english: "quiet" },
    { japanese: "にぎやか[な]", english: "lively" },
    { japanese: "ゆうめい[な]", english: "famous" },
    { japanese: "しんせつ[な]", english: "helpful, kind, considerate (not used about one’s own family members)" },
    { japanese: "げんき[な]", english: "healthy, energetic, cheerful" },
    { japanese: "ひま[な]", english: "free (time)" },
    { japanese: "べんり[な]", english: "convenient" },
    { japanese: "すてき[な]", english: "fine, nice, wonderful" },
    { japanese: "おおきい", english: "big, large" },
    { japanese: "ちいさい", english: "small, little" },
    { japanese: "あたらしい", english: "new, fresh" },
    { japanese: "ふるい", english: "old (not used to describe a person’s age)" },
    { japanese: "いい (よい)", english: "good" },
    { japanese: "わるい", english: "bad" },
    { japanese: "あつい", english: "hot" },
    { japanese: "さむい", english: "cold (referring to temperature)" },
    { japanese: "つめたい", english: "cold (referring to touch)" },
    { japanese: "むずかしい", english: "difficult" },
    { japanese: "やさしい", english: "easy" },
    { japanese: "たかい", english: "expensive, tall, high" },
    { japanese: "やすい", english: "inexpensive, cheap" },
    { japanese: "ひくい", english: "low" },
    { japanese: "おもしろい", english: "interesting" },
    { japanese: "おいしい", english: "delicious, tasty" },
    { japanese: "いそがしい", english: "busy" },
    { japanese: "たのしい", english: "enjoyable" },
    { japanese: "しろい", english: "white" },
    { japanese: "くろい", english: "black" },
    { japanese: "あかい", english: "red" },
    { japanese: "あおい", english: "blue" },
    { japanese: "さくら", english: "cherry (blossom)" },
    { japanese: "やま", english: "mountain" },
    { japanese: "まち", english: "town, city" },
    { japanese: "たべもの", english: "food" },
    { japanese: "ところ", english: "place" },
    { japanese: "りょう", english: "dormitory" },
    { japanese: "レストラン", english: "restaurant" },
    { japanese: "せいかつ", english: "life" },
    { japanese: "[お]しごと", english: "work, business (~を します: do one’s job, work)" },
    { japanese: "どう", english: "how" },
    { japanese: "どんな～", english: "what kind of ～" },
    { japanese: "とても", english: "very" },
    { japanese: "あまり", english: "not so (used with negatives)" },
    { japanese: "そして", english: "and (used to connect sentences)" },
    { japanese: "～が、～", english: "～, but ～" },
    { japanese: "おげんきですか。", english: "How are you?" },
    { japanese: "そうですね。", english: "Well let me see. (pausing)" },
    { japanese: "[～、] もう いっぱい いかがですか。", english: "Won’t you have another cup of [～]?" },
    { japanese: "[いいえ、]けっこうです。", english: "No, thank you." },
    { japanese: "もう～です[ね]。", english: "It’s already [～], isn’t it?" },
    { japanese: "そろそろしつれいします。", english: "It’s time I was going." },
    { japanese: "いいえ。", english: "Not at all." },
    { japanese: "またいらっしゃってください。", english: "Please come again." },
    { japanese: "シャンハイ", english: "Shanghai" },
    { japanese: "きんかくじ", english: "Kinkakuji Temple (the Golden Pavilion)" },
    { japanese: "ならこうえん", english: "Nara Park" },
    { japanese: "ふじさん", english: "Mt. Fuji, the highest mountain in Japan" },
    { japanese: "「しちにんのさむらい」", english: "‘The Seven Samurai’, a classic movie by Akira Kurosawa" }
  ];
  
  const lesson9Words = [
      { japanese: "わかります", english: "understand" },
      { japanese: "あります", english: "have" },
      { japanese: "すき［な］", english: "like" },
      { japanese: "きらい［な］", english: "dislike" },
      { japanese: "じょうず［な］", english: "good at" },
      { japanese: "へた［な］", english: "poor at" },
      { japanese: "のみもの", english: "drinks" },
      { japanese: "りょうり", english: "dish, cooking" },
      { japanese: "スポーツ", english: "sport" },
      { japanese: "やきゅう", english: "baseball" },
      { japanese: "ダンス", english: "dance" },
      { japanese: "りょこう", english: "trip, tour" },
      { japanese: "おんがく", english: "music" },
      { japanese: "うた", english: "song" },
      { japanese: "クラシック", english: "classical music" },
      { japanese: "ジャズ", english: "jazz" },
      { japanese: "コンサート", english: "concert" },
      { japanese: "カラオケ", english: "karaoke" },
      { japanese: "かぶき", english: "Kabuki" },
      { japanese: "え", english: "picture, drawing" },
      { japanese: "じ", english: "letter, character" },
      { japanese: "こまかいおかね", english: "small change" },
      { japanese: "チケット", english: "ticket" },
      { japanese: "じかん", english: "time" },
      { japanese: "ようじ", english: "something to do, errand" },
      { japanese: "やくそく", english: "appointment, promise" },
      { japanese: "アルバイト" , english: "side job"},
      { japanese: "ごしゅじん" , english: "（someone else＇s）husband"},
      { japanese: "おっと／しゅじん" , english: "（my）husband"},
      { japanese: "おくさん" , english: "（someone else＇s）wife"},
      { japanese: "つま／かない" , english: "（my）wife"},
      { japanese: "こども" , english: "child"},
      { japanese: "よく" , english: "well, much"},
      { japanese: "だいたい " , english: "mostly, roughly"},
      { japanese: "たくさん" , english: "many, much"},
      { japanese: "すこし" , english: "a little, a few"},
      { japanese: "ぜんぜん" , english: "not at all"},
      { japanese: "はやく" , english: "early, quickly, fast"},
      { japanese: "～から" , english: "because ～"},
      { japanese: "どうして" , english: "why"},
      { japanese: "かいて　ください" , english: "Please lend（it to me）."},
      { japanese: "いいですよ。" , english: "Sure./Certainly."},
      { japanese: "ざんねんです「が」" , english: "I＇m sorry［, but］, unfortunately"},
      { japanese: "ああ" , english: "oh"},
      { japanese: "いしょに　いかがですか。" , english: "Won＇t you join me（us）?"},
      { japanese: "［～は］ちょっと……。" , english: "［～］is a bit difficult."},
      { japanese: "だめですか。" , english: ""},
      { japanese: "また こんど　おねがいします。" , english: "Please ask me again some other time."},

  ];

  const lesson10Words = [
      { japanese: "あります", english: "exist, be (inanimate)" },
      { japanese: "います", english: "exist, be (animate)" },
      { japanese: "いろいろ［な］", english: "various" },
      { japanese: "おとこのひと", english: "man" },
      { japanese: "おんなのひと", english: "woman" },
      { japanese: "おとこのこ", english: "boy" },
      { japanese: "おんなのこ", english: "girl" },
      { japanese: "いぬ", english: "dog" },
      { japanese: "ねこ", english: "cat" },
      { japanese: "パンダ", english: "panda" },
      { japanese: "ぞう", english: "elephant" },
      { japanese: "き", english: "tree, wood" },
      { japanese: "もの", english: "thing" },
      { japanese: "でんち", english: "battery" },
      { japanese: "はこ", english: "box" },
      { japanese: "スイッチ", english: "switch" },
      { japanese: "れいぞうこ", english: "refrigerator" },
      { japanese: "テーブル", english: "table" },
      { japanese: "ベッド", english: "bed" },
      { japanese: "たな", english: "shelf" },
      { japanese: "ドア", english: "door" },
      { japanese: "まど", english: "window" },
      { japanese: "ポスト", english: "postbox" },
      { japanese: "ビル", english: "building" },
      { japanese: "ATM", english: "ATM" },
      { japanese: "コンビニ", english: "convenience store" },
      { japanese: "こうえん", english: "park" },
      { japanese: "きっさてん", english: "café, coffee shop" },
      { japanese: "～や", english: "~ shop" },
      { japanese: "のりば" , english: "a fixed place to catch taxis, trains, etc."},
      { japanese: "けん" , english: "prefecture"},
      { japanese: "うえ" , english: "on, above, over"},
      { japanese: "した" , english: "under, below, beneath"},
      { japanese: "まえ" , english: "front, before"},
      { japanese: "うしろ" , english: "back, behind"},
      { japanese: "みぎ" , english: "right [side]"},
      { japanese: "ひだり" , english: "left [side]"},
      { japanese: "なか" , english: "in, inside"},
      { japanese: "そと" , english: "outside"},
      { japanese: "となり" , english: "next, next door"},
      { japanese: "ちかく" , english: "near, vicinity"},
      { japanese: "あいだ" , english: "between, among"},
      { japanese: "～や～［など］" , english: "~,~, and so on"},
      { japanese: "[どうも」すみません。" , english: "Thank you."},
      { japanese: "ナンプラー" , english: "nam pla"},
      { japanese: "コーナー" , english: "corner, section"},
      { japanese: "いちばんした" , english: "the bottom"}
  ];

  const lesson11Words = [
      { japanese: "います［こどもが～］" , english: "have [a child]"},
      { japanese: "います［にほんに～］" , english: "stay, be [in Japan]"},
      { japanese: "かかります" , english: "take, cost（referring to time or money)"},
      { japanese: "やすみます［かいしゃを～］" , english: "take a day off [work]"},
      { japanese: "ひとつ" , english: "one（used when counting things）"},
      { japanese: "ふたつ" , english: "two"},
      { japanese: "みっつ" , english: "three"},
      { japanese: "よっつ " , english: "four"},
      { japanese: "いつつ" , english: "five"},
      { japanese: "むっつ" , english: "six"},
      { japanese: "ななつ" , english: "seven"},
      { japanese: "やっつ" , english: "eight"},
      { japanese: "ここのつ" , english: "nine"},
      { japanese: "とお " , english: "ten"},
      { japanese: "いくつ" , english: "how many"},
      { japanese: "ひとり " , english: "one person"},
      { japanese: "ふたり" , english: "two people"},
      { japanese: "－にん" , english: "－people"},
      { japanese: "－だい" , english: "（counter for machines, cars, etc.）"},
      { japanese: "－まい" , english: "（counter for paper, stamps, etc.）"},
      { japanese: "－かい" , english: "－ times"},
      { japanese: "りんご" , english: "apple"},
      { japanese: "みかん" , english: "mandarin orange"},
      { japanese: "みかん" , english: "sandwich"},
      { japanese: "カレー［ライス］" , english: "curry [with rice]"},
      { japanese: "アイスクリーム " , english: "ice cream"},
      { japanese: "きって" , english: "postage stamp"},
      { japanese: "はがき" , english: "postcard"},
      { japanese: "ふうとう " , english: "envelope"},
      { japanese: "りょうしん " , english: "parents"},
      { japanese: "きょうだい" , english: "brothers and sisters"},
      { japanese: "あに " , english: "（my）elder brother"},
      { japanese: "おにいさん" , english: "（someone else＇s）elder brother"},
      { japanese: "あね" , english: "(my）elder sister"},
      { japanese: "おねえさん" , english: "（someone else＇s）elder sister"},
      { japanese: "おとうと " , english: "（my）younger brother"},
      { japanese: "おとうとさん" , english: "（someone else＇s）younger brother"},
      { japanese: "いもうと " , english: "(my）younger sister"},
      { japanese: "いもうとさん" , english: "（someone else＇s）younger sister"},
      { japanese: "がいこく" , english: "foreign country"},
      { japanese: "りゅうがくせい" , english: "foreign student"},
      { japanese: "クラス" , english: "class"},
      { japanese: "－じかん" , english: "－ hour（ s）"},
      { japanese: "－しゅうかん" , english: "－ week（s）"},
      { japanese: "－かげつ" , english: "－ month（s）"},
      { japanese: "－ねん" , english: " －year（ s）"},
      { japanese: "～ぐらい" , english: "about ～"},
      { japanese: "どのくらい" , english: "how long"},
      { japanese: "ぜんぶで" , english: "in total"},
      { japanese: "みんな" , english: "all, everything, everyone"},
      { japanese: "～だけ" , english: "only ～"},
      { japanese: "かしこまりました。" , english: "Certainly,（Sir/Madam）."},
      { japanese: "いい［お］てんきですね。" , english: "Nice weather, isn＇t it?"},
      { japanese: "おでかけですか。" , english: "Are you going out?"},
      { japanese: "ちょっと ～まで。" , english: "I＇m just going to ～."},
      { japanese: "いってらっしゃい" , english: "See you later./So long.（lit. Go and come back.）"},
      { japanese: "ふなびん" , english: "sea mail"},
      { japanese: "こうくうびん" , english: "airmail"},
      { japanese: "おねがいします。" , english: "Please.（lit. ask for a favour)"}

  ];

  const lesson12Words = [
    { japanese: "かんたん[な]", english: "easy, simple" },
    { japanese: "ちかい", english: "near" },
    { japanese: "とおい", english: "far" },
    { japanese: "はやい", english: "fast, early" },
    { japanese: "おそい", english: "slow, late" },
    { japanese: "おおい[ひとが〜]", english: "many [people], much" },
    { japanese: "すくない[ひとが〜]", english: "few [people], a little" },
    { japanese: "あたたかい", english: "warm" },
    { japanese: "すずしい", english: "cool" },
    { japanese: "あまい", english: "sweet" },
    { japanese: "からい", english: "hot (taste), spicy" },
    { japanese: "おもい", english: "heavy" },
    { japanese: "かるい", english: "light" },
    { japanese: "いい[コーヒーが〜]", english: "prefer [coffee]" },
    { japanese: "きせつ", english: "season" },
    { japanese: "はる", english: "spring" },
    { japanese: "なつ", english: "summer" },
    { japanese: "あき", english: "autumn, fall" },
    { japanese: "ふゆ", english: "winter" },
    { japanese: "てんき", english: "weather" },
    { japanese: "あめ", english: "rain, rainy" },
    { japanese: "ゆき", english: "snow, snowy" },
    { japanese: "くもり", english: "cloudy" },
    { japanese: "ホテル", english: "hotel" },
    { japanese: "くうこう", english: "airport" },
    { japanese: "うみ", english: "sea, ocean" },
    { japanese: "せかい", english: "world" },
    { japanese: "パーティー", english: "party" },
    { japanese: "[お]まつり", english: "festival" },
    { japanese: "すきやき", english: "sukiyaki (beef and vegetable hot pot)" },
    { japanese: "さしみ", english: "sashimi (sliced raw fish)" },
    { japanese: "[お]すし", english: "sushi (vinegared rice topped with raw fish)" },
    { japanese: "てんぷら", english: "tempura (seafood and vegetables deep-fried in batter)" },
    { japanese: "ぶたにく", english: "pork" },
    { japanese: "とりにく", english: "chicken" },
    { japanese: "ぎゅうにく", english: "beef" },
    { japanese: "レモン", english: "lemon" },
    { japanese: "いけばな", english: "flower arrangement" },
    { japanese: "もみじ", english: "maple, red leaves of autumn" },
    { japanese: "どちら", english: "which one (of two things)" },
    { japanese: "どちらも", english: "both" },
    { japanese: "いちばん", english: "the most" },
    { japanese: "ずっと", english: "by far" },
    { japanese: "はじめて", english: "for the first time" },
    { japanese: "ただいま。", english: "I'm home." },
    { japanese: "おかえりなさい。", english: "Welcome home." },
    { japanese: "わあ、すごいひとですね。", english: "Wow! Look at all those people!" },
    { japanese: "つかれました。", english: "I'm tired." }
  ];
  
  const lesson13Words = [
    { japanese: "あそびます", english: "enjoy oneself, play" },
    { japanese: "およぎます", english: "swim" },
    { japanese: "むかえます", english: "go to meet, welcome" },
    { japanese: "つかれます", english: "get tired" },
    { japanese: "けっこんします", english: "marry, get married" },
    { japanese: "かいものします", english: "do shopping" },
    { japanese: "しょくじします", english: "have a meal, dine" },
    { japanese: "さんぽします", english: "take a walk [in a park]" },
    { japanese: "[こうえんを〜]", english: "[take a walk in a park]" },
    { japanese: "たいへん[な]", english: "hard, tough, severe, awful" },
    { japanese: "ほしい", english: "want (something)" },
    { japanese: "ひろい", english: "wide, spacious" },
    { japanese: "せまい", english: "narrow, small (room, etc.)" },
    { japanese: "プール", english: "swimming pool" },
    { japanese: "かわ", english: "river" },
    { japanese: "びじゅつ", english: "fine arts" },
    { japanese: "つり", english: "fishing (〜を します: fish, angle)" },
    { japanese: "スキー", english: "skiing (〜を します: ski)" },
    { japanese: "しゅうまつ", english: "weekend" },
    { japanese: "[お]しょうがつ", english: "New Year’s Day" },
    { japanese: "〜ごろ", english: "about ~ (time)" },
    { japanese: "なにか", english: "something" },
    { japanese: "どこか", english: "somewhere, some place" },
    { japanese: "のどが かわきます" , english: "get thirsty"},
    { japanese: "おなかが すきます" , english: "get hungry"},
    { japanese: "そう しましょう" , english: "Let＇s do that."},
    { japanese: "ごちゅうもん" , english: "May I take your order?"},
    { japanese: "ていしょく" , english: "set meal, table d́hôte"},
    { japanese: "ぎゅうどん" , english: "bowl of rice topped with beef"},
    { japanese: "「少将」お待ちください。" , english: "Please wait [a moment]."},
    { japanese: "～で　ございます。" , english: "（polite equivalent of です）"},
    { japanese: "べつべつに" , english: "separately"}
  ];

  const lesson14Words = [
    { japanese: "つけますⅡ", english: "turn on" },
    { japanese: "けしますⅠ", english: "turn off" },
    { japanese: "あけますⅡ", english: "open" },
    { japanese: "しめますⅡ", english: "close, shut" },
    { japanese: "いそぎますⅠ", english: "hurry" },
    { japanese: "まちますⅠ", english: "wait" },
    { japanese: "もちますⅠ", english: "hold" },
    { japanese: "とりますⅠ", english: "take, pass" },
    { japanese: "てつだいますⅠ", english: "help (with a task)" },
    { japanese: "よびますⅠ", english: "call" },
    { japanese: "はなしますⅠ", english: "speak, talk" },
    { japanese: "つかいますⅠ", english: "use" },
    { japanese: "とめますⅡ", english: "stop, park" },
    { japanese: "みせますⅡ", english: "show" },
    { japanese: "おしえますⅡ", english: "tell [an address]" },
    { japanese: "[じゅうしょを～]", english: "[tell an address]" },
    { japanese: "すわりますⅠ", english: "sit down" },
    { japanese: "たちますⅠ", english: "stand up" },
    { japanese: "はいりますⅠ", english: "enter [a café]" },
    { japanese: "[きっさてんに～]", english: "[enter a café]" },
    { japanese: "でますⅡ", english: "go out [of a café]" },
    { japanese: "[きっさてんを～]", english: "[go out of a café]" },
    { japanese: "ふりますⅠ", english: "rain" },
    { japanese: "[あめが～]", english: "[rain]" },
    { japanese: "コビーしますⅢ", english: "copy" },
    { japanese: "でんき", english: "electricity, light" },
    { japanese: "エアコン", english: "air conditioner" },
    { japanese: "パスポート", english: "passport" },
    { japanese: "なまえ", english: "name" },
    { japanese: "じゅうしょ", english: "address" },
    { japanese: "ちず", english: "map" },
    { japanese: "しお", english: "salt" },
    { japanese: "さとう", english: "sugar" },
    { japanese: "もんだい", english: "question, problem, trouble" },
    { japanese: "こたえ", english: "answer" },
    { japanese: "よみかた", english: "how to read, way of reading" },
    { japanese: "～かた", english: "how to ~, way of ~ing" },
    { japanese: "まっすぐ", english: "straight" },
    { japanese: "ゆっくり", english: "slowly, leisurely" },
    { japanese: "すぐ", english: "immediately" },
    { japanese: "また", english: "again" },
    { japanese: "あとで", english: "later" },
    { japanese: "もうすこし", english: "a little more" },
    { japanese: "もう～", english: "～ more, another ~" },
    { japanese: "さあ", english: "right (used when encouraging some course of action)" },
    { japanese: "あれ？", english: "Oh! Eh? (in surprise or wonder)" },
    { japanese: "しんごうをみぎへまがってください。", english: "Turn right at the traffic lights." },
    { japanese: "これでおねがいします。", english: "I'd like to pay with this." },
    { japanese: "おつり", english: "change" }
  ];
  
  const lesson15Words = [
    { japanese: "おきますⅠ", english: "put" },
    { japanese: "つくりますⅠ", english: "make, produce" },
    { japanese: "うりますⅠ", english: "sell" },
    { japanese: "しりますⅠ", english: "get to know" },
    { japanese: "すみますⅠ", english: "be going to live" },
    { japanese: "けんきゅうしますⅢ", english: "do research" },
    { japanese: "しりょう", english: "materials, data" },
    { japanese: "カタログ", english: "catalogue" },
    { japanese: "じこくひょう", english: "timetable" },
    { japanese: "ふく", english: "clothes" },
    { japanese: "せいひん", english: "products" },
    { japanese: "ソフト", english: "software" },
    { japanese: "でんしじしょ", english: "electronic dictionary" },
    { japanese: "けいざい", english: "economy" },
    { japanese: "しやくしょ", english: "municipal office, city hall" },
    { japanese: "こうこう", english: "senior high school" },
    { japanese: "はいしゃ", english: "dentist, dentist's" },
    { japanese: "どくしん", english: "single, unmarried" },
    { japanese: "すみません", english: "I'm sorry." },
    { japanese: "みなさん" , english: "Ladies and Gentlemen, everybody"},
    { japanese: "おもいだします" , english: "remember, recollect"},
    { japanese: "いらっしゃいますⅠ " , english: "be（honorific equivalent of います）"}
  ];

  const lesson16Words = [
    { japanese: "のりますⅠ", english: "ride, get on [a train]" },
    { japanese: "[でんしゃに～]", english: "[ride, get on a train]" },
    { japanese: "おりますⅡ", english: "get off [a train]" },
    { japanese: "[でんしゃを～]", english: "[get off a train]" },
    { japanese: "のりかえますⅡ", english: "change (train, etc.)" },
    { japanese: "あびますⅡ", english: "take [a shower]" },
    { japanese: "[シャワーを～]", english: "[take a shower]" },
    { japanese: "いれますⅡ", english: "put in, insert" },
    { japanese: "だしますⅠ", english: "take out, hand in, send" },
    { japanese: "おろしますⅠ", english: "withdraw" },
    { japanese: "[おかねを～]", english: "[withdraw money]" },
    { japanese: "はいりますⅠ", english: "enter [university]" },
    { japanese: "[だいがくに～]", english: "[enter university]" },
    { japanese: "でますⅡ", english: "graduate from [university]" },
    { japanese: "[だいがくを～]", english: "[graduate from university]" },
    { japanese: "おしますⅠ", english: "push, press" },
    { japanese: "のみますⅠ", english: "drink alcohol" },
    { japanese: "はじめますⅡ", english: "start, begin" },
    { japanese: "けんがくしますⅢ", english: "tour, visit a place to study it" },
    { japanese: "でんわしますⅢ", english: "phone" },
    { japanese: "わかい", english: "young" },
    { japanese: "ながい", english: "long" },
    { japanese: "みじかい", english: "short" },
    { japanese: "あかるい", english: "bright, light" },
    { japanese: "くらい", english: "dark" },
    { japanese: "からだ", english: "body, health" },
    { japanese: "あたま", english: "head, brain" },
    { japanese: "かみ", english: "hair" },
    { japanese: "かお", english: "face" },
    { japanese: "め", english: "eye" },
    { japanese: "みみ", english: "ear" },
    { japanese: "はな", english: "nose" },
    { japanese: "くち", english: "mouth" },
    { japanese: "は", english: "tooth" },
    { japanese: "おなか", english: "stomach" },
    { japanese: "あし", english: "leg, foot" },
    { japanese: "せ", english: "height" },
    { japanese: "サービス", english: "service" },
    { japanese: "ジョギング", english: "jogging (～を します: jog)" },
    { japanese: "シャワー", english: "shower" },
    { japanese: "みどり", english: "green, greenery" },
    { japanese: "[お]てら", english: "Buddhist temple" },
    { japanese: "じんじゃ", english: "Shinto shrine" },
    { japanese: "いちばん", english: "number one" },
    { japanese: "どうやって", english: "in what way, how" },
    { japanese: "どの～", english: "which ~ (used for three or more)" },
    { japanese: "どれ", english: "which one (of three or more things)" },
    { japanese: "すごいですね。", english: "That's amazing!" },
    { japanese: "「いいえ。」まだまだです。", english: "[No.] I still have a long way to go." },
    { japanese: "おひきだしですか。", english: "Are you making a withdrawal?" },
    { japanese: "まず", english: "first of all" },
    { japanese: "つぎに", english: "next, as a next step" },
    { japanese: "キャッシュカード", english: "cash dispensing card" },
    { japanese: "あんしょうばんごう", english: "personal identification number, PIN" },
    { japanese: "きんがく", english: "amount of money" },
    { japanese: "かくにん", english: "confirmation (～します: confirm)" },
    { japanese: "ボタン", english: "button" }
  ];
  
  const lesson17Words = [
    { japanese: "おぼえますⅡ", english: "memorise" },
    { japanese: "わすれますⅡ", english: "forget" },
    { japanese: "なくしますⅠ", english: "lose" },
    { japanese: "はらいますⅠ", english: "pay" },
    { japanese: "かえしますⅠ", english: "give back, return" },
    { japanese: "でかけますⅡ", english: "go out" },
    { japanese: "ぬぎますⅠ", english: "take off (clothes, shoes, etc.)" },
    { japanese: "もって いきますⅠ", english: "take (something)" },
    { japanese: "もって きますⅢ", english: "bring (something)" },
    { japanese: "しんぱいしますⅢ", english: "worry" },
    { japanese: "ざんぎょうしますⅢ", english: "work overtime" },
    { japanese: "しゅっちょうしますⅢ", english: "go on a business trip" },
    { japanese: "のみますⅠ", english: "take [medicine]" },
    { japanese: "[くすりを～]", english: "[take medicine]" },
    { japanese: "はいりますⅠ", english: "take [a bath]" },
    { japanese: "[おふろに～]", english: "[take a bath]" },
    { japanese: "たいせつ[な]", english: "important, precious" },
    { japanese: "だいじょうぶ[な]", english: "all right" },
    { japanese: "あぶない", english: "dangerous" },
    { japanese: "きんえん", english: "no smoking" },
    { japanese: "[けんこう]ほけんしょう", english: "[health] insurance card" },
    { japanese: "ねつ", english: "temperature, fever" },
    { japanese: "びょうき", english: "illness, disease" },
    { japanese: "くすり", english: "medicine" },
    { japanese: "[お]ふろ", english: "bath" },
    { japanese: "うわぎ", english: "jacket, outerwear" },
    { japanese: "したぎ", english: "underwear" },
    { japanese: "2、3 にち" , english: "two or three days"},
    { japanese: "2、3～" , english: "two or three"},
    { japanese: "～までに" , english: "before ～, by ～（indicating time limit）"},
    { japanese: "ですから " , english: "therefore, so"},
    { japanese: "どう しましたか。" , english: "What＇s the matter?"},
    { japanese: "のど" , english: "throat"},
    { japanese: "「が」いたいです。" , english: "（I）have a pain [in my ～]."},
    { japanese: "かぜ" , english: "cold, flu"},
    { japanese: "それから" , english: "and, furthermore"},
    { japanese: "おだいじに。" , english: "Take care of yourself.（said to people　who are ill）"},
  ];
  
  const lesson18Words = [
    { japanese: "できますⅡ", english: "be able to, can" },
    { japanese: "あらいますⅠ", english: "wash" },
    { japanese: "ひきますⅠ", english: "play (stringed instrument, piano, etc.)" },
    { japanese: "うたいますⅠ", english: "sing" },
    { japanese: "あつめますⅡ", english: "collect, gather" },
    { japanese: "すてますⅡ", english: "throw away" },
    { japanese: "かえますⅡ", english: "exchange, change" },
    { japanese: "うんてんしますⅢ", english: "drive" },
    { japanese: "よやくしますⅢ", english: "reserve, book" },
    { japanese: "ピアノ", english: "piano" },
    { japanese: "―メートル", english: "― meter" },
    { japanese: "げんきん", english: "cash" },
    { japanese: "しゅみ", english: "hobby" },
    { japanese: "にっき", english: "diary" },
    { japanese: "おいのり", english: "prayer (～を します: pray)" },
    { japanese: "かちょう", english: "section head" },
    { japanese: "ぶちょう", english: "department head" },
    { japanese: "しゃちょう", english: "company president" },
    { japanese: "どうぶつ", english: "animal" },
    { japanese: "うま", english: "horse" },
    { japanese: "インターネット", english: "the Internet" },
    { japanese: "とくに", english: "especially" },
    { japanese: "へえ", english: "What! Really! (used when expressing surprise)" },
    { japanese: "それは おもしろいですね。", english: "That's interesting, isn't it?" },
    { japanese: "なかなか", english: "not easily (used with negatives)" },
    { japanese: "ほんとうですか。", english: "Really?" },
    { japanese: "ぜひ", english: "by all means, really" }
  ];
  
  const lesson19Words = [
    { japanese: "のぼりますⅠ", english: "climb, go up" },
    { japanese: "とまりますⅠ", english: "stay [at a hotel]" },
    { japanese: "[ホテルに～]", english: "[stay at a hotel]" },
    { japanese: "そうじしますⅢ", english: "clean (a room)" },
    { japanese: "せんたくしますⅢ", english: "wash (clothes)" },
    { japanese: "なりますⅠ", english: "become" },
    { japanese: "ねむい", english: "sleepy" },
    { japanese: "つよい", english: "strong" },
    { japanese: "よわい＊", english: "weak" },
    { japanese: "れんしゅう", english: "practice (～[を] します: practice)" },
    { japanese: "ゴルフ", english: "golf (～を します: play golf)" },
    { japanese: "すもう", english: "sumo wrestling (～を します: wrestle)" },
    { japanese: "おちゃ", english: "tea ceremony" },
    { japanese: "ひ", english: "day, date" },
    { japanese: "ちょうし", english: "condition" },
    { japanese: "いちど", english: "once" },
    { japanese: "いちども", english: "not once, never (used with negatives)" },
    { japanese: "だんだん", english: "gradually" },
    { japanese: "もうすぐ", english: "soon" },
    { japanese: "おかげさまで", english: "Thank you. (used when expressing gratitude for help received)" },
    { japanese: "でも", english: "but" },
    { japanese: "かんぱい", english: "Bottoms up./Cheers!" },
    { japanese: "ダイエット", english: "diet" },
    { japanese: "むり「な」", english: "excessive, impossible" },
    { japanese: "からだにいい", english: "bgood for one＇s health" }

  ];

  const lesson20Words = [
    { japanese: "いります", english: "need, require [a visa]" },
    { japanese: "[ビザが～]", english: "[a visa] is required" },
    { japanese: "しらべます", english: "check, investigate" },
    { japanese: "しゅうりします", english: "repair" },
    { japanese: "ぼく", english: "I (informal, used by men)" },
    { japanese: "きみ", english: "you (informal, used for equal or lower status)" },
    { japanese: "～くん", english: "Mr. (informal, used for equal or lower status)" },
    { japanese: "うん", english: "yes (informal)" },
    { japanese: "ううん", english: "no (informal)" },
    { japanese: "ことば", english: "word, language" },
    { japanese: "きもの", english: "kimono (traditional Japanese attire)" },
    { japanese: "ビザ", english: "visa" },
    { japanese: "はじめ", english: "the beginning" },
    { japanese: "おわり", english: "the end of ～, The End" },
    { japanese: "こっち", english: "this way, this place (informal equivalent of こちら)" },
    { japanese: "そっち", english: "that way, that place near the listener (informal equivalent of そちら)" },
    { japanese: "あっち", english: "that way, that place over there (informal equivalent of あちら)" },
    { japanese: "どっち", english: "which one (of two things), which way, where (informal equivalent of どちら)" },
    { japanese: "みんなで", english: "all together" },
    { japanese: "～けど", english: "～, but (informal equivalent of が)" },
    { japanese: "おなかがいっぱいです", english: "(I'm) full" },
    { japanese: "よかったら" , english: "if you like"},
    { japanese: "いろいろ" , english: "various"}
];

const lesson21Words = [
    { japanese: "おもいます", english: "think" },
    { japanese: "いいます", english: "say" },
    { japanese: "かちます", english: "win" },
    { japanese: "まけます", english: "lose, be beaten" },
    { japanese: "[おまつりが] あります", english: "[a festival] be held, take place" },
    { japanese: "やくに たちます", english: "be useful" },
    { japanese: "うごきます", english: "move, work" },
    { japanese: "やめます", english: "quit, retire from [a company], stop, give up" },
    { japanese: "きを つけます", english: "pay attention, take care" },
    { japanese: "りゅうがくします", english: "study abroad" },
    { japanese: "むだ[な]", english: "wasteful" },
    { japanese: "ふべん[な]", english: "inconvenient" },
    { japanese: "すごい", english: "awful, great (expresses astonishment or admiration)" },
    { japanese: "ほんとう", english: "true" },
    { japanese: "うそ", english: "lie" },
    { japanese: "じどうしゃ", english: "car, automobile" },
    { japanese: "こうつう", english: "transport, traffic" },
    { japanese: "ぶっか", english: "[commodity] prices" },
    { japanese: "ほうそう", english: "announcement, broadcast" },
    { japanese: "ニュース", english: "news" },
    { japanese: "アニメ", english: "anime (Japanese animated film)" },
    { japanese: "マンガ", english: "comic book" },
    { japanese: "デザイン", english: "design, artwork" },
    { japanese: "ゆめ", english: "dream" },
    { japanese: "てんさい", english: "genius" },
    { japanese: "しあい", english: "game, match (～を します: play a game/match)" },
    { japanese: "いけん", english: "opinion" },
    { japanese: "はなし", english: "talk, speech, what one says, story (～を します: talk, tell a story)" },
    { japanese: "ちきゅう", english: "earth" },
    { japanese: "つき", english: "moon" },
    { japanese: "さいきん", english: "recently, these days" },
    { japanese: "たぶん", english: "probably, perhaps, maybe" },
    { japanese: "きっと", english: "surely, definitely" },
    { japanese: "ほんとうに", english: "really" },
    { japanese: "そんなに", english: "not so (used with negatives)" },
    { japanese: "～に ついて", english: "about ～, concerning ～" },
    { japanese: "ひさしぶりですね。", english: "It's been a long time [since we last met]." },
    { japanese: "でも のみませんか。", english: "How about drinking ～ or something?" },
    { japanese: "もちろん", english: "of course" },
    { japanese: "もう かえらないと……", english: "I have to get home now……" }
];

const lesson22Words = [
    { japanese: "きますⅡ (着ます)", english: "put on (a shirt, etc.)" },
    { japanese: "はきますⅠ (履きます)", english: "put on (shoes, trousers, etc.)" },
    { japanese: "かぶりますⅠ (被ります)", english: "put on (a hat, etc.)" },
    { japanese: "かけますⅡ [めがねを～] ([眼鏡を～])", english: "put on [glasses]" },
    { japanese: "しますⅢ [ネクタイを～]", english: "put on [a tie]" },
    { japanese: "うまれますⅡ (生まれます)", english: "be born" },
    { japanese: "わたしたち", english: "we" },
    { japanese: "コート", english: "coat" },
    { japanese: "セーター", english: "sweater" },
    { japanese: "スーツ*", english: "suit" },
    { japanese: "ぼうし (帽子)", english: "hat, cap" },
    { japanese: "めがね (眼鏡)", english: "glasses" },
    { japanese: "ケーキ", english: "cake" },
    { japanese: "[お]べんとう ([お]弁当)", english: "box lunch" },
    { japanese: "ロボット", english: "robot" },
    { japanese: "ユーモア", english: "humor" },
    { japanese: "つごう (都合)", english: "convenience" },
    { japanese: "よく", english: "often" },
    { japanese: "えーと", english: "well, let me see" },
    { japanese: "おめでとう [ございます]", english: "Congratulations. (used on birthdays, at weddings, New Year's Day, etc.)" },
    { japanese: "おさがしですか。", english: "Are you looking for ~?" },
    { japanese: "では", english: "Well then" },
    { japanese: "こちら", english: "this (polite equivalent of これ)" },
    { japanese: "やちん (家賃)", english: "rent" },
    { japanese: "ダイニングキッチン", english: "kitchen with a dining area" },
    { japanese: "わしつ (和室)", english: "Japanese-style room" },
    { japanese: "おしいれ (押し入れ)", english: "Japanese-style closet" },
    { japanese: "ふとん (布団)", english: "Japanese-style mattress and quilt" }
  ];
  

  const lesson23Words = [
    { japanese: "ききますⅠ (聞きます)", english: "ask [the teacher]" },
    { japanese: "[せんせいに～] ([先生に～])", english: "[ask the teacher]" },
    { japanese: "まわしますⅠ (回します)", english: "turn" },
    { japanese: "ひきますⅠ (引きます)", english: "pull" },
    { japanese: "かえますⅡ (変えます)", english: "change" },
    { japanese: "さわりますⅠ (触ります)", english: "touch [a door]" },
    { japanese: "[ドアに～]", english: "[touch a door]" },
    { japanese: "でますⅡ [おつりが～] (出ます [お釣りが～])", english: "[change] come out" },
    { japanese: "あるきますⅠ (歩きます)", english: "walk" },
    { japanese: "わたりますⅠ (渡ります)", english: "cross [a bridge]" },
    { japanese: "[はしを～] ([橋を～])", english: "cross [a bridge]" },
    { japanese: "まがりますⅠ (曲がります)", english: "turn [to the right]" },
    { japanese: "[みぎへ～] ([右へ～])", english: "turn [to the right]" },
    { japanese: "さびしい (寂しい)", english: "lonely" },
    { japanese: "[お]ゆ ([お]湯)", english: "hot water" },
    { japanese: "おと (音)", english: "sound" },
    { japanese: "サイズ", english: "size" },
    { japanese: "こしょう (故障)", english: "breakdown (～します: break down)" },
    { japanese: "みち (道)", english: "road, way" },
    { japanese: "こうさてん (交差点)", english: "crossroads" },
    { japanese: "しんごう (信号)", english: "traffic lights" },
    { japanese: "かど (角)", english: "corner" },
    { japanese: "はし (橋)", english: "bridge" },
    { japanese: "ちゅうしゃじょう (駐車場)", english: "car park, parking lot" },
    { japanese: "たてもの (建物)", english: "building" },
    { japanese: "なんかいも (何回も)", english: "many times" },
    { japanese: "～め (～目)", english: "the -th (indicating order)" }
  ];
  
  const lesson24Words = [
    { japanese: "くれますⅡ", english: "give (me)" },
    { japanese: "なおしますⅠ", english: "repair, correct" },
    { japanese: "つれていきますⅠ", english: "take (someone)" },
    { japanese: "つれてきますⅢ", english: "bring (someone)" },
    { japanese: "おくりますⅠ [ひとを～]", english: "escort [someone], go with" },
    { japanese: "しょうかいしますⅢ", english: "introduce" },
    { japanese: "あんないしますⅢ", english: "show around, show the way" },
    { japanese: "せつめいしますⅢ", english: "explain" },
    { japanese: "おじいさん／おじいちゃん", english: "grandfather, old man" },
    { japanese: "おばあさん／おばあちゃん", english: "grandmother, old woman" },
    { japanese: "じゅんび", english: "preparation (～[を]します: prepare)" },
    { japanese: "ひっこし", english: "moving out (～[を]します: move out)" },
    { japanese: "[お]かし", english: "sweets, snacks" },
    { japanese: "ホームステイ", english: "homestay" },
    { japanese: "ぜんぶ", english: "all" },
    { japanese: "じぶんで", english: "by oneself" },
    { japanese: "ほかに", english: "besides" }
  ];
  
  const lesson25Words = [
    { japanese: "かんがえますⅡ", english: "think, consider" },
    { japanese: "つきますⅠ", english: "arrive" },
    { japanese: "とりますⅠ", english: "grow old" },
    { japanese: "[としを～]", english: "[grow old]" },
    { japanese: "たりますⅡ", english: "be enough, be sufficient" },
    { japanese: "いなか", english: "countryside, hometown" },
    { japanese: "チャンス", english: "chance" },
    { japanese: "おく", english: "hundred million" },
    { japanese: "もし [～たら]", english: "if" },
    { japanese: "いみ", english: "meaning" },
    { japanese: "もしもし", english: "hello (used on the phone)" },
    { japanese: "てんきん", english: "transfer (～します: be transferred to another office)" },
    { japanese: "こと", english: "thing, matter (～の こと: thing about ~)" },
    { japanese: "ひま", english: "free time" },
    { japanese: "[いろいろ] おせわに なりました。", english: "Thank you for everything you’ve done for me." },
    { japanese: "がんばりますⅠ", english: "do one’s best" },
    { japanese: "どうぞ おげんきで。", english: "Please take care of yourself. (said when expecting a long separation)" },
    { japanese: "ベトナム", english: "Vietnam" }
  ];

  const kanjiWords1 = [
    { japanese: "異常", hiragana: "いじょう", english: "Abnormality" },
    { japanese: "回数", hiragana: "かいすう", english: "Frequency, times" },
    { japanese: "確定", hiragana: "かくてい", english: "Decision, decide" },
    { japanese: "記憶", hiragana: "きおく", english: "Memory" },
    { japanese: "継続", hiragana: "けいぞく", english: "Continuation, continue" },
    { japanese: "再開", hiragana: "さいかい", english: "Restart" },
    { japanese: "周期", hiragana: "しゅうき", english: "" },
    { japanese: "仕様", hiragana: "しよう", english: "Specification" },
    { japanese: "処理", hiragana: "しょり", english: "Processing" },
    { japanese: "操作", hiragana: "そうさ", english: "Operation, operate" },
    { japanese: "直接", hiragana: "ちょくせつ", english: "Directly" },
    { japanese: "適用", hiragana: "てきよう", english: "Application, apply" },
    { japanese: "途絶", hiragana: "とぜつ", english: "Suspension, cut off" },
    { japanese: "判定", hiragana: "はんてい", english: "Judgment, judge" },
    { japanese: "未満", hiragana: "みまん", english: "Less than" },
    { japanese: "連続", hiragana: "れんぞく", english: "Continuousness" },
    { japanese: "空調", hiragana: "くうちょう", english: "Air-conditioning" },
    { japanese: "水温", hiragana: "すいおん", english: "Water temperature" },
    { japanese: "電動", hiragana: "でんどう", english: "Electric" },
    { japanese: "風量", hiragana: "ふうりょう", english: "Blow volume" },
    { japanese: "以下", hiragana: "いか", english: "Less or equal" },
    { japanese: "開始", hiragana: "かいし", english: "Start" },
    { japanese: "概要", hiragana: "がいよう", english: "Outline" },
    { japanese: "間接", hiragana: "かんせつ", english: "Indirectly" },
    { japanese: "許可", hiragana: "きょか", english: "Permission, permit" },
    { japanese: "誤記", hiragana: "ごき", english: "Error in writing" },
    { japanese: "削除", hiragana: "さくじょ", english: "Deletion, delete" },
    { japanese: "受信", hiragana: "じゅしん", english: "Reception, receive" },
    { japanese: "従い", hiragana: "したがい", english: "Following, follow" },
    { japanese: "連続", hiragana: "れんぞく", english: "Continuousness" }
    // Add more kanji words as needed
];

  const kanjiWords2 = [
      { japanese: "情報", hiragana: "じょうほう", english: "information" },
      { japanese: "入力", hiragana: "にゅうりょく", english: "input" },
      { japanese: "出力", hiragana: "しゅつりょく", english: "output" },
      { japanese: "設定", hiragana: "せってい", english: "setting, set" },
      { japanese: "端子", hiragana: "たんし", english: "terminal" },
      { japanese: "定義", hiragana: "ていぎ", english: "definition" },
      { japanese: "点灯", hiragana: "てんとう", english: "lighting, light" },
      { japanese: "場合", hiragana: "ばあい", english: "case, situation" },
      { japanese: "平均", hiragana: "へいきん", english: "average" },
      { japanese: "華氏", hiragana: "かし", english: "fahrenheit" },
      { japanese: "摂氏", hiragana: "せっし", english: "centigrade" },
      { japanese: "全て", hiragana: "すべて", english: "all, entire" },
      { japanese: "優先", hiragana: "ゆうせん", english: "priority" },
      { japanese: "湿度", hiragana: "しつど", english: "humidity" },
      { japanese: "停車", hiragana: "ていしゃ", english: "stop" },
      { japanese: "排ガス", hiragana: "はいガス", english: "exhaust gas" },
      { japanese: "画面", hiragana: "がめん", english: "screen" },
      { japanese: "圧力", hiragana: "あつりょく", english: "pressure" },
      { japanese: "以上", hiragana: "いじょう", english: "greater than or equal" },
      { japanese: "位置", hiragana: "いち", english: "position" },
      { japanese: "温度", hiragana: "おんど", english: "temperature" },
      { japanese: "解除", hiragana: "かいじょ", english: "cancel, release" },
      { japanese: "回転", hiragana: "かいてん", english: "rotation, revolution" },
      { japanese: "外部", hiragana: "がいぶ", english: "external" },
      { japanese: "回路", hiragana: "かいろ", english: "circuit" },
      { japanese: "下限", hiragana: "かげん", english: "lower limit" },
      { japanese: "変更", hiragana: "へんこう", english: "change" },
      { japanese: "花粉", hiragana: "かふん", english: "pollen" },
      { japanese: "低い", hiragana: "ひくい", english: "low" }
      // Add more kanji words as needed
  ];

  const kanjiWords3 = [
    { japanese: "関連", hiragana: "かんれん", english: "Relation" },
    { japanese: "受け付け", hiragana: "うけつけ", english: "Receive, Reception" },
    { japanese: "記載", hiragana: "きさい", english: "Describe, Description" },
    { japanese: "機能", hiragana: "きのう", english: "Function" },
    { japanese: "各", hiragana: "かく", english: "Each" },
    { japanese: "駆動", hiragana: "くどう", english: "Drive" },
    { japanese: "検出", hiragana: "けんしゅつ", english: "Detection" },
    { japanese: "更新", hiragana: "こうしん", english: "Update" },
    { japanese: "固定", hiragana: "こてい", english: "Fixation, fix" },
    { japanese: "最小", hiragana: "さいしょう", english: "Minimum" },
    { japanese: "最大", hiragana: "さいだい", english: "Maximum" },
    { japanese: "糸", hiragana: "けい", english: "Type, System" },
    { japanese: "実際", hiragana: "じっさい", english: "Actually" },
    { japanese: "修正", hiragana: "しゅうせい", english: "Revision, Revise" },
    { japanese: "済み", hiragana: "すみ", english: "end, finish, complete" },
    { japanese: "上限", hiragana: "じょうげん", english: "upper limit" },
    { japanese: "状態", hiragana: "じょうたい", english: "State" },
    { japanese: "初期値", hiragana: "しょきち", english: "initial value" },
    { japanese: "正常", hiragana: "せいじょう", english: "normality, normal" },
    { japanese: "遷移", hiragana: "せんい", english: "Transition" },
    { japanese: "送信", hiragana: "そうしん", english: "transmission, transmit" },
    { japanese: "多重", hiragana: "たじゅう", english: "Multiple" },
    { japanese: "調整", hiragana: "ちょうせい", english: "adjustment, adjust" },
    { japanese: "通常", hiragana: "つうじょう", english: "usual, common" },
    { japanese: "通信", hiragana: "つうしん", english: "Communication" },
    { japanese: "席", hiragana: "せき", english: "Seat" },
    { japanese: "停止", hiragana: "ていし", english: "Stop" },
    { japanese: "日射", hiragana: "にっしゃ", english: "solar radiation" },
    { japanese: "電圧", hiragana: "でんあつ", english: "Voltage" }
    // Add more kanji words as needed
];

const kanjiWords4 = [
    { japanese: "電気", hiragana: "でんき", english: "Electricity" },
    { japanese: "電流", hiragana: "でんりゅう", english: "Electric current" },
    { japanese: "範囲", hiragana: "はんい", english: "Range" },
    { japanese: "負荷", hiragana: "ふか", english: "Load" },
    { japanese: "過負荷", hiragana: "かふか", english: "Overload" },
    { japanese: "補正", hiragana: "ほせい", english: "Correction" },
    { japanese: "目標", hiragana: "もくひょう", english: "Target" },
    { japanese: "要求", hiragana: "ようきゅう", english: "Request, demand" },
    { japanese: "外気", hiragana: "がいき", english: "Outside air" },
    { japanese: "内気", hiragana: "ないき", english: "Inside air" },
    { japanese: "開度", hiragana: "かいど", english: "Opening" },
    { japanese: "内部", hiragana: "ないぶ", english: "Inside, internal" },
    { japanese: "主", hiragana: "しゅ", english: "Main" },
    { japanese: "主電源", hiragana: "しゅでんげん", english: "Main power source" },
    { japanese: "定数", hiragana: "じょうすう", english: "Constant" },
    { japanese: "吸込口", hiragana: "すいこみぐち", english: "Inlet port" },
    { japanese: "吹出口", hiragana: "ふきだしぐち", english: "Outlet port" },
    { japanese: "且つ", hiragana: "かつ", english: "And" },
    { japanese: "品番", hiragana: "ひんばん", english: "Product number" },
    { japanese: "冷媒", hiragana: "れいばい", english: "Refrigerant" },
    { japanese: "基本", hiragana: "きほん", english: "Basic" },
    { japanese: "押す", hiragana: "おす", english: "Push" },
    { japanese: "作動", hiragana: "さどう", english: "Operation" },
    { japanese: "連動", hiragana: "れんどう", english: "Linkage, connection" },
    { japanese: "起動", hiragana: "きどう", english: "Startup, activation" },
    { japanese: "及び", hiragana: "および", english: "And" },
    { japanese: "備考", hiragana: "びこう", english: "Notes, remarks" },
    { japanese: "図中", hiragana: "ずちゅう", english: "In the figure" },
    { japanese: "該当", hiragana: "がいとう", english: "Correspondence" }
  ];

  const kanjiWords5 = [
    { japanese: "表示", hiragana: "ひょうじ", english: "Display, indication" },
    { japanese: "指示", hiragana: "しじ", english: "Instruction" },
    { japanese: "除湿", hiragana: "じょしつ", english: "Dehumidification" },
    { japanese: "暖房", hiragana: "だんぼう", english: "Heating" },
    { japanese: "消灯", hiragana: "しょうとう", english: "Turning off" },
    { japanese: "消去", hiragana: "しょうきょ", english: "Erase, eliminate" },
    { japanese: "条件", hiragana: "じょうけん", english: "Condition" },
    { japanese: "検知", hiragana: "けんち", english: "Detection" },
    { japanese: "説明", hiragana: "せつめい", english: "Explanation" },
    { japanese: "項目", hiragana: "こうもく", english: "Item" },
    { japanese: "参照", hiragana: "さんしょう", english: "Reference" },
    { japanese: "参考", hiragana: "さんこう", english: "Reference" },
    { japanese: "仕様書", hiragana: "しようしょ", english: "Specifications" },
    { japanese: "裏ワザ", hiragana: "うらわざ", english: "Secret trick" },
    { japanese: "両方", hiragana: "りょうほう", english: "Both" },
    { japanese: "同時", hiragana: "どうじ", english: "Simultaneous" },
    { japanese: "常時", hiragana: "じょうじ", english: "Always" },
    { japanese: "近似値", hiragana: "きんじち", english: "Approximate value" },
    { japanese: "前回", hiragana: "ぜんかい", english: "Last time" },
    { japanese: "仕向", hiragana: "しむけ", english: "Destination" },
    { japanese: "国内", hiragana: "こくない", english: "Domestic" },
    { japanese: "米国", hiragana: "べいこく", english: "America, U.S.A." },
    { japanese: "中国", hiragana: "ちゅうごく", english: "China" },
    { japanese: "欧州", hiragana: "おうしゅう", english: "Europe" },
    { japanese: "中近東", hiragana: "ちゅうきんとう", english: "Middle East" },
    { japanese: "又は", hiragana: "または", english: "Or" },
    { japanese: "対策", hiragana: "たいさく", english: "Counter-measure" },
    { japanese: "但し", hiragana: "ただし", english: "However" },
    { japanese: "制御", hiragana: "せいぎょ", english: "Control" },
  ];
  
  

  // { japanese: "" , english: ""},
  // { japanese: "", hiragana: "", english: "" },

  // Combine lessons into a dictionary
  const lessons = {
    lesson1: lesson1Words,
    lesson2: lesson2Words,
    lesson3: lesson3Words,
    lesson4: lesson4Words,
    lesson5: lesson5Words,
    lesson6: lesson6Words,
    lesson7: lesson7Words,
    lesson8: lesson8Words,
    lesson9: lesson9Words,
    lesson10: lesson10Words,
    lesson11: lesson11Words,
    lesson12: lesson12Words,
    lesson13: lesson13Words,
    lesson14: lesson14Words,
    lesson15: lesson15Words,
    lesson16: lesson16Words,
    lesson17: lesson17Words,
    lesson18: lesson18Words,
    lesson19: lesson19Words,
    lesson20: lesson20Words,
    lesson21: lesson21Words,
    lesson22: lesson22Words,
    lesson23: lesson23Words,
    lesson24: lesson24Words,
    lesson25: lesson25Words
  };

  const kanjiLessons = {
      K1: kanjiWords1,
      K2: kanjiWords2,
      K3: kanjiWords3,
      K4: kanjiWords4,
      K5: kanjiWords5
  };

// Global state variables
let currentWordIndex = 0;
let currentWordList = [];
let isKanjiMode = false;  // Flag to control if Kanji mode is active
let showJapanese = true;  // Flag for showing Japanese/English in Hiragana/Katakana mode
let allVocabularyWords = [];

// DOM elements
const wordElement = document.getElementById('word');
const englishInputElement = document.getElementById('english-input');
const hiraganaInputElement = document.getElementById('hiragana-input');
const feedbackElement = document.getElementById('feedback');
const hiraganaLessonSelection = document.getElementById('hiragana-lesson-selection');
const kanjiLessonSelection = document.getElementById('kanji-lesson-selection');
const vocabularyWordsContainer = document.getElementById('vocabulary-words');
const vocabularyLessonSelection = document.getElementById('vocabulary-lessons');
const vocabsSelection = document.getElementById('vocabulary-lesson-selection');

// Function to clean Japanese words (e.g., remove extra characters like ［な］)
function cleanJapaneseWord(word) {
    return word.replace(/［.*?］/g, '').trim();
}

// Function to shuffle an array (for randomizing word order)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to get selected lessons' words
function getSelectedWords(lessonType) {
    const checkboxes = lessonType === 'kanji' 
        ? document.querySelectorAll('.kanji-lesson-checkbox:checked')
        : document.querySelectorAll('.lesson-checkbox:checked');

    const selectedLessons = Array.from(checkboxes)
        .map(checkbox => checkbox.value);

    let selectedWords = [];
    selectedLessons.forEach(lesson => {
        if (lessonType === 'kanji') {
            selectedWords = selectedWords.concat(kanjiLessons[lesson]); // Assuming kanjiLessons is predefined
        } else {
            selectedWords = selectedWords.concat(lessons[lesson]); // Assuming lessons is predefined
        }
    });

    return selectedWords;
}

// Function to display a word
function displayWord() {
    if (currentWordList.length === 0) {
        wordElement.textContent = "Please select a lesson to begin.";
        return;
    }

    const currentPair = currentWordList[currentWordIndex];

    if (isKanjiMode) {
        wordElement.textContent = currentPair.japanese;
        englishInputElement.placeholder = "Type English translation...";
        hiraganaInputElement.style.display = 'inline-block';
        hiraganaInputElement.placeholder = "Type Hiragana reading...";
        hiraganaInputElement.value = '';
        englishInputElement.value = '';
    } else {
        showJapanese = Math.random() >= 0.5;  
        if (showJapanese) {
            wordElement.textContent = currentPair.japanese;
            englishInputElement.placeholder = "Type English translation...";
        } else {
            wordElement.textContent = currentPair.english;
            englishInputElement.placeholder = "Type Japanese translation...";
        }
        hiraganaInputElement.style.display = 'none';  
        englishInputElement.value = '';
    }

    feedbackElement.textContent = '';
}

// Function to check the user's answer
function checkAnswer() {
    const userEnglishAnswer = englishInputElement.value.trim().toLowerCase();
    const userHiraganaAnswer = hiraganaInputElement.value.trim();
    const currentPair = currentWordList[currentWordIndex];
    let correctJapaneseAnswer = cleanJapaneseWord(currentPair.japanese);
    let correctEnglishAnswer = currentPair.english.toLowerCase();  

    let correctEnglishOptions = correctEnglishAnswer.split(',').map(option => option.trim());

    let isCorrect = false;  // Flag to track if the answer is correct

    if (isKanjiMode) {
        let correctHiraganaAnswer = currentPair.hiragana;

        if (userEnglishAnswer === '' || userHiraganaAnswer === '') {
            feedbackElement.innerHTML = `The correct answers are <strong>${currentPair.english}</strong> (English) and <strong>${currentPair.hiragana}</strong> (Hiragana).`;
            feedbackElement.style.color = '#dc3545';  // Show answer in red
        } else if (correctEnglishOptions.includes(userEnglishAnswer) && userHiraganaAnswer === correctHiraganaAnswer) {
            feedbackElement.innerHTML = 'Correct!';
            feedbackElement.style.color = '#28a745';  // Show correct in green
            isCorrect = true;
        } else {
            feedbackElement.innerHTML = `Incorrect! The correct answers are <strong>${currentPair.english}</strong> (English) and <strong>${currentPair.hiragana}</strong> (Hiragana).`;
            feedbackElement.style.color = '#dc3545';  // Show incorrect in red
        }
    } else {
        if (userEnglishAnswer === '') {
            if (showJapanese) {
                feedbackElement.innerHTML = `The correct answer is <strong>${currentPair.english}</strong>.`;
            } else {
                feedbackElement.innerHTML = `The correct answer is <strong>${cleanJapaneseWord(currentPair.japanese)}</strong>.`;
            }
            feedbackElement.style.color = '#dc3545';  // Show answer in red
        } else {
            if (showJapanese) {
                if (correctEnglishOptions.includes(userEnglishAnswer)) {
                    feedbackElement.innerHTML = 'Correct!';
                    feedbackElement.style.color = '#28a745';  // Show correct in green
                    isCorrect = true;
                } else {
                    feedbackElement.innerHTML = `Incorrect! The correct answer is <strong>${currentPair.english}</strong>.`;
                    feedbackElement.style.color = '#dc3545';  // Show incorrect in red
                }
            } else {
                if (userEnglishAnswer === correctJapaneseAnswer) {
                    feedbackElement.innerHTML = 'Correct!';
                    feedbackElement.style.color = '#28a745';  // Show correct in green
                    isCorrect = true;
                } else {
                    feedbackElement.innerHTML = `Incorrect! The correct answer is <strong>${cleanJapaneseWord(currentPair.japanese)}</strong>.`;
                    feedbackElement.style.color = '#dc3545';  // Show incorrect in red
                }
            }
        }
    }

    // Set timeout: 1 second for correct, 3 seconds for incorrect
    if (isCorrect) {
        setTimeout(nextWord, 1000);  // Move to the next word after 1 second if correct
    } else {
        setTimeout(nextWord, 3000);  // Move to the next word after 3 seconds if incorrect
    }
}


// Function to move to the next word
function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % currentWordList.length;
    displayWord();
}

// Update the word list based on selected lessons
function updateWordList(lessonType) {
    const selectedWords = getSelectedWords(lessonType);
    if (selectedWords.length > 0) {
        currentWordList = selectedWords;
        currentWordIndex = 0;
        shuffleArray(currentWordList);
        displayWord();
    }
}

// Function to display vocabulary words based on the selected lesson
function displayVocabularyWords() {
    const selectedLesson = vocabularyLessonSelection.value;

    // Clear the current words display
    vocabularyWordsContainer.innerHTML = '';

    // Initialize words array
    let words = [];
    
    // Get the words based on the selected lesson
    if (selectedLesson) {
        words = lessons[selectedLesson] || []; // Get Hiragana words
        const kanjiWords = kanjiLessons[selectedLesson] || []; // Get Kanji words
        words = words.concat(kanjiWords); // Combine Hiragana and Kanji words
    } else {
        // If no lesson is selected, combine all words
        for (const lesson in lessons) {
            words = words.concat(lessons[lesson]);
        }
        for (const lesson in kanjiLessons) {
            words = words.concat(kanjiLessons[lesson]);
        }
    }

    // Filter the words based on the search input
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredWords = words.filter(word =>
        word.japanese.toLowerCase().includes(searchTerm) || 
        word.english.toLowerCase().includes(searchTerm) || 
        (word.hiragana && word.hiragana.toLowerCase().includes(searchTerm))
    );

    // Only display the container if there are matching words
    if (filteredWords.length > 0) {
        vocabularyWordsContainer.innerHTML = filteredWords.map(word => 
            `<p>${word.japanese} (${word.hiragana || ''}) - ${word.english}</p>`
        ).join('');
        vocabularyWordsContainer.classList.remove('hidden'); // Show the container
    } else {
        vocabularyWordsContainer.classList.add('hidden'); // Hide if no results
    }
}

// Add event listeners for checkbox changes
document.querySelectorAll('.lesson-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        updateWordList('hiragana');
    });
});

document.querySelectorAll('.kanji-lesson-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        updateWordList('kanji');
    });
});

// Add event listeners for checking the answer when "Enter" is pressed
englishInputElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

hiraganaInputElement.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Add tab-switching functionality
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Manage visibility based on the active tab
        if (this.classList.contains('hiragana-katakana')) {
            vocabsSelection.classList.add('hidden');
            hiraganaLessonSelection.classList.remove('hidden');
            kanjiLessonSelection.classList.add('hidden');
            document.getElementById('input-fields').classList.remove('hidden'); // Show input fields
            isKanjiMode = false;  
            currentWordList = []; 
            displayWord();  // Trigger to show the first word
        } else if (this.classList.contains('kanji')) {
            vocabsSelection.classList.add('hidden');
            hiraganaLessonSelection.classList.add('hidden');
            kanjiLessonSelection.classList.remove('hidden');
            document.getElementById('input-fields').classList.remove('hidden'); // Show input fields
            isKanjiMode = true;  
            currentWordList = []; 
            displayWord();  // Trigger to show the first word
        } else {  // Vocabulary tab
            vocabsSelection.classList.remove('hidden');
            hiraganaLessonSelection.classList.add('hidden');
            kanjiLessonSelection.classList.add('hidden');
            document.getElementById('input-fields').classList.add('hidden'); // Hide input fields
            displayVocabularyWords(); // Show vocabulary words based on selected lesson
        }
    });
});

// Update vocabulary display on lesson selection
vocabularyLessonSelection.addEventListener('change', function() {
    displayVocabularyWords();
});

// Initial display setup
displayWord();

// Function to display vocabulary words based on the selected lesson
function displayVocabularyWords() {
    const selectedLesson = vocabularyLessonSelection.value;

    // Clear the current words display
    vocabularyWordsContainer.innerHTML = '';

    // Initialize words array
    let words = [];
    
    // Get the words based on the selected lesson
    if (selectedLesson) {
        if (selectedLesson.startsWith('K')) { // Check if it's a Kanji lesson
            words = kanjiLessons[selectedLesson] || []; // Get Kanji words
        } else {
            words = lessons[selectedLesson] || []; // Get Hiragana words
        }
    } else {
        // If no lesson is selected, combine all words
        for (const lesson in lessons) {
            words = words.concat(lessons[lesson]);
        }
        for (const lesson in kanjiLessons) {
            words = words.concat(kanjiLessons[lesson]);
        }
    }

    // Filter the words based on the search input
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredWords = words.filter(word =>
        word.japanese.toLowerCase().includes(searchTerm) || 
        word.english.toLowerCase().includes(searchTerm) || 
        (word.hiragana && word.hiragana.toLowerCase().includes(searchTerm))
    );

    // Only display the container if there are matching words
    if (filteredWords.length > 0) {
        vocabularyWordsContainer.innerHTML = filteredWords.map(word => {
            // Show Hiragana only for Kanji words
            if (word.hiragana) {
                return `<p>${word.japanese} (${word.hiragana}) - ${word.english}</p>`;
            } else {
                return `<p>${word.japanese} - ${word.english}</p>`; // No Hiragana for Hiragana/Katakana lessons
            }
        }).join('');
        vocabularyWordsContainer.classList.remove('hidden'); // Show the container
    } else {
        vocabularyWordsContainer.classList.add('hidden'); // Hide if no results
    }
}


// Add event listener for lesson selection
vocabularyLessonSelection.addEventListener('change', function() {
    displayVocabularyWords(); // Update display when the lesson changes
});

// Add event listener for search input
document.getElementById('search-input').addEventListener('input', displayVocabularyWords);


// Update the full list of all vocabulary words when a lesson is selected
function updateAllVocabularyWords() {
    allVocabularyWords = [];
    
    // Add Hiragana words
    for (const lesson in lessons) {
        allVocabularyWords = allVocabularyWords.concat(lessons[lesson]);
    }

    // Add Kanji words (assuming you have a similar structure for kanjiLessons)
    for (const lesson in kanjiLessons) {
        allVocabularyWords = allVocabularyWords.concat(kanjiLessons[lesson]);
    }
}

// Add event listener for search input
document.getElementById('search-input').addEventListener('input', function() {
    displayVocabularyWords(); // Re-display vocabulary words whenever the search input changes
});

// Call this function when the page loads or when vocabulary is displayed
updateAllVocabularyWords();
});

const socket = io("https://telegram-chat-backen.onrender.com");

// ✅ Send text messages (optimistic render)
function sendMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (msg) {
    // Show immediately in chat UI
    addBubble({ msg, isSelf: true });

    // Send to backend
    socket.emit("chat message", msg);
    input.value = "";
  }
}

// ✅ Handle file uploads (optimistic render)
document.getElementById("file-input").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  // Show immediately in chat UI
  addBubble({ msg: `📎 ${file.name}`, isSelf: true });

  const reader = new FileReader();
  reader.onload = () => {
    socket.emit("file upload", {
      name: file.name,
      type: file.type,
      data: new Uint8Array(reader.result) // send binary data
    });
  };
  reader.readAsArrayBuffer(file);
});

// ✅ Display incoming messages (Telegram → Website + backend echo)
socket.on("chat message", (data) => {
  addBubble(data);
});

// ✅ Helper: render bubbles
function addBubble(data) {
  const chatBox = document.getElementById("chat-box");
  const bubble = document.createElement("div");

  // Case 1: plain string (Telegram text)
  if (typeof data === "string") {
    bubble.textContent = data;
    bubble.className = "other";
  }

  // Case 2: object with type (Telegram media or website messages)
  else if (typeof data === "object") {
    if (data.type === "photo") {
      const img = document.createElement("img");
      img.src = data.url;
      img.alt = "Telegram photo";
      img.style.maxWidth = "200px";
      bubble.appendChild(img);
      bubble.className = "other";
    }
    else if (data.type === "document") {
      const link = document.createElement("a");
      link.href = data.url;
      link.textContent = `📎 ${data.name}`;
      link.target = "_blank";
      bubble.appendChild(link);
      bubble.className = "other";
    }
    else if (data.msg) {
      bubble.textContent = data.msg;
      bubble.className = data.isSelf ? "self" : "other";
    }
  }

  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight; // auto-scroll
}

// ✅ Toggle chatbox (desktop + mobile)
const chatIcon = document.getElementById("chat-icon");
const chatContainer = document.getElementById("chat-box-container");

chatIcon.addEventListener("click", () => {
  if (chatContainer.classList.contains("show")) {
    chatContainer.classList.remove("show");
    setTimeout(() => chatContainer.classList.add("hidden"), 300);
  } else {
    chatContainer.classList.remove("hidden");
    setTimeout(() => chatContainer.classList.add("show"), 10);
  }
});

// ✅ Debug: show chat ID in console
socket.on("chat id", (id) => {
  console.log("Telegram Chat ID:", id);
});
