const quotes = [
    {
        quote:"When you have faults, do not fear to abandon them.",
        author:"Confucius"
    },

    {
        quote:"They must often change who would be constant in happiness or wisdom.",
        author:"Confucius"
    },

    {
        quote:"Age is no guarantee of maturity",
        author:"Lawana Blackwell"
    },

    {
        quote:"Youth isn’t always all it’s touted to be.",
        author:"Lawana Blackwell"
    },

    {
        quote:"You will face many defeats in life, but never let yourself be defeated.",
        author:"Maya Angelou"
    },

    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela"
    },

    {
        quote:"Life is either a daring adventure or nothing at all.",
        author:"Helen Keller"
    },

    {
        quote:"This too shall pass.",
        author:"Lanta Wilson Smith"
    },

    {
        quote:"The die is cast.",
        author:"Julius caesar"
    },

    {
        quote:"Only I can change me life, no one can do it for me.",
        author:"Carol Burnett"
    },
]

const quotesKR = [
    {
        quote:"허물이 있다면, 버리기를 두려워말라.",
        author:"공자"
    },

    {
        quote:"늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.",
        author:"공자"
    },

    {
        quote:"나이가 성숙을 보장하지 않는다.",
        author:"라와나 블랙웰"
    },

    {
        quote:"항상 내세워지는 모습이 젊음의 전부는 아니다.",
        author:"라와나 블랙웰"
    },

    {
        quote:"인생에서 많은 패배에 직면하겠지만 결코 패배하지 말라.",
        author:"마야 안젤루"
    },

    {
        quote:"삶의 가장 큰 영광은 결코 넘어지지 않는 것이 아니라 넘어질 때마다 일어나는 것이다.",
        author:"넬슨 만델라"
    },

    {
        quote:"인생은 대담한 모험이 아니라면 아무것도 아니다.",
        author:"헬렌 켈러"
    },

    {
        quote:"이 또한 지나가리라.",
        author:"랜터 윌슨 스미스"
    },

    {
        quote:"주사위는 던져졌다.",
        author:"줄리어스 시저"
    },

    {
        quote:"나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄수 없다.",
        author:"캐롤 버넷"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


// console.log(quotes[Math.floor(Math.random()*10)]); //랜덤 몀언 호출 

// quote.innerText = quotes[Math.floor(Math.random()*10)] ;

//.length = 길이 측정 [1,2,3,4].length = 4

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
const todaysQuoteKR = quotesKR[Math.floor(Math.random()*quotesKR.length)]; //랜덤 몀언 호출  >> 큐의 길이 수만큼
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
