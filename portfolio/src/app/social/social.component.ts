import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { faGithub, faGitlab, faLinkedin, faFacebook, faInstagram, faTwitter, faReddit, faTwitch, faYoutube, faTiktok, faThreads, faSteam } from '@fortawesome/free-brands-svg-icons';

interface Links {
  name: string;
  url: string;
  clazz?: any;
  logo?: string;
}

interface Groups {
  [key: string]: Links[];
}

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent {
  socials: Groups = {
    codes: [
      { name: 'GitHub', url: 'https://github.com/minhperry', clazz: faGithub },
      { name: 'GitLab', url: 'https://gitlab.com/minhperry', clazz: faGitlab },
      { name: 'CodeForces', url: 'https://codeforces.com/profile/redmcgn', logo: 'icons/brands/codeforces.svg' },
    ],
    social: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ptm2002', clazz: faLinkedin },
      { name: 'Facebook', url: 'https://www.facebook.com/redstone.minecraft.m/', clazz: faFacebook },
      { name: 'Instagram', url: 'https://www.instagram.com/minhperry02', clazz: faInstagram },
      { name: 'Twitter', url: 'https://twitter.com/minhperryy', clazz: faTwitter },
      { name: 'Reddit', url: 'https://www.reddit.com/user/vietnam_redstoner' , clazz: faReddit },
      { name: 'YouTube', url: 'https://www.youtube.com/channel/UCvhMyLNH5kOD6Cjq1rGWqAg', clazz: faYoutube },
      { name: 'Twitch', url: 'https://www.twitch.tv/minhperry', clazz: faTwitch },
      { name: 'TikTok', url: 'https://www.tiktok.com/@minhperry02', clazz: faTiktok },
      { name: 'Threads', url: 'https://www.threads.net/@minhperry02', clazz: faThreads },
    ],
    games: [
      { name: 'Steam', url: 'https://steamcommunity.com/id/minhperry', clazz: faSteam },
      { name: 'osu!', url: 'https://osu.ppy.sh/users/16509922', logo: 'icons/brands/osu.svg' },
      { name: 'Minecraft', url: 'https://namemc.com/profile/minhperry02' },
    ],
    contacts: [
      { name: 'Email', url: 'mailto:minhpt2002@gmail.com' },
      { name: 'University Mail', url: 'mailto:tuanminh.phan@tu-dortmund.de' },
    ]    
  }

  asIs() {return 0}
}
