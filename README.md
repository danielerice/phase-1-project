# phase-1-project
Welcome to my phase one projext. The poker hand strength tester. It is a single page site that
will help you understand opening hands in texas hold 'em.

# Layout and Functionality
All the cards and card information is stored in a oublic API so don't worry about any files
other than `index.html`. In a terminal, open `index.html` on your local browser.

After all the page content has loaded you'll notice a large `<p>` explaining the math behimd opening hand strength and a hyperlink
with two mouse `event listener`s attached. when your pointer is over the hyperlink text it turns the text color to red and when you move it away it turns the text color back to blue. If you click the link it will take you to another site with more resources about
opening hand strength in poker.

Once you press the populate `button` another `event listener` sends a `fetch` request to the deckofcards API. At first all we get is a `promise` of what's to come and index.js will continue to do it's work but, after we get our `json` string back from the API
everything after `.then` will run. First we convert our `json` file back into something useful, an `array` of `object`s with nested `obeject`s and `array`s. We then run that `array` through a `for` loop that creates new `img`s and `append`s them to the "player hands" `<div>`s. 

If you find yourself in need of some notes there is a `form` with an `event listener`  attached that is listening for a `submit`. Once you `submit` the `event listener` calls the event handler `function` and passes it your note. a `<li>` is then created with 
its `inner text` set to your note's value. It is then appended to the notes `<div>` with an attached button that will delete the note if you wish.

# Resources
[The public API]
(https://www.deckofcardsapi.com/)
[My resource for poker info]
(https://www.thepokerbank.com/strategy/basic/starting-hand-selection/chen-formula/)