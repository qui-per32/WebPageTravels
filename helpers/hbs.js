module.exports = (hbs) => {
    hbs.registerHelper('is_active', (index, number) => {
        return (index + 1) == number ? 'active' : '';
    });

    hbs.registerHelper('prev_link', (admin) => {
        return admin.href(true);
    });

    hbs.registerHelper('next_link', (admin) => {
        return admin.href();
    });

    hbs.registerHelper('has_next_links', (pageCount, admin, options) => {
        if (admin.hasNextPages(pageCount)) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    // hbs.registerHelper('carrousel',(items,options)=>{
    //     console.log('items'+items.length);
    //     var out="";
    //     for (let i=1 ; i<items.length; i++) {
    //         console.log(i+' ->'+ JSON.stringify(items[i]));
    //            out = out + "<div class='carousel-item'>"

    //                      +   "<div class='row'>"
    //                      +   "<div class='col-8 '>"
    //                      +           "<div id='textIdBlue'>"
    //                       +              "<div class='textBlue'>"+items[i].description+"</div>"
    //                       +          "</div>"
    //                        +     "</div>"
    //                         +    "<div class='col-4'>"
    //                         +      "  <div id='textIdYellow'>"
    //                         +           " <div class='textYellow font-weight-bold'>"+items[i].price+"</div>"
    //                         +        "</div>"
    //                         +    "</div>"
    //                         +"</div>"
    //                        +"<img class='d-block w-100' src="+items[i].url+" alt='madrid'>"
    //                        +"<div class='card-body text-center'>"
    //                         +    "<h5 class='card-title'>"+items[i].travel+"</h5>"
    //                         +"</div>"

    //                     +"</div>";
    //     }
    //     return out;
    // });
}
