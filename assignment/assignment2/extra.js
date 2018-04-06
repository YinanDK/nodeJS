class shopping_list{
    constructor(shopping_lists1, shopping_lists2){
        this.shopping_lists1 = shopping_lists1;
        this.shopping_lists2 = shopping_lists2;
    }
    mergeLists(){
        let item_in_first_list = "";
        let item_in_second_list = "";
        this.shopping_lists1.forEach((item_in_shoppinglist1) => {
            item_in_first_list = item_in_shoppinglist1.name;
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

const shopping_list1 = [{ name: 'milk', amount: 1, price: 6 },{ name: 'pack_of_ris', amount: 2, price: 16 }];
const shopping_list2 = [{ name: 'pack_of_ris', amount: 2, price: 16 },  {name: 'pack_of_pork', amount: 1, price: 40 }];
const my_shopping_lists = new shopping_list(shopping_list1, shopping_list2);
my_shopping_lists.mergeLists();
console.log("biglist", my_shopping_lists.shopping_lists2);
