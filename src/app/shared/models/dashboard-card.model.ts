export interface DashboardCard {
  title: string;
  link: string[];
  description: string;
  linkText?: string;
}

export class DashboardCard {
  constructor(card: DashboardCard) {
    Object.assign(this, card);
  }
}
