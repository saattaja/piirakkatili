# Piirakkatili, Pie Account App
The origin of this app is in an inside joke of my friend group. When someone has a great idea, tells a good joke etc. he or she gets "pies" to an account.

## Using Pie Account app
Home-screen contains names and everyone's pie values. Both are fetched from Firebase database. Add pie-screen is scrollable and contains buttons and text inputs for adding up pie value and sending a message. Account-screen contains messages that user has recieved when pies were added to account.

<img src="https://github.com/saattaja/piirakkatili/assets/113536134/e1710e5a-a147-41fa-abb9-2771e739fc47" height="500">
<img src="https://github.com/saattaja/piirakkatili/assets/113536134/9c5de77a-b001-47c2-b106-9dc0f04fd3fa" height="500">
<img src="https://github.com/saattaja/piirakkatili/assets/113536134/a5b3f4ca-3aaa-4206-8bc0-0c4823597b16" height ="500">
<img src="https://github.com/saattaja/piirakkatili/assets/113536134/ae76a2ca-97a5-46d7-8bd9-f20871d0a484" height ="500">

## Functions in Pie Account App
Names, pie values and messages are updated realtime from Firebase Firestore database. Adding pie value is only possible 1 per second. For now, account is hardcoded in Account-screen(in this version it's Einari's account), because this version does not have login function. I would like to have that later. I also would've wanted a Dialog to pop up when user wants to add pie and write message, but that didn't work out, so I used simple text input. Because of the way all users are fetched and mapped visible in Add pie-screen, the text that is written to text input, shows in every input field, but is only sent to the one it is supposed to. I did not figure out how to do it differently so it would only show in one input field.

## Configuring
Clone this repository to your computer. Open it with VSC and run npm install. You also need working connection to Expo app. To use this app, create .env file and add required API keys to it.

*Janita Kaikkonen*
