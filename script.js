//validates the form. stops it from processing if fails
function validateform(phone, postalcode) {
    let phonereg = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    let post = /^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] ?\d[A-Z]\d)$/;

    if (phonereg.test(phone) === false && post.test(postalcode) === false) {
        /*eslint no-alert:0*/

        alert("please Fix:\nPostal Code\nPhone Number");
        return event.preventDefault();
    }

    if (phonereg.test(phone) === false) {
        alert("Please Fix:\nPhone Number");
        return event.preventDefault();
    }
    if (post.test(postalcode) === false) {
        alert("Please Fix:\nPostal Code");
        return event.preventDefault();
    }
}

//this function uses template literals to implement each item into the page
function insertitems(load) {
    load.forEach(product => {
        var div = document.getElementById("productloader");
        div.innerHTML =
            div.innerHTML +
            `
   <div class="product-card">
            <div class="product-tumb">
                <img ${product.img}/> <!--alts are located in the file -->
          </div>
            <div class="product-details">
                <span class="product-catagory">${product.tags}</span>
                <h4>${product.name}</h4>
                <p>
                    ${product.description}
                </p>
                <div class="product-bottom-details">
                    <div class="product-price">
                       $ ${product.price}
                    </div>
                   
                    <div class="product-links">
                       
                <div class="heart"></div>

                    </div>
                </div>
            </div>
        </div>


  `;
        $(document).ready(function() {
            $(function() {
                $(".heart").on("click", function() {
                    $(this).toggleClass("is-active");
                });
            });
        });
    });
}

// kill everything funciton
function cleareverything() {
    var kill = document.getElementById("productloader");
    kill.innerHTML = " ";

    //sort by tags function
}
function sort(category) {
    let Table = document.getElementById("productloader");
    Table.innerHTML = "";

    let arr = [];
    /*eslint no-undef:0*/
    //suppressing because they are defined in another javascript file
    for (var i = 0; i < products.length; i++) {
        if (products[i].tags === category || products[i].tag2 === category)
            arr.unshift(products[i]);
    }
    insertitems(arr);

    //using an if statement to see if the object is null so
    //incase we are on a different page. it wont block the other event listeners
}

//sorts by popularity
function highorlow(feature) {
    if (feature === "popular") {
        let sorter = products.slice(0);
        sorter.sort(function(a, b) {
            return a.popularity - b.popularity;
        });
        insertitems(sorter);
    }
    if (feature === "low") {
        let sorter1 = products.slice(0);
        sorter1.sort(function(a, b) {
            return a.price - b.price;
        });
        insertitems(sorter1);
    }

    if (feature === "high") {
        let sorter2 = products.slice(0);
        sorter2.sort(function(a, b) {
            return b.price - a.price;
        });
        insertitems(sorter2);
    }
}

if (document.getElementById("formsubmit") !== null) {
    document.getElementById("formsubmit").addEventListener("click", function() {
        validateform(
            document.getElementById("phone").value,
            document.getElementById("postalcode").value
        );
    });
}

//event listeners
//event listener lists all products
if (document.getElementById("a1") !== null) {
    document.getElementById("a1").addEventListener("click", function() {
        cleareverything();
        insertitems(products);
    });
    //sorts by bowties
    document.getElementById("a").addEventListener("click", function() {
        cleareverything();
        sort("Bowties");

        //sorts by tags that match leash
    });
    document.getElementById("b").addEventListener("click", function() {
        cleareverything();
        sort("Leash");

        //sorts by shirt
    });
    document.getElementById("c").addEventListener("click", function() {
        cleareverything();
        sort("shirt");
        //sorts by collar shirt
    });
    document.getElementById("d").addEventListener("click", function() {
        cleareverything();
        sort("collar shirt");
    });
    //sorts by clothing
    document.getElementById("e").addEventListener("click", function() {
        cleareverything();
        sort("clothing");
    });

    //sorts by accessories
    document.getElementById("f").addEventListener("click", function() {
        cleareverything();
        sort("accessory");
    });
    //sorts by low to high
    document.getElementById("g").addEventListener("click", function() {
        cleareverything();
        highorlow("low");
    });
    //high to loq
    document.getElementById("h").addEventListener("click", function() {
        cleareverything();
        highorlow("high");
    });

    //sorts by popularity
    document.getElementById("i").addEventListener("click", function() {
        cleareverything();
        highorlow("popular");
    });
}

//onclick using jquerry
$(document).ready(function() {
    $(function() {
        $(".heart").on("click", function() {
            $(this).toggleClass("is-active");
        });
    });
});
