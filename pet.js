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