# Piirakkatili, Pie Account App
The origin of this app is in an inside joke of my friend group. When someone has a great idea, tells a good joke etc. he or she gets "pies" to an account.

## Using Pie Account app
Homescreen contains names and everyone's pie values. Both are fetched from Firebase database. Add pie screen is scrollable and contains buttons for adding up pie value. Account screen would contain messages that are sended via added pies (this function is not completed in this version).

<img src="https://github.com/saattaja/piirakkatili/assets/113536134/8be33bf6-a9bd-4a5b-b397-6e4a71d0b771" height="800">
<img src="https://github.com/saattaja/piirakkatili/assets/113536134/4c4116a4-e802-426d-967e-a0374fd51e0b" height="800">

## Functions in Pie Account App
Names and pie values are updated realtime from Firebase Firestore database. Adding pie value is only possible 1 per second. I would've wanted the function where you can type a message to a text input and then send the message and add the pie to one's account, but it didn't quite work. For some reason the app started adding thousands of messages and pies to everyone's account when AddPie-screen was opened. So I had to come down to have only increasing pie value and reading functions. Later I would also like to have a login and register system, so new participants can be added easily.

## Configuring
Clone this repository to your computer. Open it with VSC and run npm install. You also need working connection to Expo app. To use this app, create .env file and add required API keys to it.

*Janita Kaikkonen*
