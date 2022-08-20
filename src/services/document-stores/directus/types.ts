export type DirectusLocalDNS = {
  domain: string;
  ip_address: string;
  type: string;
  class: string;
}

export type DirectusStore = {
  localdns: DirectusLocalDNS;
}