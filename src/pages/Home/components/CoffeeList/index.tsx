import { CoffeeItem } from "../CoffeeItem";
import { CoffeeListContainer, CoffeeListContent } from "./styles";
import expressoIMG from "@/assets/images/expresso.png";
import expressoCremosoIMG from "@/assets/images/expresso-cremoso.png";
import expressoAmericanoIMG from "@/assets/images/expresso-americano.png";
import expressoGeladoIMG from "@/assets/images/expresso-gelado.png";
import cafeComLeiteIMG from "@/assets/images/cafe-com-leite.png";
import latteIMG from "@/assets/images/latte.png";
import capuccinoIMG from "@/assets/images/capuccino.png";
import macchiatoIMG from "@/assets/images/macchiato.png";
import irlandesIMG from "@/assets/images/irlandes.png";
import arabeIMG from "@/assets/images/arabe.png";
import havaianoIMG from "@/assets/images/havaiano.png";
import cubanoIMG from "@/assets/images/cubano.png";
import chocolateQuenteIMG from "@/assets/images/chocolate-quente.png";
import mochaccinoIMG from "@/assets/images/mochaccino.png";


export interface ICoffeesType {
    id: number;
    picture: string;
    tag: string;
    title: string;
    description: string;
    price: number;
}

export function CoffeeList() {
    const coffees: ICoffeesType[] = [
        { 
            id: 1,
            picture: expressoIMG,
            tag: "Traditional", 
            title: "Traditional Espresso", 
            description: "Traditional coffee made with hot water and ground beans",
            price: 9.99
        },
        { 
            id: 2,
            picture: expressoAmericanoIMG,
            tag: "Traditional", 
            title: "American Espresso", 
            description: "Diluted espresso, less intense than traditional",
            price: 10.59
        },
        { 
            id: 3,
            picture: expressoCremosoIMG,
            tag: "Traditional", 
            title: "Creamy Espresso", 
            description: "Traditional espresso with creamy foam",
            price: 7.99
        },
        { 
            id: 4,
            picture: expressoGeladoIMG,
            tag: "Traditional", 
            title: "Iced Espresso", 
            description: "Drink prepared with espresso and ice cubes",
            price: 8.99
        },
        { 
            id: 5,
            picture: cafeComLeiteIMG,
            tag: "milk", 
            title: "Café com Leite", 
            description: "Half and half traditional espresso steamed milk",
            price: 5.59
        },
        { 
            id: 6,
            picture: latteIMG,
            tag: "milk", 
            title: "Latte", 
            description: "A shot of espresso with double the milk and creamy foam",
            price: 11.59
        },
        { 
            id: 7,
            picture: capuccinoIMG,
            tag: "milk", 
            title: "Capuccino", 
            description: "Cinnamon drink made from equal doses of coffee, milk and foam",
            price: 9.99
        },
        {
            id: 8,
            picture: macchiatoIMG,
            tag: "milk", 
            title: "Macchiato", 
            description: "Espresso mixed with some hot milk and froth",
            price: 9.99
        },
        {
            id: 9,
            picture: mochaccinoIMG,
            tag: "milk", 
            title: "Mocaccino", 
            description: "Espresso with chocolate syrup, little milk and foam",
            price: 6.75
        },
        {
            id: 10,
            picture: chocolateQuenteIMG,
            tag: "milk", 
            title: "Hot Chocolate", 
            description: "Drink made with chocolate dissolved in hot milk and coffee",
            price: 9.99
        },
        {
            id: 11,
            picture: cubanoIMG,
            tag: "Iced", 
            title: "Cuban", 
            description: "Iced espresso drink with rum, cream and mint",
            price: 8.59
        },
        {
            id: 12,
            picture: havaianoIMG,
            tag: "special", 
            title: "Hawaiian", 
            description: "Sweet drink prepared with coffee and coconut milk",
            price: 7.45
        },
        {
            id: 13,
            picture: arabeIMG,
            tag: "special", 
            title: "Arabic", 
            description: "Drink prepared with Arabic coffee beans and spices",
            price: 6.99
        },
        { 
            id: 14,
            picture: irlandesIMG,
            tag: "alcoholic", 
            title: "Irish", 
            description: "Drink made from coffee, Irish whiskey, sugar and whipped cream",
            price: 5.99
        }
    ]
    
    return (
        <CoffeeListContainer>
            <h2>Our coffees</h2>
            <CoffeeListContent>
                { coffees.map((item) => 
                    <CoffeeItem key={item.title} item={item} />
                )}
            </CoffeeListContent>
            
        </CoffeeListContainer>
    )
}