import Push from "push.js";

const maxElapsed = 1;

export default class Notifier {
  constructor() {}

  startSubmissionSequence() {
    this.initTime = Date.now();
    this.dueTime = this.initTime + maxElapsed * 60000;
    notify();
  }

  postpone(minutes) {
    let postponeTime = Date.now() + minutes * 60000;
    if (this.dueTime >= postponeTime) {
      setTimeout(notify, minutes * 60000);
    } else {
      setTimeout(this.startSubmissionSequence, 60000);
    }
  }
}

let notify = () => {
  Push.create("Hello World", {
    onClick: function() {
      window.open(
        window.origin + "/#/notification",
        "NotificationPopUp",
        "height=300,width=400,modal=yes"
      );
      this.close();
    }
  });
};
