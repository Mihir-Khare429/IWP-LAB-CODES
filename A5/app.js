const news = [
    {
        "author":"Mihir Khare",
        "info":"Here is what you need to know on Friday, August 21, 2020. Markets: Bitcoin price is settling for consolidation after recovery stalled under $11,900. S",
        "headline":"Cryptocurrency Market News: OMG Network spikes 100% in 24 hours as Bitcoin stalls under $12,000"
    },
    {
        "author":"Cointelegraph By Samuel Haig",
        "headline":"We Are the Cool New Startup’ Says Bitcoin Cash Node",
        "info":"With Bitcoin Cash appearing destined for another chain split this November, Bitcoin Cash Node believes it’s ready to spearhead the project."
    },
    {
        "author":"Pablo Piovano",
        "headline":"Forex Today: Risk-on mood is back; dollar resumes the downside ahead of PMIs",
        "info":"Here is what you need to know on Friday, August 21: The preference for riskier assets is extending into the last session of the week on the back of th"
    }
]

const today = document.getElementById('today');
const yesterday = document.getElementById('yesterday');
const tommorow = document.getElementById('tommorow');

const author = document.getElementById('news-author');
const info = document.getElementById('news-info');
const headline = document.getElementById('news-headline');

today.addEventListener('click',function(){
    author.innerText = news[0].author
    info.innerText = news[0].info
    headline.innerText = news[0].headline
})
tommorow.addEventListener('click',function(){
    author.innerText = news[1].author
    info.innerText = news[1].info
    headline.innerText = news[1].headline
})
yesterday.addEventListener('click',function(){
    author.innerText = news[2].author
    info.innerText = news[2].info
    headline.innerText = news[2].headline
})