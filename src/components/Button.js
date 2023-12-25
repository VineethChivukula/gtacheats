// Import Button styles
import "../styles/Button.css";

// Import useState hook
import { useState } from "react";

// Import logos
import gta3Logo from "../images/gta3.png";
import gtavclogo from "../images/gtavc.png";
import gtasaLogo from "../images/gtasa.png";

// Import Table component
import Table from "./Table";

// Cheat codes data
const gta3Data = [
    { cheat: "GUNSGUNSGUNS", action: "All Weapons" },
    { cheat: "ILIKEDRESSINGUP", action: "Change Costumes" },
    { cheat: "SKINCANCERFORME", action: "Clear Weather" },
    { cheat: "ILIKESCOTLAND", action: "Cloudy Weather" },
    { cheat: "BANGBANGBANG", action: "Destroy All Cars" },
    { cheat: "TIMEFLIESWHENYOU", action: "Fast Motion" },
    { cheat: "CHITTYCHITTYBB", action: "Flying Vehicle" },
    { cheat: "PEASOUP", action: "Foggy Weather" },
    { cheat: "TORTOISE", action: "Full Armour" },
    { cheat: "GESUNDHEIT", action: "Full Health" },
    { cheat: "CORNERSLIKEMAD", action: "Improve Driving Skill" },
    { cheat: "NASTYLIMBScheat", action: "Increased Gore" },
    { cheat: "NOPOLICEPLEASE", action: "Lower Wanted Level" },
    { cheat: "IFIWEREARICHMAN", action: "Money cheat" },
    {
        cheat: "ITSALLGOINGMAAAD",
        action: "Pedestrians Fight Each Other",
    },
    {
        cheat: "WEAPONSFORALL",
        action: "Pedestrians Fight Each Other with Weapons",
    },
    { cheat: "NOBODYLIKESME", action: "Pedestrians Hate You" },
    { cheat: "ILOVESCOTLAND", action: "Rainy Weather" },
    { cheat: "MOREPOLICEPLEASE", action: "Raise Wanted Level" },
    { cheat: "BOOOOORING", action: "Slow Motion" },
    { cheat: "GIVEUSATANK", action: "Spawn Rhino Tank" },
    { cheat: "MADWEATHER", action: "Speed Up Time" },
    { cheat: "ANICESETOFWHEELS", action: "Turn Vehicle Invisible" },
];

// Sort the data alphabetically
gta3Data.sort((a, b) => {
    if (a.cheat < b.cheat) {
        return -1;
    }
    if (a.cheat > b.cheat) {
        return 1;
    }
    return 0;
});

const gtaVcData = [
    { cheat: "GREENLIGHT", action: "All Traffic Lights Green" },
    { cheat: "SEAWAYS", action: "Amphibious Cars" },
    { cheat: "CHICKSWITHGUNS", action: "Armed Female Pedestrians" },
    { cheat: "OURGODGIVENRIGHTTOBEARARMS", action: "Armed Pedestrians" },
    { cheat: "LOADSOFLITTLETHINGS", action: "Big Wheels" },
    { cheat: "IWANTITPAINTEDBLACK", action: "Black Cars" },
    { cheat: "FULLCITYPEOPLEMINES", action: "Buy All Properties" },
    { cheat: "IWANTBIGTITS", action: "Candy Suxxx Skin" },
    { cheat: "APLEASANTDAY", action: "Cloudy Weather" },
    { cheat: "WELOVEOURDICK", action: "Dick Skin" },
    { cheat: "DEEPFRIEDMARSBARS", action: "Fat Skin" },
    { cheat: "AIRSHIP", action: "Flying Boats" },
    { cheat: "COMEFLYWITHME", action: "Flying Vehicles" },
    { cheat: "CANTSEEATHING", action: "Foggy Weather" },
    { cheat: "PRECIOUSPROTECTION", action: "Full Armor" },
    { cheat: "ASPIRINE", action: "Full Heath" },
    { cheat: "GRIPISEVERYTHING", action: "Handling Buff" },
    { cheat: "ILOOKLIKEHILARY", action: "Hilary Skin" },
    { cheat: "NOBODYLIKESME", action: "Hostile Pedestrians" },
    { cheat: "YOUWONTTAKEMEALIVE", action: "Increase Wanted Level by 2" },
    { cheat: "YOUCANTLEAVEMEALONE", action: "Invincibility" },
    { cheat: "WHEELSAREALLINEED", action: "Invisible Cars" },
    { cheat: "ROCKANDROLLMAN", action: "Jezz Skin" },
    { cheat: "MYSONISALAWYER", action: "Ken Skin" },
    { cheat: "FANNYMAGNET", action: "Ladies' Man" },
    { cheat: "LOOKLIKELANCE", action: "Lance Skin" },
    { cheat: "LEAVEMEALONE", action: "Lower Wanted Level to 0" },
    { cheat: "FREEWAYFORANGELJOY", action: "Mass Bike Spawn" },
    { cheat: "FOXYLITTLETHING", action: "Mercedes Skin" },
    { cheat: "BIGBANG", action: "Nearby Vehicles Explode" },
    { cheat: "ONEARMEDBANDIT", action: "Phil Skin" },
    { cheat: "AHAIRDRESSERSCAR", action: "Pink Cars" },
    { cheat: "LIFEISPASSINGMEBY", action: "Quick Clock" },
    { cheat: "CATSANDDOGS", action: "Rainy Weather" },
    { cheat: "STILLLIKEDRESSINGUP", action: "Random Outfit" },
    { cheat: "CHEATSHAVEBEENCRACKED", action: "Ricardo Skin" },
    { cheat: "FIGHTFIGHTFIGHT", action: "Riot" },
    { cheat: "MIAMITRAFFIC", action: "Road Rage" },
    { cheat: "PROGRAMMER", action: "Skinny Skin" },
    { cheat: "BOOOOOORING", action: "Slow Down Gameplay" },
    { cheat: "CERTAINDEATH", action: "Smoke a Cigarette" },
    { cheat: "IDONTHAVETHEMONEYSONNY", action: "Sonny Skin" },
    { cheat: "FLYINGWAYS", action: "Spawn Aeroplane" },
    { cheat: "GETTHEREQUICKLY", action: "Spawn Alt Bloodring Banger" },
    { cheat: "GETTHEREAMAZINGLYFAST", action: "Spawn Alt Hotring Racer" },
    { cheat: "TRAVELINSTYLE", action: "Spawn Bloodring Banger" },
    { cheat: "BETTERTHANWALKING", action: "Spawn Caddie" },
    { cheat: "THELASTRIDE", action: "Spawn Hearse" },
    { cheat: "GETTHEREVERYFASTINDEED", action: "Spawn Hotring Racer" },
    { cheat: "AMERICAHELICOPTER", action: "Spawn Hunter" },
    { cheat: "ROCKANDROLLCAR", action: "Spawn Limo" },
    { cheat: "GETTHEREFAST", action: "Spawn Sabre Turbo" },
    { cheat: "PANZER", action: "Spawn Tank" },
    { cheat: "RUBBISHCAR", action: "Spawn Trashmaster" },
    { cheat: "ONSPEED", action: "Speed Up Gameplay" },
    { cheat: "ICANTTAKEITANYMORE", action: "Suicide" },
    { cheat: "ALOVELYDAY", action: "Sunny Weather" },
    { cheat: "ABITDRIEG", action: "Very Cloudy Weather" },
    { cheat: "THUGSTOOLS", action: "Weapon Set 1" },
    { cheat: "PROFESSIONALTOOLS", action: "Weapon Set 2" },
    { cheat: "NUTTERTOOLS", action: "Weapon Set 3" },
];

gtaVcData.sort((a, b) => {
    if (a.cheat < b.cheat) {
        return -1;
    }
    if (a.cheat > b.cheat) {
        return 1;
    }
    return 0;
});

const gtaSanData = [
    { cheat: "AEZAKMI", action: "Disable Wanted Level" },
    { cheat: "AIYPWZQP", action: "Spawn Parachute" },
    {
        cheat: "AJLOJYQY",
        action: "People attack each other with golf clubs",
    },
    { cheat: "ALNSFMZO", action: "Overcast Weather" },
    { cheat: "AMOMHRER", action: "Spawn Tanker Truck" },
    { cheat: "ANOSEONGLASS", action: "Adrenaline Mode" },
    { cheat: "AUIFRVQS", action: "Rainy Weather" },
    { cheat: "BAGOWPG", action: "Create a bounty on your head" },
    { cheat: "BAGUVIX", action: "Infinite Health" },
    { cheat: "BEKKNQV", action: "Women Talk to You" },
    {
        cheat: "BGLUAWML",
        action: "People attack each other with Rocket Launchers",
    },
    { cheat: "BIFBUZZ", action: "Gang Control" },
    { cheat: "BLUESUEDESHOES", action: "Everyone is Elvis" },
    { cheat: "BMTPWHR", action: "Country Vehicles and People" },
    { cheat: "BRINGITON", action: "Six Star Wanted Level" },
    { cheat: "BTCDBCB", action: "Add Body Fat" },
    { cheat: "BUBBLECARS", action: "Moon car gravity" },
    { cheat: "BUFFMEUP", action: "Muscular Body" },
    { cheat: "CELEBRITYSTATUS", action: "Spawn Stretch" },
    { cheat: "CFVFGMJ", action: "Foggy Weather" },
    { cheat: "CHITTYCHITTYBANGBANG", action: "Flying cars" },
    { cheat: "CPKTNWT", action: "Blow Up All Cars" },
    { cheat: "CRAZYTOWN", action: "Funhouse Mode" },
    { cheat: "CVWKXAM", action: "Infinite Oxygen" },
    { cheat: "CWJXUOC", action: "Sandstorm" },
    { cheat: "EVERYONEISPOOR", action: "All cars are cheap" },
    { cheat: "EVERYONEISRICH", action: "All cars are fast" },
    { cheat: "FLYINGFISH", action: "Flying boats" },
    { cheat: "FLYINGTOSTUNT", action: "Spawn Stunt Plane" },
    { cheat: "FOOOXFT", action: "Pedestrians attack you" },
    { cheat: "FOURWHEELFUN", action: "Spawn Quad" },
    { cheat: "FULLCLIP", action: "Infinite Ammo, No Reloading" },
    { cheat: "FVTMNBZ", action: "Country Vehicles" },
    { cheat: "GHOSTTOWN", action: "Reduced Traffic" },
    { cheat: "GOODBYECRUELWORLD", action: "Kills CJ" },
    { cheat: "HELLOLADIES", action: "Maximum Sex Appeal" },
    { cheat: "HESOYAM", action: "Health, Armor, Money, also repairs car" },
    { cheat: "IOWDLAC", action: "All cars turn black" },
    { cheat: "ITSALLBULL", action: "Spawn Dozer" },
    { cheat: "IWPRTON", action: "Spawn Rhino (Tank)" },
    { cheat: "JCNRUAD", action: "Cars blow up with minimal damage" },
    { cheat: "JQNTDMH", action: "Spawn Rancher" },
    { cheat: "JUMPJET", action: "Spawn Hydra" },
    { cheat: "KANGAROO", action: "Mega Jump" },
    { cheat: "KGGGDKP", action: "Spawn Vortex Hovercraft" },
    { cheat: "KVGYZQK", action: "Skinny Body" },
    { cheat: "LIFESABEACH", action: "Beach Party Mode" },
    { cheat: "LLQPFBN", action: "All cars turn pink" },
    { cheat: "LXGIWYL", action: "Weapon Set 1" },
    { cheat: "MONSTERMASH", action: "Spawn Monster" },
    { cheat: "NATURALTALENT", action: "Maximize All Vehicle Skills" },
    { cheat: "NIGHTPROWLER", action: "Always Midnight" },
    { cheat: "NINJATOWN", action: "Ninja Theme" },
    { cheat: "OFVIAC", action: "Orange Sky" },
    { cheat: "OHDUDE", action: "Spawn Hunter" },
    { cheat: "OLDSPEEDDEMON", action: "Spawn Bloodring Banger" },
    { cheat: "ONLYHOMIESALLOWED", action: "Gang Members Mode" },
    { cheat: "OUIQDMW", action: "Free aim in cars" },
    { cheat: "PLEASANTLYWARM", action: "Sunny Weather" },
    { cheat: "PROFESSIONALKILLER", action: "Hitman Level for all Weapons" },
    { cheat: "PROFESSIONALSKIT", action: "Weapon Set 2" },
    { cheat: "ROCKETMAN", action: "Spawn Jetpack" },
    { cheat: "RZHSUEW", action: "Spawn Caddy" },
    { cheat: "SCOTTISHSUMMER", action: "Thunderstorm" },
    { cheat: "SJMAHPE", action: "Recruit anyone like a gang member" },
    { cheat: "SLOWITDOWN", action: "Slow Motion" },
    { cheat: "SPEEDFREAK", action: "All cars have nitrous" },
    { cheat: "SPEEDITUP", action: "Fast Motion" },
    { cheat: "STATEOFEMERGENCY", action: "Riot Mode" },
    { cheat: "STICKLIKEGLUE", action: "Perfect Vehicle Handling" },
    { cheat: "TOODAMNHOT", action: "Very Sunny Weather" },
    { cheat: "TRUEGRIME", action: "Spawn Trashmaster" },
    { cheat: "TURNDOWNTHEHEAT", action: "Clear Wanted Level" },
    { cheat: "TURNUPTHEHEAT", action: "Increase Wanted Level by 2" },
    { cheat: "UZUMYMW", action: "Weapon Set 3" },
    { cheat: "VKYPQCF", action: "Maximum Stamina" },
    { cheat: "VPJTQWV", action: "Spawn Racecar" },
    { cheat: "VROCKPOKEY", action: "Spawn Racecar" },
    { cheat: "WHEELSONLYPLEASE", action: "Invisible cars" },
    { cheat: "WHERESTHEFUNERAL", action: "Spawn Romero" },
    { cheat: "WORSHIPME", action: "Maximum Respect" },
    { cheat: "YLTEICZ", action: "Aggressive Drivers" },
    { cheat: "YSOHNUL", action: "Faster Clock" },
    { cheat: "ZEIIVG", action: "All traffic lights are green" },
];

gtaSanData.sort((a, b) => {
    if (a.cheat < b.cheat) {
        return -1;
    }
    if (a.cheat > b.cheat) {
        return 1;
    }
    return 0;
});

// Button component
const Button = ({ darkMode, toggleDarkMode }) => {
    // useStates for logos and cheat codes
    const logos = [gta3Logo, gtavclogo, gtasaLogo];
    const cheatCodes = [gta3Data, gtaVcData, gtaSanData];

    // useState for the current index
    const [currentIndex, setcurrentIndex] = useState(0);

    // Function to change the cheat codes
    const handleClick = () => {
        setcurrentIndex((prevIndex) => (prevIndex + 1) % cheatCodes.length);
    };

    // Get the current table data
    const currentTableData = cheatCodes[currentIndex];

    // Return the JSX element
    return (
        <div>
            <button
                className="butt"
                onClick={handleClick}
                style={
                    darkMode
                        ? { backgroundColor: "#e0e1dd", color: "#fff" }
                        : {}
                }
            >
                <img
                    src={logos[currentIndex]}
                    alt={`logo${currentIndex}`}
                    className="gta-logo"
                    draggable="false"
                ></img>
            </button>
            <Table data={currentTableData} darkMode={darkMode} />
        </div>
    );
};

// Export the Button component as the default export
export default Button;
