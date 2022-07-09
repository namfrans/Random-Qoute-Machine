//#1 Create array of colors --
//#2 Create qoutes array with objects of author. --
//#3 Map each author to his/her qoute. --
//#4 Impelement a function to generate auto nummbers to make the as index to the qoute and author.--

const colors = [
    "#accbee",
    "#2af598",
    "#667eea",
    "#d4fc79",
    "#ff9a9e",
    "#ef855c",
    "#ada5e4",
    "#f0c8d4",
    "#988c97",
    "#020858",
    "#3276b1"
];
const qoutes = {
            "Lee Argus": {
                qoute: "Life is fragile and temporary. The faces of today quickly become the faces of the past. Sorrow, pain, and anger... it all fades-except love. Love is forever and there after, even when we've fallen to our graves."
            },

            "Eleanor Roosevelt": {
                qoute: "Learn from the mistakes of others. You can't live long enough to make them all yourself."
            },
            "W.E.B. Du Bois": {
                qoute: "The most important thing to remember is this: to be ready at any moment to give up what you are for what you might become."
            },
            "Christopher Reeve": {
                qoute: "Once you choose hope, anything’s possible."
            }, 
            "Kierra C.T. Banks": {
                qoute: "Her beauty is laced in her strength and interwoven through her flaws. She embodies perfection."
            },
            "Patch Adams MD": {
                qoute: "At the age of 18, I made up my mind to never have another bad day in my life. I dove into a endless sea of gratitude from which I've never emerged."
            }, 
            "Harry S. Truman": {
                qoute: "A pessimist is one who makes difficulties of his opportunities and an optimist is one who makes opportunities of his difficulties."
            }, 
            "Deepak Ranjan, Nights of the Velvet: A Conditional Dream": {
                qoute: "The day, before sleeping; I recalled everything… to crosscheck that - whether I was wrong at any point of time! Then I realized – it’s not mandatory that the way you perceive life will be the same in which others envision it."
            }, 
            "Jonathan Nettles, Shine Little Light: Bittersweet Memories of Miracles & Wonders": {
                qoute: "Unshakable faith shakes up everything!"
            }, 
            "Kierra C.T. Bank": {
                qoute: "I live for the moments I dare to be me inspite of all that I \"should\" be."
            }
};

let authors = Object.keys(qoutes);


$(document).ready(function() {
    function getNewQoute(){ 
        
        var index = Math.floor( Math.random() * 12 );

        var currentQuote = qoutes[authors[index]].qoute;
        var currentAuthor = authors[index];

        $("#text").html( `<em>"${ currentQuote }</em>"` );
        $("#author").html( `<em>-${ currentAuthor }</em>` );
        $("#quote-box").css( "color", colors[ index ] );
        $("body").css( "background-color", colors[ index ] );
        $(".btn").css( "background", colors[ index ] );
        $("#tweet-quote").click( encodeURIComponent( '"' + currentQuote + '" ' + currentAuthor ) );
    }

    $("#new-quote").click(
       function(){
        getNewQoute();
       }
    );

    getNewQoute();
});