$(document).ready(function(){

    let combine = false;            // check for printing


    $(".creation_container > select").on("click", function(){
        $(this).toggleClass("active-up passive-down");
    });

    $(".print-name").on("keyup", function(){       // choose name   
        let name = $(this).val();
        $(".result_badge-custom-name").css("color", "#2D2D2D");
        if ( name.length >= 8 && name.length <= 10 ){               // set font size for another name length
            $(".result_badge-custom-name").css("font-size", "40px");    
            $(".print-preview_custom-name").css("font-size", "10.58mm");
        }
        else
             if ( name.length >= 10 ){
                $(".result_badge-custom-name").css("font-size", "30px");    
                $(".print-preview_custom-name").css("font-size", "8.82mm");
             }
             else{
                $(".result_badge-custom-name").css("font-size", "48px");
                $(".print-preview_custom-name").css("font-size", "12.35mm");
             }
             
        if ( $(this).val() !== ""){ 
            $(".result_badge-custom-name, .print-preview_custom-name").text(name);
        } 
        else{
            $(".result_badge-custom-name, .print-preview_custom-name").text("Ваше имя");
            $(".result_badge-custom-name").removeAttr("style");
        }
        if (name.length > 14)
            $(".creation_name-error").addClass("error");
        else
            $(".creation_name-error").removeClass("error");
        enableBtn();
    })

    $(".post-changer").on("change", function(){     // choose  post
        let post = $(this).children("option:selected").val();
        if (post === "Выберите из списка"){             // if post doesnt choose set default styles and text
            $(".result_badge-custom-post, .print-preview_custom-post").text("Должность");    
            $(".result_badge-custom-post").css("color", "#BDBDBD");
            $(".result_brand-logo").css("background-image", "url(./img/05.svg)");
            $(".result_badge, .result_badge-custom-name, .result_brand-logo, .print-preview .result_badge-custom").removeAttr("style");
        }
        else{
            $(".result_badge-custom-post, .print-preview_custom-post").text(post);
            $(".result_badge-custom-post").css("color", "#2D2D2D");
        }

        if (post === "Эксперт"){
            $(".creation_brand").show();
        }
        else{
            $(".creation_brand").hide();
            
        }
        enableBtn();
    })

    $(".brand-changer").on("change", function(){     // choose brand
        let brand = $(this).children("option:selected").val();
        switch (brand) {
                case "Dyson":
                    $(".print-preview .result_brand-logo").css({
                        "height":"8mm"
                    });
                    $(".print-preview_badge-custom").css({
                        "margin-top": "7mm"
                    })
                    $(".result_badge").css("border-bottom-color", "#2D2D2D");
                    $(".print-preview_custom-name").css("color", "#2D2D2D");
                    break;

                    case "Huawei":
                            $(".print-preview .result_brand-logo").css({
                                "height": "8mm"
                            });
                            $(".print-preview_badge-custom").css({
                                "margin-top": "7mm"
                            });
                        $(".result_badge").css("border-bottom-color", "#E52428");
                        $(".print-preview_custom-name").css("color", "#E52428");
                        break;

                        case "LG":
                                $(".print-preview .result_brand-logo").css({
                                    "height": "8mm"
                                });
                                $(".print-preview_badge-custom").css({
                                    "margin-top": "7mm"
                                });
                            $(".result_badge").css("border-bottom-color", "#C3004D");
                            $(".print-preview_custom-name").css("color", "#C3004D");
                            break;

                            case "Oppo":
                                    $(".print-preview .result_brand-logo").css({
                                        "height":"8mm"
                                    });
                                    $(".print-preview_badge-custom").css({
                                        "margin-top": "7mm"
                                    });
                                $(".result_badge").css("border-bottom-color", "#1EA366");
                                $(".print-preview_custom-name").css("color", "#1EA366");
                                break;

                                case "Phillips":
                                        $(".print-preview .result_brand-logo").css({
                                            "height":"5mm"
                                        });
                                        $(".print-preview_badge-custom").css({
                                            "margin-top": "9mm"
                                        });
                                    $(".result_badge").css("border-bottom-color", "#0B5ED7")
                                    $(".print-preview_custom-name").css("color", "#0B5ED7")
                                    break;

                                    case "Samsung":
                                            $(".print-preview .result_brand-logo").css({
                                                "height":"5mm"
                                            });
                                            $(".print-preview_badge-custom").css({
                                                "margin-top": "9mm"
                                            })
                                        $(".result_badge").css("border-bottom-color", "#1E4BC6")
                                        $(".print-preview_custom-name").css("color", "#1E4BC6")
                                        break;
                                        
                                        case "Sony":
                                                $(".print-preview .result_brand-logo").css({
                                                    "height":"5mm"
                                                }); 
                                                $(".print-preview_badge-custom").css({
                                                    "margin-top": "9mm"
                                                })
                                            $(".result_badge").css("border-bottom-color", "#2D2D2D")
                                            $(".print-preview_custom-name").css("color", "#2D2D2D")
                                            break;

            default:
                brand = "05";           // else set default logo and post
                $(".result_badge").removeAttr("style");
                $(".result_badge-custom-name").removeAttr("style");
                break;
            }
            $(".result_brand-logo").css("background-image", `url(./img/brands/${brand}.svg)`)
            enableBtn();

    })

    
    // function toEnableKeyCombine(combine){
    //     $(document).on('keydown', function(e) {
    //         if ()
    //         if(e.ctrlKey && (e.key == "p" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
    //             alert("Please use the Print PDF button below for a better rendering on the document");
    //             e.cancelBubble = true;
    //             e.preventDefault();
    //             e.stopImmediatePropagation();
    //         }  
    //     });
    // }


    $(document).on('keydown', function(e) {
        if(e.ctrlKey && (e.key == "p" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
            if (combine){
                console.log(1)
                // window.print();
            }
            else{
                console.log(2)
                alert("Пожалуйста, заполните необходимые поля!");
                e.preventDefault();
                e.cancelBubble = true;
                e.stopImmediatePropagation();
            }
        }  
    });


    $(".print").click(function(){           //print page
        window.print();                    
    })


    function enableBtn(){                   // enabling/disabling buttons
  
        if ( $(".print-name").val() !== "" && $(".post-changer").children("option:selected").val() !== "Выберите из списка" && $(".creation_brand").css("display") === "none" ){
            $(".download, .print").attr("disabled", false). css("opacity", "1");            // enable
            combine = true;
        }
        else
        {             // if 
            if ( $(".post-changer").children("option:selected").val() === "Эксперт"  && $(".brand-changer").children("option:selected").val() !== "Выберите из списка"  ){
                $(".download, .print").attr("disabled", false). css("opacity", "1");
                combine = true;
            }
            else{
                $(".download, .print").attr("disabled", true). css("opacity", ".5");                // disable
                combine = false;
            }
        }
           

    }
    
})
   

