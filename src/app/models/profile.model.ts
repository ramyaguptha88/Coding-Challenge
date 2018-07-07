export class PeopleModel {
    People: ProfileModel[];
}

export class ProfileModel {
    name: string;
    rating: number;
    img: string;
    Description: string;
    Likes: string[];
    Dislikes: string[];
}