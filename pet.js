/*

    🦊 Slidepet
    Easily create your own virtual pet, for fun!

    🔗 github.com/cabinfvr/slidepet
    ⭐ If you use this, please star!

*/


function petMove() {
  const userProperties = PropertiesService.getUserProperties();

  let name = userProperties.getProperty('PET_NAME');
  let type = userProperties.getProperty('PET_TYPE');
  let email_notifications = userProperties.getProperty('NOTIFS');;
  let email = userProperties.getProperty('EMAIL');
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
    .addItem('Change Pet Name', 'changePetName')
    .addItem('Change Pet Type', 'changePetType')
    .addItem('Enable/Disable E-mail Notifications', 'toggleEmail')
    .addItem('Change E-mail', 'setEmail')
    .addSeparator()
    .addSubMenu(ui.createMenu('Cheat Menu')
        .addItem('Add 5 miles', 'miles5')
        .addItem('Add 10 miles', 'miles10')
        .addItem('Add 100 miles', 'miles100')
        .addItem('Add 1000 miles', 'miles1000')
    )

    .addToUi();
}

function changePetName() {
  const userProperties = PropertiesService.getUserProperties();
  var ui = SlidesApp.getUi();

  var result = ui.prompt(
    'What do you want to change your Pet Name to?',
    'It can be funny, or serious. ',
    ui.ButtonSet.OK,
  )

  var text = result.getResponseText();
  userProperties.setProperty('PET_NAME', text);
}

function changePetType() {
  const userProperties = PropertiesService.getUserProperties();
  var ui = SlidesApp.getUi();

  var result = ui.prompt(
    'What do you want to change your Pet Type to?',
    'Whatever you want!',
    ui.ButtonSet.OK,
  )

  var text = result.getResponseText();
  userProperties.setProperty('PET_TYPE', text);
}

function toggleEmail() {
  const userProperties = PropertiesService.getUserProperties();
  var ui = SlidesApp.getUi();
  var result = ui.alert(
    "E-mail Notifications",
    "Would you like to enable e-mail notifications? It will only e-mail you every 10,000 miles.",
    ui.ButtonSet.YES_NO,
  )

    if (result == ui.Button.YES) {
      userProperties.setProperty('NOTIFS', true);
    } else {
      userProperties.setProperty('NOTIFS', false);
    }
}

function setEmail() {
  const userProperties = PropertiesService.getUserProperties();
  var ui = SlidesApp.getUi();

  var result = ui.prompt(
    'Enter your E-mail',
    'This will never be shared with anyone.',
    ui.ButtonSet.OK,
  )

  var text = result.getResponseText();
  userProperties.setProperty('EMAIL', text);
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