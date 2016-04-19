function getFortune(){
    var tQuotes = ["Do you know me? Of course you do. 'Cause I'm famous!",
    "Quit yo Jibber-jabber! You ain't hurt, yo pathetic!, Argh! If I ever catch you acting like a crazy fool again, you're gonna meet my friend pain! Snickers, get some nuts!",
    "SPEEDWALKING?! I pity you fool! You a disgrace to the man race! It's time to run like a real man! Take that speedwalker! Do it again sucker, and there's going to be trouble! With a capital Mr.T!",
    "Yo makin' me mad sucker, cold water never hurt nobody! It's time to get in da pool, 'cause you're goin' swimmin', fool! TAKE THAT, TOEDIPPER! Argh! Argh! I hate flying, so this had better be the last time I see yo cryin'!",
    "Shut up, fool!",
    "Mr. T has the greatest hair in the world. You can't deny it, it's been proven by science, fool!",
    "I pity the fool who drinks soy milk.",
    "I remember one time I tried to pity this fool. He told me his name was Jeff. He was married. He pulled out his wallet and showed me three pictures of his kids; Kelly, Robert, Brittany. Real cute kids. Don't get too close man. It's hard to pity a fool if you get too close.",
    "I ain't getting on no plane, Hannibal!"];
    
    return tQuotes[Math.floor((Math.random() * 8))];
    
}

console.log(getFortune());
