class shopping_list{
    constructor(){
        this.list_of_item = [];
    }
    static mergeLists(shopping_lists1,shopping_lists2){
        let item_in_first_list = "";
        let item_in_second_list = "";
        shopping_lists1.forEach((item_in_shoppinglist1) => {
            item_in_first_list = item_in_shoppinglist1.name;
            let exist = false;
            shopping_lists2.forEach((item_in_shoppinglist2)=>{
                item_in_second_list = item_in_shoppinglist2.name;
                if(item_in_first_list === item_in_second_list) {
                    console.log("the item is existed!");
                    exist = true;
                    item_in_shoppinglist2.amount = item_in_shoppinglist1.amount + item_in_shoppinglist2.amount;
                    
                }
            });
            if(!exist){
                shopping_lists2.push(item_in_shoppinglist1);
            }

            
        });
        return shopping_lists2;
    }

    addItem(shopping_item){
        //check the duplicate
        let exist =false;
        this.list_of_item.forEach((item)=>{
            if(shopping_item.name === item.name){
                console.log(shopping_item.name,"item already exsited !");
                exist = true;
                return;
            }
        
        });
        if(!exist){
            if(shopping_item.name === "") {
                console.log("the item is not valid!");
                
            }
            if (shopping_item.price<0 ){
                console.log("Item has negative price");
            }
            if (shopping_item.amount<0) {
                console.log ("Item has negative amount");
            } else{
                this.list_of_item.push(shopping_item);
             console.log(shopping_item.name, "added!");}
        }
       
    }   
        
        
    removeItem(name){
        this.list_of_item.some((item_in_lists)=>{
                   if (item_in_lists.name === name){
                       let i = this.list_of_item.indexOf(item_in_lists);
                       this.list_of_item.splice(i,1);
                       console.log(name,"removed!");
                   }
                   
               })
        
   
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

const my_shopping_list1 = new shopping_list();
const my_shopping_list2 = new shopping_list();
const my_bought_item1 = new shopping_item ("milk", 1, 6);
const my_bought_item2 = new shopping_item ("pack_of_ris", 2, 16);
const my_bought_item3 = new shopping_item ("pack_of_carrot", 1, 10);
const my_bought_item4 = new shopping_item ("pack_of_pork", 1, 40);
const my_bought_item5 = new shopping_item ("duck", -2, 2);



    my_shopping_list1.addItem(my_bought_item3);
    my_shopping_list1.addItem(my_bought_item4);
    my_shopping_list1.addItem(my_bought_item5);
    my_shopping_list1.addItem(my_bought_item5);
    

    my_shopping_list2.addItem(my_bought_item1);
    my_shopping_list2.addItem(my_bought_item1);
    my_shopping_list2.addItem(my_bought_item3);
    my_shopping_list2.addItem(my_bought_item5);
    my_shopping_list2.addItem(my_bought_item1);
    my_shopping_list2.addItem(my_bought_item1);
    my_shopping_list2.removeItem("milk");





let total_price = my_shopping_list1.totalPrice();

console.log("my shopping list1", my_shopping_list1);
console.log("my shopping list2", my_shopping_list2);
console.log("moneyBag", total_price);


const my_merged_shopping_lists2 = shopping_list.mergeLists(my_shopping_list1.list_of_item, my_shopping_list2.list_of_item);


console.log("biglist", my_merged_shopping_lists2);
