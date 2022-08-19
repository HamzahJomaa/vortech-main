$(document).ready(function() {
    $("body").on("click",".card.item",function(){
        if (questions[step].type === 'dynamic-form'){
            alert($(this).text().trim())
        }
        let checkActive = $(".card.item.active");
        checkActive.toggleClass("active");
        $(this).toggleClass("active");
    })

    // Update Slider Upon Input Change
    $("body").on("keyup", "#progress-price", function() {
        $("#slider-input").val($(this).val())
    })

    // Update Input Upon Slider Change
    $("body").on("input", "#slider-input", function() {
        $("#progress-price").val($(this).val())
    })

    let step = 0

    $("#back").css("visibility","hidden")
    $("#titleQuestion").text(questions[step].question)
    $(".answers.section").css("gap", "1rem")



    $(".answers.section").attr("id",questions[step].type)
    questions[step].answers.map((item, index) => {
        $(".answers.section").append(`
        <div class="card ${questions[step].type} item shadow-sm">
            <div class="card-body">
                <h4 class="w-fit">${item.value}</h4>
            </div>
        </div>`)
    })


    const updateQuestion = (direction) =>{
        if (direction == "next"){
            step++
            $("#choices").append(`
                <div>
                    <h6>${questions[step]?.answerTitle}</h6>
                    <p>${$(".card.item.active").text().trim()}</p>
                </div>
            `)
        }
        else{
            step--
            $("#choices div:last-child").remove()
        }

        $(".answers.section").attr("id",questions[step].type)


        if (step != 0)
            $("#back").css("visibility","visible")
        else
            $("#back").css("visibility","hidden")

        $("#progressBar").css("width", `${(step / questions.length) * 100}%`)
        $("#titleQuestion").text(questions[step].question)

        $(".answers.section").empty()




        if (questions[step].type === 'boxes-rectangle' || questions[step].type === 'rectangle' || questions[step].type === 'square' ){
            questions[step].answers.map((item, index) => {
                $(".answers.section").append(`
                <div class="card ${questions[step].type} item shadow-sm">
                    <div class="card-body shaddow">
                        <h4 class="w-fit">${item.value}</h4>
                    </div>
                </div>
                `)
            })
        }else if (questions[step].type === 'dynamic-form'){

            $(".answers.section").append("<div class='select-form'></div><div class='form-selected'></div>")
            questions[step].answers.map((item, index) => {
                $(".answers.section > div.select-form").append(`
                <div class="card ${questions[step].type} item shadow-sm">
                    <div class="card-body shaddow">
                        <h4 class="w-fit">${item.value}</h4>
                    </div>
                </div>
                `)
            })
            $(".answers.section > div.form-selected").append(`
            <div class="col-xl-12">
                <div class="form-input">
                    <fieldset class='float-label-field'>
                        <label for="insuranceCompanyName" >First Name</label>
                        <input id="insuranceCompanyName" type='text' name="insuranceCompanyName">
                    </fieldset>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="form-input">
                    <fieldset class='float-label-field'>
                        <label for="insuranceCompanyName" >Last Name</label>
                        <input id="insuranceCompanyName" type='text' name="insuranceCompanyName">
                    </fieldset>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="form-input">
                    <fieldset class='float-label-field'>
                        <label for="insuranceCompanyName" >Email</label>
                        <input id="insuranceCompanyName" type='text' name="insuranceCompanyName">
                    </fieldset>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="form-input">
                    <fieldset class='float-label-field'>
                        <label for="insuranceCompanyName" >Mobile</label>
                        <input id="insuranceCompanyName" type='text' name="insuranceCompanyName">
                    </fieldset>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="form-input">
                    <fieldset class='float-label-field'>
                        <label for="insuranceCompanyName" >Nationality</label>
                        <input id="insuranceCompanyName" type='text' name="insuranceCompanyName">
                    </fieldset>
                </div>
            </div>
            `)



        } else if (questions[step].type == "form" ) {
            $(".answers.section").empty().css("flex-direction", "column")
            $(".answers.section").append(`
            <div class="col-xl-12">
                <div class="form-input">
                    <fieldset class='float-label-field'>
                        <label for="insuranceCompanyName" >First Name</label>
                        <input id="insuranceCompanyName" type='text' name="insuranceCompanyName">
                    </fieldset>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="form-input">
                    <fieldset class='float-label-field'>
                        <label for="insuranceCompanyName" >Last Name</label>
                        <input id="insuranceCompanyName" type='text' name="insuranceCompanyName">
                    </fieldset>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="form-input">
                    <fieldset class='float-label-field'>
                        <label for="insuranceCompanyName" >Email</label>
                        <input id="insuranceCompanyName" type='text' name="insuranceCompanyName">
                    </fieldset>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="form-input">
                    <fieldset class='float-label-field'>
                        <label for="insuranceCompanyName" >Mobile</label>
                        <input id="insuranceCompanyName" type='text' name="insuranceCompanyName">
                    </fieldset>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="form-input">
                    <fieldset class='float-label-field'>
                        <label for="insuranceCompanyName" >Nationality</label>
                        <input id="insuranceCompanyName" type='text' name="insuranceCompanyName">
                    </fieldset>
                </div>
            </div>
            `)

        }else{
            $(".answers.section").css("flex-direction", "column")

            let progress = `<div class="card ${questions[step].type} border-0 w-100 slider-container">
                                <input id="slider-input" class="slider" type="range" min="${questions[step].answers[0].value}" max="${questions[step].answers[1].value}" value="${(questions[step].answers[1].value - questions[step].answers[0].value)/2}">
                                <span class="bar"><span class="fill"></span></span>
                            </div>`

            let label = `<div class='d-flex flex-row h-auto justify-content-between w-100'><h4>AED ${questions[step].answers[0].value}</h4><h4>AED ${questions[step].answers[1].value}</h4></div>`
            let input = `
                <div class='input-slider border-primary rounded w-100 p-2'>
                <h5>Home Value<h5>
                <input type=\"number\" class=\"form-control border-0 progress-price\" id=\"progress-price\">
                </div>
            `

            $(`.answers.section`).append(input, progress, label)
        }
    }

    $("body").on("click","#back",()=>{
        updateQuestion("back")
    })

    $("body").on("click","#next",()=>{
        updateQuestion("next")
    })


    $('body').on('focus',"input", function(event) {
        $(this).closest('.float-label-field').addClass('float').addClass('focus');
    })

    $('body').on('blur',"input", function(event) {
        $(this).closest('.float-label-field').removeClass('focus');
        if (!$(this).val()) {
        $(this).closest('.float-label-field').removeClass('float');
        }
    });

})


