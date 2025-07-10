export interface IHeroData {
  id: string;
  name: string;
  universe: number;
  details: {
    fullname: string;
    birthday: string;
    homeland: string;
    height: number;
    width: number;
  };
}
