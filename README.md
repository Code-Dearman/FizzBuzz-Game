# FizzBuzz Game

![Image of FizzBuzz Game main page](assets/images/readme%20images/intoimage.png)

FizzBuzz Game is a website I created with the goal of practising my JavaScript skills. The premise is simple. I wanted to create a site where you could input a number and the code would count up from 1 to *your number* while following these rules.

1. If the number is a multiple of 3. Say Fizz!
2. If the number is a multiple of 5. Say Buzz!
3. If the number is a multiple of 3 and 5. Say FizzBuzz!
4. Otherwise, just say the number.

Fizzbuzz is often used as an early introduction to coding which teaches the learner about writing loops, conditionals, and modulo operations. I first heard about it from the videomaker [Tom Scott](https://www.youtube.com/watch?v=QPZ0pIK_wsc) who used the game as the basis for one of his videos. Watching this not only made me want to try his method out for myself but it also made me realise that what at first looks complicated, for example: 

```
if ((i % 3 != 0) && (i % 5 != 0)) {
    console.log(i)
}
```

Can quickly be broken down into its working components and explained. 

Please check out my website at: [FizzBuzz Game](https://code-dearman.github.io/FizzBuzz-Game/)

## Feature 1: Game

![Game play image](assets/images/readme%20images/gameplay.png)

I think 'game' might be a misnomer but that's what I'm sticking with.

The user is presented with this feature as soon as they reach index.html. They are invited to enter a number and press the 'Go!' button. Pressing this button causes the JavaScript program to count up from one to the desired number, replacing all the appropriate numbers with either Fizz, Buzz or Fizz Buzz.

Another side feature I decided to add was the timer. This mainly stemmed from when the script was in its infancy and I hadn't set an upper limit on the input number. I noticed that at around 10,000 the browser would struggle a little and at much higher numbers it would become unresponsive. The 20,000 limit fixed this but left me wondering how long a user would need to wait before they feel that a program isn't working. The timer serves the user in that, after their first input they can see some feedback on how long it takes to run and also get an idea for how high a number they will input in relation to how long they are willing to wait.

## Feature 2: Calculator

![Calculator image](assets/images/readme%20images/calculator.png)



### Features to add:
- ~~Press enter to submit number.~~
- ~~Improve button styling.~~
- ~~Add timing to updateOuput function.~~
- ~~Add a pop up after three tries on fizz buzz game.~~
- ~~Clear the userInput box after pressing the rest button.~~
- ~~Add a calculator on the about page~~ to test whether a a number is Fizz, Buzz or FizzBuzz.
- ~~Prevent pressing 'go!' if the input area is empty.~~
 - Add more information on the about page.

