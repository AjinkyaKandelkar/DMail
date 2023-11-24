export class RootObject {
    meta?: Meta;
    notifications?: Notification[];
    response?: Response;
  }
  export class Response {
    venues: Venue[]=[];
    confident: boolean=false;
  }
  export class Venue {
    id: string ="";
    name: string = "";
    contact?: Contact ;
    location?: Location ;
    categories?: Category[] ;
    verified: boolean = false;
    stats?: Stats ;
    url?: string;
    venueRatingBlacklisted?: boolean;
    beenHere?: BeenHere;
    createdAt: number=0;
    hereNow?: HereNow;
    venueChains?: VenueChain[];
    venuePage?: VenueChain;
    storeId?: string;
    allowMenuUrlEdit?: boolean;
    delivery?: Delivery;
    menu?: Menu;
    hasMenu?: boolean;
    isStar?:boolean;
  }
  export class Menu {
    type: string="";
    label: string="";
    anchor: string="";
    url: string="";
    mobileUrl: string="";
    externalUrl?: string;
  }
  export class Delivery {
    id: string="";
    url: string="";
    provider?: Provider;
  }
  export class Provider {
    name: string="";
    icon?: Icon2;
  }
  export class Icon2 {
    prefix: string="";
    sizes: number[]=[];
    name: string="";
  }
  export class VenueChain {
    id: string="";
  }
  export class HereNow {
    count: number=0;
    summary: string="";
    groups: any[]=[];
  }
  export class BeenHere {
    lastCheckinExpiredAt: number=0;
  }
  export class Stats {
    tipCount: number =0;
    usersCount: number =0;
    checkinsCount: number =0;
  }
  export class Category {
    id: string="";
    name: string="";
    pluralName: string="";
    shortName: string="";
    icon?: Icon;
    primary: boolean=false;
  }
  export class Icon {
    prefix: string="";
    suffix: string="";
  }
  export class Location {
    address?: string;
    lat: number=0;
    lng: number=0;
    labeledLatLngs?: LabeledLatLng[];
    distance: number=0;
    postalCode?: string;
    cc: string="";
    city: string="";
    state: string="";
    country: string="";
    formattedAddress: string[]=[];
    crossStreet?: string;
    neighborhood?: string;
  }
  export class LabeledLatLng {
    label: string="";
    lat: number=0;
    lng: number=0;
  }
  export class Contact {
    twitter?: string;
    phone?: string;
    formattedPhone?: string;
    instagram?: string;
    facebook?: string;
    facebookUsername?: string;
    facebookName?: string;
  }
  export class Notification {
    type: string="";
    item?: Item;
  }
  export class Item {
    unreadCount: number=0;
  }
  export class Meta {
    code: number=0;
    requestId: string="";
  }