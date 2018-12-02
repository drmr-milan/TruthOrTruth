var question = document.getElementById("question");
var nextQuest = document.getElementById("next");

var addQuestion = document.getElementById("addQuestion");
var questionsArray = [
                        "Would You Rather Be In A Real-Life Version Of The Walking Dead Or A Real-Life Version Of Game Of Thrones?",
                        "Would You Rather Have Batman’s Skills, Money, Equipment, And Lifestyle Or End Crime Around The World For Good But Be Poor And Unnoticed?",
                        "How Long Would You Last In A Zombie Apocalypse?",
                        "What “Old Person” Things Do You Do?",
                        "What Did You Think Was Cool Then, When You Were Young But Isn’t Cool Now?",
                        "If You Could Know The Absolute And Total Truth To One Question, What Question Would You Ask?",
                        "What Is The Most Unprofessional Thing You’ve Seen Someone Do?",
                        "You Are About To Get Into A Fight, What Song Comes On As Your Soundtrack?",
                        "What Is Something That Most People Learn Only After It’s Too Late?",
                        "What Is The Best Way The 1% Could Spend Their Money?",
                        "How Many Friends Do You Have On Facebook And How Many Actually Mean Something To You?",
                        "If You Could Ask Advice From Any Historical Figure, Who Would It Be? What Would You Ask Them?",
                        "Which Of Your Personality Traits Has Been The Most Useful?",
                        "How Important Are Strong Family Ties To You?",
                        "If You Had A Theme Song, What Would It Be?",
                        "If Mars Was Livable, Would You Accept A One-Way Ticket There?",
                        "What’s A Movie You Can Practically Quote From Start To Finish?",
                        "If You Could Write One New Law That Everyone Had To Obey, What Law Would You Create?",
                        "What Do You Like More, Being A Leader Or A Follower?",
                        "What’s One Pet Peeve Of Yours That You Wish That You Could Get Rid Of–Because It Hampers Your Enjoyment Of Life?",
                        "The House Is On Fire, But Everyone Is Safely Out, The Pets Are Safely Out, And All Wallets/Cash Are Saved. If You Could Make One Last Dash To Get Something, What Would It Be?",
                        "When You Have 30 Minutes Of Free-Time, How Do You Pass The Time?",
                        "What Do You Miss Most About Being A Kid?",
                        "What, If Anything, Have You Ever Re-Gifted?",
                        "You’re A Mad Scientist, What Scientific Experiment Would You Run If Money And Ethics Weren’t An Issue?",
                        "If You Were Given One Thousand Acres Of Land, What Would You Do With It?",
                        "If You Could Hack Into Any One Computer, Whose Computer Would You Choose?",
                        "What’s The Most Interesting Thing You’ve Read Or Seen This Week?",
                        "If You Could Change 3 Things About Your Country, What Would You Change?",
                        "Who Is The Most Impressive Famous Person Alive Today? Why?",
                        "How Do You Feel About Cars Becoming Fully Autonomous And Having No Steering Wheel, Breaks, Or Accelerators?",
                        "What Fact Amazes You Every Time You Think Of It?",
                        "What Gets Too Much Attention In The News?",
                        "If You Had To Flee The Country, Where Would You Choose To Live?",
                        "Do You Think Psychic Abilities Exist? Which One Would You Like To Have?",
                        "What Is The Silliest Thing You Have Heard People Say About You?",
                        "Do You Have Any Ridiculous Goals In Life?",
                        "What’s The Most Spontaneous Thing You’ve Ever Done?",
                        "What Cartoon Do You Still Like To Watch?",
                        "What Was Your Favorite Fairy Tale Growing Up?",
                        "What Skill Or Craft Would You Like To Master?",
                        "How Did You Find Out That Santa Isn’t Real?",
                        "What Personality Trait Do You Wish You Had?",
                        "What Is The Most Hilarious Childhood Memory You Can Think Of?",
                        "What’s The Meanest Thing You’ve Ever Done To Someone To Get Back At Them?",
                        "If You Were Arrested With No Explanation, What Would Your Friends And Family Assume You Had Done?",
                        "In 40 Years What Do You Think You’ll Be Most Nostalgic About?",
                        "Would You Rather Go To A Club, House Party, Or A Small Get Together Of 4 Or 5 Friends?",
                        "Are Any Of Your Friends Completely Opposite To You Or Are Most Of Them Similar To You?",
                        "Using One Word, How Would You Describe Your Family?",
                        "What 3 Famous People, Living Or Dead, Would You Want At Your Fantasy Dinner Party?",
                        "If You Could Shop For Free At One Store, Which One Would You Choose?",
                        "What Movie Can You Watch Over And Over Again?",
                        "Which Pet Made The Most Impact In Your Life?",
                        "When Have You Felt Your Biggest Adrenaline Rush?",
                        "If You Had To Bury Treasure Where Would You Hide It?",
                        "Superman Or Batman?",
                        "100 Duck Sized Horses Or 1 Horse Sized Duck?",
                        "If You Were Given A One-Minute Ad Slot During The Super Bowl That You Couldn’t Sell, What Would You Fill It With?",
                        "What Is The Most Important Object You Own?",
                        "What Event In Your Life Would Make A Good Movie?",
                        "On A Day Held In Your Honor, What Would People Have To Do?",
                        "What Food Combination Do You Want To Ban?",
                        "What’s Your First Executive Order As King Of (This Coffee Shop, This Grocery Store, This Room)?",
                        "If You Could Be Great At One Sport Which Would You Choose?",
                        "If You Could Dedicate Your Life To Solving One Problem, What Problem Would You Choose?",
                        "If You Had One Day Left To Live On The Earth, What Would You Do?",
                        "What Makes A Person Beautiful To You?",
                        "What’s A Big Favor You Have Done For A Friend? How About A Big Favor That A Friend Has Done For You?",
                        "If You Turn Into Your Partner For A Day, What Would You Do?",
                        "If We Had Only One Weekend Together Before The End Of The World And We Were To Spend It Together, What Do You Think We’d Do?",
                        "What Class Would You Love To Take Together?",
                        "What Makes You Feel Young?",
                        "What Do You Do When You’re Angry? How Can I Help?",
                        "What Would Be Your “Perfect” Day?",
                        "Out Of All The World’s Languages, Which One Sounds Funniest To You?",
                        "What’s The Title Of Your Quarter-Life Biography?",
                        "Where Is Your Favorite Place To Be With Me?",
                        "Would You Rather… Talk Like Yoda Or Breathe Like Darth Vader?",
                        "What Would Be The Absolute Worst Name You Could Give Your Child?",
                        "What Mildly Annoying Curse Do You Wish You Could Curse People With?",
                        "What’s The Weirdest Thing You Did As A Child?",
                        "How Would You Conquer The Earth?",
                        "Why Can’t Most People Keep Up With Trends In Music / Fashion / Tech As They Get Older?",
                        "If You Could Swim In Any Liquid What Would It Be And Why?",
                        "What Is The Worst Pet You Have Ever Had?",
                        "If You Could Ask Your Pet 3 Questions, What Would They Be?",
                        "What Simpsons Character Are You?",
                        "What Separates True Friends From Acquaintances?",
                        "Is Gift Giving Common Among All Human Cultures?",
                        "If You Could Do So, How Would You Change The World?",
                        "If You Were Immortal For A Day, What Would You Do?",
                        "Would You Break The Law To Save A Loved One?",
                        "Where Do You Find Meaning In Your Life?",
                        "What Percentage Of Your Life Do You Feel Truly Alive?",
                        "What Has Taken Up Too Much Of Your Life?",
                        "What Job Do You Think You Were Born To Do?",
                        "Do You Believe Things Happen For A Reason?",
                        "If You Could Replace War With Something To Settle Countries’ Differences, What Would It Be?"
                     ];
var userQuestion = [];
var allQuestion = questionsArray;
var removeBtn = document.getElementById("removeQuestion");

function removeClass() {
    question.classList.remove("rotate");
}

function getLocalStorage() {
    var localStorageArray = JSON.parse(localStorage.getItem("userQuestion"));
    window.userQuestion = userQuestion.concat(localStorageArray);
    window.allQuestion = questionsArray.concat(userQuestion);
}

getLocalStorage();

Array.prototype.random = function (length) {
    return this[Math.floor((Math.random()*length))];
}

addQuestion.addEventListener('click', function() {
    var newQuestion = document.getElementById("text").value;
    if(newQuestion.length > 2) {
        userQuestion.push(newQuestion);
        window.userQuestion;
        allQuestion = questionsArray.concat(userQuestion);    
        window.allQuestion;
        localStorage.setItem('userQuestion', JSON.stringify(userQuestion));
        document.getElementById("text").value = "";
    } else {
        alert("Please enter Your question");
    }
})

nextQuest.addEventListener('click', function() {
    if(allQuestion.length > 0) {
        var item = allQuestion.random(allQuestion.length);
        question.innerHTML = item;
        var asked = allQuestion.indexOf(item);
        allQuestion.splice(asked, 1);
        question.classList.add("rotate");
        setTimeout(removeClass, 500);
    } else {
        question.innerHTML = "No more question :( <br>Press again Next Question to play again :D";
        question.classList.add("rotate");
        setTimeout(removeClass, 500);
        window.allQuestion = questionsArray.concat(userQuestion);
    }
})

removeBtn.addEventListener('click', function() {
    while(userQuestion.length > 0) {
        userQuestion.pop();
    }
    localStorage.clear();
    window.allQuestion = questionsArray.concat(userQuestion);
})