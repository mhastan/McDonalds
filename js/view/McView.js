export class McView{

    constructor(){

       let amount = 0;

        const items = document.querySelectorAll("#p1, #p2, #p3, #p4, #p5, #p6, #p7, #p8, #p9");
        items.forEach(element => element.addEventListener('click', (event) => {
            amount++
            let selectedItem = element.id;
            saveOrders(selectedItem, amount)
        }))

        function saveOrders (item, count) {
            console.log(item);
            console.log(count);
        }  
    }
   

}