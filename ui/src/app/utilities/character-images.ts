// Provides default images for characters by race and class
export class CharacterImages {
    images: { [key: string]: Image[]; } = {};

    constructor() {
        this.images["human"] = new Array()


    }

    public getImages(race: string, bestclass?: string): Image {




        return null
    }
}

export class Image {
    public url: string
}