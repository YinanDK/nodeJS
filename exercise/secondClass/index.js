//Contact list class
//Add a contact
//Remove a contact


class ContactList {

    constructor(){
        this.list_of_contacts = [];
    }
    

    /**
     * Add a contact to the contact list
     * @param {*} Contact is an object that represent a contact
     * @description
     * first create a new contact with the class Contact like so:
     * @example
     * const contact = new Contact("marco", 42838188);
     * my_conact_list.addContact(contact);
     */

    addContact(contact){
        //I need to check if contact existed.
        let exist = false;
        this.list_of_contacts.forEach((contact_in_lists)=>{
            if (contact.name === contact_in_lists.name || contact.phone === contact_in_lists.phone){
                console.log(contact.name,"user already exsited !");
                exist =true;
                return;
            }
        });
            if(!exist){
                this.list_of_contacts.push(contact);
                console.log(contact.name, "added!");
            }


    
    }

    /**
     * Remove a contact at speci
     * @param {*} i is the index of the array of the contact list
     */

    removeContact(i){
        if (this.list_of_contacts[i]){
            this.list_of_contacts.splice(i,1);
        }
    }

    removeAll(){
        this.list_of_contacts = [];
    }

    searchByName(name){
        let phone;
        this.list_of_contacts.forEach((contact)=>{
            if (contact.name == name){
                phone = contact.phone;
            }
        })
        return phone;
    }



}

class Contact {
    /**
     * 
     * @param {string} name is the name of the contact
     * @param {number} phone is the phone number of the contact
     */
    constructor(name, phone){
        this.name = name;
        this.phone = phone;
    }
}


class VipContact extends Contact{
    /**
     * 
     * @param {string} name is the name of the contact
     * @param {number} phone is the phone number of the contact
     * @param {number} secret_phone is the secret_phone number of the contact
     */
    constructor(name, phone, secret_phone){
        super(name, phone);
        this.secret_phone = phone;
    }
}

//here I start to use my class;
const my_contact_list = new ContactList();
const my_vip_contact_list = new ContactList();

const contact = new Contact("marco", 42838188);
const contact1 = new Contact("marco", 42838288);
const contact2 = new Contact("alex", 42838488);
const contact3 = new Contact("ales", 42838488);
const contact4 = new Contact("marco", 42838187);
const vip_contact = new VipContact("alex", 42838488, 1234567);

my_contact_list.addContact(contact);
my_contact_list.addContact(contact1);
my_contact_list.addContact(contact2);
my_contact_list.addContact(contact3);
my_contact_list.addContact(contact4);
my_vip_contact_list.addContact(vip_contact);
const marco_phone = my_contact_list.searchByName("marco");
console.log("marco_phone",marco_phone );

console.log(my_contact_list.list_of_contacts);
console.log(my_vip_contact_list.list_of_contacts);






//remove
my_contact_list.removeContact(0);

console.log(my_contact_list.list_of_contacts);
