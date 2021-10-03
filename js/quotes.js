const quotes = [
  {
    quote : "묻고 더블로 가!",
    movie : "타짜",
  },
  {
    quote : "내가 인마 느그 서장이랑 인마 어저께도 같이 밥 묵고! 싸우나도 같이 가고! 마 X새꺄 마 다했으!",
    movie : "범죄와의 전쟁",
  },
  {
    quote : "야 이거 방탄유리야 개XX야!",
    movie : "아저씨",
  },
  {
    quote : " 내가.. 내가 10년동안 울면서 후회하고 다짐했는데 꼭 그렇게 다 가져가야만 속이 후련했냐!! ",
    movie : "해바라기",
  },
  {
    quote : " 어차피 대중들은 개 돼지들입니다. ",
    movie : "내부자들",
  },
  {
    quote : "아들아, 너는  계획이 다 있구나.",
    movie : "기생충",
  },
  {
    quote : "지나간 일에 대해 새로운 눈물을 낭비하지 말자.",
    movie : "신과 함께 ",
  },
  {
    quote : "용서는 미움에게 방 한 칸만 내주면 되는거래.",
    movie : "내 머리 속의 지우개",
  },
  {
    quote : " 난 사람의 관상만 보았지, 시대를 보진 못했소.",
    movie : "관상",
  },
  {
    quote : "사람되는 건 어렵지만 우리 괴물은 되지 말자.",
    movie : "생활의 발견",
  },
];


const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = todaysQuote.movie;
