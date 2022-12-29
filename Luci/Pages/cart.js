$(document).ready(function () {
    add();
    $(".addToCart").click(function (e) { 
        e.preventDefault();
        let id = $(this).data("id");
        let name= $(this).data("name");
        let price = $(this).data("price");
        //console.log(id,name,price);

        let items = {
            item_id : id ,
            item_name : name ,
            item_price : price ,
            qty : 1,
        }

        let itemString = localStorage.getItem('luci');
        let itemArray ;
        if (itemString == null) {
            itemArray = [];
        }else{
            itemArray = JSON.parse(itemString);
        }

        var status = false;
        $.each(itemArray , function (i,v){
            if (id == v.item_id) {
                status = true;
                v.qty ++;
            }
        })

        if (status == false) {
            itemArray.push(items);
        }

        let itemData = JSON.stringify(itemArray);
        localStorage.setItem('luci' , itemData);
        add();
    });
});
function add() {
    let itemString = localStorage.getItem("luci");
    if (itemString) {
        let itemArray = JSON.parse(itemString);
        if(itemArray != 0){
            let count = itemArray.length;
            $('#count_number').text(count);
        }
    }
}