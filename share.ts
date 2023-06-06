abstract class VideoGame {
  protected name: string;
  protected genre: string;
  protected platform: string;

  constructor(name: string, genre: string, platform: string) {
    this.name = name;
    this.genre = genre;
    this.platform = platform;
  }

  abstract play(): void;

  displayInfo(): void {
    console.log(`Game Name: ${this.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Platform: ${this.platform}`);
  }
}

class RPG extends VideoGame {
  private numberOfPlayers: number;

  constructor(name: string, platform: string, numberOfPlayers: number) {
    super(name, "RPG", platform);
    this.numberOfPlayers = numberOfPlayers;
  }

  play(): void {
    console.log(`Playing ${this.name} - RPG`);
    console.log(`Number of Players: ${this.numberOfPlayers}`);
  }
}

class Shooter extends VideoGame {
  private multiplayer: boolean;

  constructor(name: string, platform: string, multiplayer: boolean) {
    super(name, "Shooter", platform);
    this.multiplayer = multiplayer;
  }

  play(): void {
    console.log(`Playing ${this.name} - Shooter`);
    console.log(`Multiplayer Mode: ${this.multiplayer ? "Enabled" : "Disabled"}`);
  }
}

// Create instances of RPG and Shooter classes
const rpgGame = new RPG("Final Fantasy VII", "PlayStation", 1);
const shooterGame = new Shooter("Call of Duty: Warzone", "Xbox", true);

// Call the play and displayInfo methods on the instances
rpgGame.play();
rpgGame.displayInfo();
console.log("------------------");
shooterGame.play();
shooterGame.displayInfo();
