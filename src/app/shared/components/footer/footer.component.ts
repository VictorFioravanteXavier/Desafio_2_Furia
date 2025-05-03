import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  sites: Array<{icon: string, link: string, alt: string}> = []

  constructor() { }

  ngOnInit(): void {
    this.sites = [
      {
        icon: "/assets/img/icon-footer/Twiter.svg",
        link: "https://x.com/FURIA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        alt: "Twiter"
      },
      {
        icon: "/assets/img/icon-footer/Instagram.svg",
        link: "https://www.instagram.com/furiagg/",
        alt: "Instagram"
      },
      {
        icon: "/assets/img/icon-footer/Twitch.svg",
        link: "https://www.twitch.tv/furiatv?lang=pt-br",
        alt: "Twitch"
      },
      {
        icon: "/assets/img/icon-footer/YouTube.svg",
        link: "https://www.youtube.com/@FURIAgg",
        alt: "YouTube"
      },
      {
        icon: "/assets/img/icon-footer/Discord.svg",
        link: "https://discord.com/invite/furia",
        alt: "Discord"
      },
    ]
  }

}
