class shopping_list{
    constructor(){
        this.list_of_item = [];
    }

    addItem(shopping_item){
       
        if(shopping_item.name === "") {
            console.log("the item is not valid!");
            throw Error ("Item has empty name");
        }
        if (shopping_item.price<0 ){
           throw Error ("Item has negative price");
        }
        if (shopping_item.amount<0) {
         throw Error ("Item has negative amount");
        }
        
         this.list_of_item.push(shopping_item);
         console.log(shopping_item.name, "added!");
         }
        
        
    removeItem(i){
        if(this.list_of_item(i)){
            this.list_of_item.splice(i,1);
        }
    }

    totalPrice(){
        let total_price = 0;
       
        for (let i=0; i < this.list_of_item.length; i++){
            total_price = total_price + this.list_of_item[i].amount * this.list_of_item[i].price
        }
        return total_price;
    }

}

class shopping_item {
    /**
     * 
     * @param {string} name is the name of the shopping items
     * @param {number} amount is the amount of the shopping items
     * @param {number} amount is the price of the one item, currency is DKK
     */
    
    constructor(name, amount,price){
        this.name = name;
        this.amount = amount;
        this.price = price;
    }
}

//merge class
class merged_shopping_list{
    constructor(shopping_lists1, shopping_lists2){
        this.shopping_lists1 = shopping_lists1;
        this.shopping_lists2 = shopping_lists2;
    }
    mergeLists(){
        let item_in_first_list = "";
        let item_in_second_list = "";
        this.shopping_lists1.forEach((item_in_shoppinglist1) => {
            item_in_first_list = item_in_shoppinglist1.name;
            let exist = false;
            this.shopping_lists2.forEach((item_in_shoppinglist2)=>{
                item_in_second_list = item_in_shoppinglist2.name;
                if(item_in_first_list === item_in_second_list) {
                    console.log("the item is existed!");
                    exist = true;
                    item_in_shoppinglist2.amount = item_in_shoppinglist1.amount + item_in_shoppinglist2.amount;
                    
                }
            });
            if(!exist){
                this.shopping_lists2.push(item_in_shoppinglist1);
            }

            
        });
        return this.shopping_lists2;
    }
}

const my_shopping_list1 = new shopping_list();
const my_shopping_list2 = new shopping_list();
const my_bought_item1 = new shopping_item ("milk", 1, 6);
const my_bought_item2 = new shopping_item ("pack_of_ris", 2, 16);
const my_bought_item3 = new shopping_item ("pack_of_carrot", 1, 10);
const my_bought_item4 = new shopping_item ("pack_of_pork", 1, 40);
const my_bought_item5 = new shopping_item ("duck", -2, 2);

// my_shopping_list1.addItem({
//     name: "milk",
//     amount:1,
//     price:16,
// });
// my_shopping_list1.addItem({
//     name: "pack_of_ris",
//     amount:2,
//     price:16,
// });
try{
    my_shopping_list1.addItem(my_bought_item3);
    my_shopping_list1.addItem(my_bought_item4);
    my_shopping_list1.addItem(my_bought_item5);

    my_shopping_list2.addItem(my_bought_item1);
    my_shopping_list2.addItem(my_bought_item3);
    my_shopping_list2.addItem(my_bought_item5);
} catch (error){
    console.log("error", error);
}

// my_shopping_list2.addItem({
//     name: "pack_of_ris",
//     amount:2,
//     price:16,
// });
// my_shopping_list2.addItem({
//     name: "pack_of_pork",
//     amount:1,
//     price:40,
// });





let total_price = my_shopping_list1.totalPrice();

console.log("my shopping list1", my_shopping_list1);
console.log("my shopping list2", my_shopping_list2);
console.log("moneyBag", total_price);

//merge lists
// const {mergeLists}=require('./extra.js');
// const one_big_list = mergeLists(my_shopping_list1, my_shopping_list2);
// console.log("big list", one_big_list );

// const shopping_lists1 = [{ name: 'milk', amount: 1, price: 6 },{ name: 'pack_of_ris', amount: 2, price: 16 }];
// const shopping_lists2 = [{ name: 'pack_of_ris', amount: 2, price: 16 },  {name: 'pack_of_pork', amount: 1, price: 40 }];
// const my_merged_shopping_lists1 = new merged_shopping_list(shopping_lists1, shopping_lists2);
const my_merged_shopping_lists2 = new merged_shopping_list(my_shopping_list1.list_of_item, my_shopping_list2.list_of_item);
// my_merged_shopping_lists1.mergeLists();
my_merged_shopping_lists2.mergeLists();
console.log("biglist", my_merged_shopping_lists2.shopping_lists2);