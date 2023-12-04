import { CoffeeItem } from "./CoffeeItem";
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
    picture: string;
    tag: string;
    title: string;
    description: string;
    price: string;
}

export function CoffeeList() {
    const coffees: ICoffeesType[] = [
        { 
            picture: expressoIMG,
            tag: "Tradicional", 
            title: "Expresso Tradicional", 
            description: "O tradicional café feito com água quente e grãos moídos",
            price: "9,90"
        },
        { 
            picture: expressoAmericanoIMG,
            tag: "Tradicional", 
            title: "Expresso Americano", 
            description: "Expresso diluído, menos intenso que o tradicional",
            price: "9,90"
        },
        { 
            picture: expressoCremosoIMG,
            tag: "Tradicional", 
            title: "Expresso Cremoso", 
            description: "Café expresso tradicional com espuma cremosa",
            price: "9,90"
        },
        { 
            picture: expressoGeladoIMG,
            tag: "Tradicional", 
            title: "Expresso Gelado", 
            description: "Bebida preparada com café expresso e cubos de gelo",
            price: "9,90"
        },
        { 
            picture: cafeComLeiteIMG,
            tag: "com leite", 
            title: "Café com Leite", 
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            price: "9,90"
        },
        { 
            picture: latteIMG,
            tag: "com leite", 
            title: "Latte", 
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: "9,90"
        },
        { 
            picture: capuccinoIMG,
            tag: "com leite", 
            title: "Capuccino", 
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: "9,90"
        },
        { 
            picture: macchiatoIMG,
            tag: "com leite", 
            title: "Macchiato", 
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            price: "9,90"
        },
        { 
            picture: mochaccinoIMG,
            tag: "com leite", 
            title: "Mocaccino", 
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: "9,90"
        },
        { 
            picture: chocolateQuenteIMG,
            tag: "com leite", 
            title: "Chocolate Quente", 
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: "9,90"
        },
        { 
            picture: cubanoIMG,
            tag: "gelado", 
            title: "Cubano", 
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: "9,90"
        },
        { 
            picture: havaianoIMG,
            tag: "especial", 
            title: "Havaiano", 
            description: "Bebida adocicada preparada com café e leite de coco",
            price: "9,90"
        },
        { 
            picture: arabeIMG,
            tag: "especial", 
            title: "Árabe", 
            description: "Bebida preparada com grãos de café árabe e especiarias",
            price: "9,90"
        },
        { 
            picture: irlandesIMG,
            tag: "alcoólico", 
            title: "Irlandês", 
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            price: "9,90"
        }
    ]
    
    return (
        <CoffeeListContainer>
            <h2>Nossos cafés</h2>
            <CoffeeListContent>
                { coffees.map((item) => 
                    <CoffeeItem key={item.title} item={item} />
                )}
            </CoffeeListContent>
            
        </CoffeeListContainer>
    )
}