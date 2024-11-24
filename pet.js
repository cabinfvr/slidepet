/*

    🦊 Slidepet
    Easily create your own virtual pet, for fun!

    🔗 github.com/cabinfvr/slidepet
    ⭐ If you use this, please star!

*/

let name = 'Hero';
let type = 'Fox';
let email_notifications = false;
let email = 'john@example.com'

function petMove() {
  let title = SlidesApp.getActivePresentation().getName();
  let miles = title.split(': ')[1].split('miles')[0]
  SlidesApp.getActivePresentation().setName(`${name} the ${type} has traveled: ${Number(miles) + 5} miles`)
  let final = Number(miles) + 5; 
  if (final % 10000 === 0) {
    if (email_notifications) {
        GmailApp.sendEmail(email, `${name} just hit a milestone!`, `${name} is now at ${final} miles.`);
    }
  }
}   

function onOpen(e) {
  let ui = SlidesApp.getUi();

  ui.createMenu('SlidePet')
    .addItem('Add 5 miles', 'miles5')
    .addItem('Add 10 miles', 'miles10')
    .addItem('Add 100 miles', 'miles100')
    .addItem('Add 1000 miles', 'miles1000')

    .addToUi();
}

function miles5() {
  let title = SlidesApp.getActivePresentation().getName();
  let miles = title.split(': ')[1].split('miles')[0]
  SlidesApp.getActivePresentation().setName(`${name} the ${type} has traveled: ${Number(miles) + 5} miles`)
}

function miles10() {
  let title = SlidesApp.getActivePresentation().getName();
  let miles = title.split(': ')[1].split('miles')[0]
  SlidesApp.getActivePresentation().setName(`${name} the ${type} has traveled: ${Number(miles) + 10} miles`)
}

function miles100() {
  let title = SlidesApp.getActivePresentation().getName();
  let miles = title.split(': ')[1].split('miles')[0]
  SlidesApp.getActivePresentation().setName(`${name} the ${type} has traveled: ${Number(miles) + 100} miles`)
}

function miles1000() {
  let title = SlidesApp.getActivePresentation().getName();
  let miles = title.split(': ')[1].split('miles')[0]
  SlidesApp.getActivePresentation().setName(`${name} the ${type} has traveled: ${Number(miles) + 1000} miles`)
}