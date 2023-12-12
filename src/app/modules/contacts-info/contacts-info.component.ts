import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-info',
  templateUrl: './contacts-info.component.html',
  styleUrls: ['./contacts-info.component.scss']
})
export class ContactsInfoComponent {

  public cardsArr : Array<any> = [
    {
      title: "Sales",
      subtitle: "Take advantage of our great deals",
      email: "E-MAIL",
      emailInfo: "sales@FlyBusinessDeals.com",
      phone: "PHONE",
      phoneInfo: "+1 (855) 855-1221",
    },
    {
      title: "24/7 Support",
      subtitle: "Let the expertise take over uncertainty. 24/7 live support",
      email: "E-MAIL",
      emailInfo: "sales@FlyBusinessDeals.com",
      phone: "PHONE",
      phoneInfo: "+1 (855) 855-1221",
    },
    {
      title: "Anything",
      subtitle: "For everything else, say hello!",
      email: "E-MAIL",
      emailInfo: "sales@FlyBusinessDeals.com",
      phone: "PHONE",
      phoneInfo: "+1 (855) 855-1221",
    },
    {
      title: "Feedback",
      subtitle: "Help us improve our services,leave us a note.",
      email: "E-MAIL",
      emailInfo: "sales@FlyBusinessDeals.com",
      phone: "",
      phoneInfo: "",
    },
    {
      title: "Marketing",
      subtitle: "Let’s create and deliver progress",
      email: "E-MAIL",
      emailInfo: "sales@FlyBusinessDeals.com",
      phone: "",
      phoneInfo: "",
    },
    {
      title: "Partners",
      subtitle: "Become our partner, let’s achieve more together.",
      email: "E-MAIL",
      emailInfo: "sales@FlyBusinessDeals.com",
      phone: "",
      phoneInfo: "",
    },
  ]
}
