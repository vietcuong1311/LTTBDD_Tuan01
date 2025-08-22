export class AnimalPoly {
    speak(): void {
        console.log("AAAAAAAA");
    }
}

export class DogPoly extends AnimalPoly {
    speak(): void {
        console.log("Gau!");
    }
}

export class CatPoly extends AnimalPoly {
    speak(): void {
        console.log("Meo!");
    }
}

