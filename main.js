let quotes = [{quote: "In war, truth is the first casualty.", author: "Aeschylus"}, 
{quote: "All that is necessary for the triumph of evil is that good men do nothing.", author: "Edmund Burke"}, 
{quote: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.", author: "Albert Einstein"}, 
{quote: "Older men declare war. But it is the youth that must fight and die.", author: "Herbert Hoover"}, 
{quote: "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.", author: "Friedrich Nietzsche"}, 
{quote: "In war, there are no unwounded soldiers.", author: "José Narosky"}, 
{quote: "A single death is a tragedy; a million deaths is a statistic.", author: "Joseph Stalin"}, 
{quote: "The object of war is not to die for your country but to make the other bastard die for his.", author: "George S. Patton"}, 
{quote: "War does not determine who is right – only who is left.", author: "Bertrand Russell"}, 
{quote: "Mankind must put an end to war, or war will put an end to mankind", author: "John F. Kennedy"}, 
{quote: "War is cruelty. There is no use trying to reform it. The crueler it is, the sooner it will be over.", author: "William Tecumseh"}, 
{quote: "Only the dead have seen the end of war.", author: "Plato"}, 
{quote: "The real and lasting victories are those of peace, and not of war.", author: "Ralph Waldo Emerson"}, 
{quote: "A soldier will fight long and hard for a bit of colored ribbon.", author: "Napoleon Bonaparte"}, 
{quote: "No battle plan survives contact with the enemy.", author: "Helmuth von Moltke"}, 
{quote: "It is well that war is so terrible, otherwise we should grow too fond of it.", author: "Robert E. Lee"}, 
{quote: "In war, whichever side may call itself the victor, there are no winners, but all are losers.", author: "Neville Chamberlain"}, 
{quote: "What difference does it make to the dead, the orphans, and the homeless, whether the mad destruction is wrought under the name of totalitarianism or in the holy name of liberty or democracy?", author: "Mahatma Gandhi"}, 
{quote: "The soldier's heart, the soldier's spirit, the soldier's soul, are everything. Unless the soldier's soul sustains him, he cannot be relied on and will fail himself and his commander and his country in the end.", author: "George C. Marshall"}, 
{quote: "The more you sweat in peace, the less you bleed in war.", author: "Norman Schwarzkopf"}, 
{quote: "It is fatal to enter any war without the will to win it.", author: "Douglas MacArthur"}, 
{quote: "War is the continuation of politics by other means.", author: "Carl von Clausewitz"}, 
{quote: "He who fears being conquered is sure of defeat.", author: "Napoleon Bonaparte"}, 
{quote: "Wars may be fought with weapons, but they are won by men.", author: "George S. Patton"}, 
{quote: "Victory is always possible for the person who refuses to stop fighting.", author: "Napoleon Hill"}, 
{quote: "There is no instance of a nation benefitting from prolonged warfare.", author: "Sun Tzu"}, 
{quote:  "I must study politics and war that my sons may have liberty to study mathematics and philosophy.", author: "John Adams"}, 
{quote: "No man is an island, entire of itself; every man is a piece of the continent, a part of the main.", author: "John Donne"}, 
{quote: "War is hell.", author: "William Tecumseh Sherman"}];

let i = Math.floor(Math.random()*31);
console.log(`${quotes[i].quote}`);
console.log('-',quotes[i].author);

/*for(let i=0; i<quotes.length; i++){
    console.log(`${i+1}. ${quotes[i].quote}`);
    console.log('  ','-', quotes[i].author);
}*/