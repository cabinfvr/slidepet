![slidepet logo](https://i.imgur.com/GgWkYMF.png)

# 🦊 Slidepet
Easily create your own virtual pet, for fun!

---

### Easily Get Started in 16 Steps

So you want your own pet.
Here are the steps to get started:

1. [Create a new Google Slide](https://slides.new).
2. Name it `>: 0` (You must name it exactly like this in order to start).
3. In the Navbar, click **Extensions** → **Apps Script**.
4. From there, paste all of `pet.js` and **customize it**.
5. It should be pretty self-explanatory. `email_notifications` should be set to `true`/`false`.
6. Next, go on the side of the screen (below the **ⓘ Info Icon**) and click **⏰ Triggers**.
7. After that, click **Add Trigger**.
8. Make sure `Choose which function to run` says `petMove`.
9. Change `Select type of time-based trigger` to `Minutes Timer`.
10. Change `Select minute interval` to whatever you want. This is how fast your pet will walk.
11. Change `Failure notification settings` to `Immediately`.
![](finishedSetup.png)
*Finished Setup Example*
12. Click **Save**.
13. Now, click your Google Account.
14. **If you get a popup**, click `Advanced` and then `Go to Untitled Project (unsafe)`.
15. Click **Allow**.
16. Congrats! 🎉 Your pet is now up and running. Decorate your slide with pictures of them!

---

### How to use the Cheat Menu

1. After installing SlidePet, you should simply be able to open the menu at the top labelled `SlidePet`.
**Not Working? Troubleshoot Below:**
1. Click `Extensions` → `Apps Script`.
2. From the top bar, where it says `petMove` change to `onOpen`.
![](cheatMenu.png)
3. Click **Debug**.
4. Traceback the error.
5. Need extra help? Check out the useful links section to report a bug.

---

### Useful Links

- [Report issues/bugs](https://github.com/cabinfvr/slidepet/issues)
- [Pet.js File](https://raw.githubusercontent.com/cabinfvr/slidepet/refs/heads/main/pet.js)