abstract class Appliance {
    abstract turnOn(): void;
}

export class Fan extends Appliance {
    turnOn(): void {
        console.log("Quạt bật và quay...");
    }
}

export class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Máy lạnh bật và làm mát...");
    }
}
