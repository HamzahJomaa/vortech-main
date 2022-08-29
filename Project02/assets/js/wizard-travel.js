$(document).ready(function () {

    $("body").on("click", ".card.item", function () {
        let checkActive = $(".card.item.active");
        checkActive.toggleClass("active");
        $(this).toggleClass("active");
    })

    const SearchBox = () => {
        let search = `<div class='search-box'>
                            <input type="text" class="form-control search-input" placeholder="Search">
                            <img src='../assets/images/magnifying-glass.png' />
            </div>`
        $(search).insertAfter("#titleQuestion")
    }

    const FlighSection = () => {
    }


    // Update Slider Upon Input Change
    $("body").on("keyup", "#progress-price", function () {
        $("#slider-input").val($(this).val())
    })

    // Update Input Upon Slider Change
    $("body").on("input", "#slider-input", function () {
        $("#progress-price").val($(this).val())
    })

    let step = 0

    $("#back").css("visibility", "hidden")
    $("#titleQuestion").text(questions[4].question)
    $(".answers.section").css("gap", "2rem")

    $(".answers.section").attr("id", questions[step].type)

    questions[step].answers.map((item, index) => {
        $(".answers.section").append(`
        <div class="card ${questions[step].type} item border-0">
            <div class="card-body border-0 ">
                <img src="${item.image}" class="w-100 mb-1" alt="">
                <h4 class="w-fit">${item.value}</h4>
            </div>
        </div>
        `)
    })

    $(`<div class="d-flex flex-column align-items-start" id='dropdown'>
    <select class="form-select w-75 mt-2 " aria-label="Default select example">
                <option value="" hidden disabled selected>Select the Country</option>
                <option value="01">Option 1</option>
                <option value="03">Option 2</option>
                <option value="04">Option 3</option>
            </select>
        <select class="form-select w-75 mt-2 " aria-label="Default select example">
                <option value="" hidden disabled selected>Select the City</option>
                <option value="01">Option 1</option>
                <option value="03">Option 2</option>
                <option value="04">Option 3</option>
            </select></div>
`).insertAfter(`#square-images`)


    const updateQuestion = (direction) => {


        if (direction == "next") {
            step++

            $("#choices").append(`
                <div>
                    <h6>${questions[step]?.answerTitle}</h6>
                    <p>${$(".card.item.active").text().trim()}</p>
                </div>
            `)
        } else {
            step--
            $("#choices div:last-child").remove()
        }


        if (questions[step].type != "square-images"){
            $("#dropdown").removeClass("d-flex")
            $("#dropdown").css("display","none")
        }else{
            $("#dropdown").addClass("d-flex")

        }

        if (questions[step].search) {
            SearchBox()
        } else {
            $(".search-box").remove()
        }

        if (questions[step].flight){
            FlighSection()
        }else{
            $("#flight-box").remove()
        }

        if (step != 0)
            $("#back").css("visibility", "visible")
        else
            $("#back").css("visibility", "hidden")


        $("#progressBar").css("width", `${(step / questions.length) * 100}%`)
        $("#titleQuestion").text(questions[step].question)
        $(".answers.section").empty()
        $(".answers.section").css("gap", "2rem")
        $(".answers.section").css("flex-direction", "")
        $(".answers.section").attr("id", questions[step].type)

        if (questions[step].type == "rectangle" || questions[step].type == "square" || questions[step].type == "square-small" || questions[step].type == "boxes-rectangle") {
            questions[step]?.answers.map((item, index) => {
                if (item.image && item.value) {
                    $(".answers.section").append(`
                    <div class="card ${questions[step].type} item shadow-sm ">
                        <div class="card-body">
                            <img src="../assets/images/send-icon.png" class="w-50 mb-4" alt="">
                            <h4 class="w-fit">${item.value}</h4>
                        </div>
                    </div>
                    `)
                } else if (item.image) {
                    $(".answers.section").append(`
                    <div class="card ${questions[step].type} item shadow-sm">
                        <div class="card-body">
                            <img src="../assets/images/send-icon.png" class="w-50 mb-4" alt="">
                        </div>
                    </div>
                    `)
                } else if (item.description) {
                    $(".answers.section").append(`
                        <div class="card ${questions[step].type} item shadow-sm">
                            <div class="card-body">
                                <h4 class="w-fit">${item.value}</h4>
                                <p> ${item.description} </p>
                            </div>
                        </div>`)
                } else {
                    $(".answers.section").css("gap", "1rem")
                    $(".answers.section").append(`
                        <div class="card ${questions[step].type} item shadow-sm">
                            <div class="card-body">
                                <h4 class="w-fit">${item.value}</h4>
                            </div>
                        </div>
                    `)
                }
            })
        } else if (questions[step].type == "form") {
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
        }else if (questions[step].type == "square-images") {
            questions[step].answers.map((item, index) => {
                $(".answers.section").append(`
                <div class="card ${questions[step].type} item border-0">
                    <div class="card-body border-0 ">
                        <img src="${item.image}" class="w-100 mb-1" alt="">
                        <h4 class="w-fit">${item.value}</h4>
                    </div>
                </div>
                `)
            })
        }else if (questions[step].type === 'dynamic-form'){

            $(".answers.section").append("<div class='date-form'></div><div class='form-selected'></div>")
            questions[step].answers.map((item, index) => {
                $(".answers.section > div.date-form").append(`
                <div class="card ${questions[step].type} item shadow-sm">
                    <div class="card-body shaddow">
                        <h4 class="w-fit">${item.value}</h4>
                    </div>
                </div>
                `)
            })
            $(".answers.section > div.form-selected").append(`
                <div class='row datepicker'> 
                    <div class="col-xl-6 mb-3">
                        <div class="form-group d-flex flex-column">
                            <label for="insuranceCompanyName" >Trip End Date</label>
                            <div class="input-group d-flex flex-row align-items-center">
                                <div class="input-group-addon">
                                    <img src='../assets/images/date-of-birth.png' width='30' />
                                </div>
                                <input id="datepicker01" type='text' name="insuranceCompanyName">
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 mb-3">
                        <div class="form-group d-flex flex-column">
                            <label for="insuranceCompanyName" >Trip End Date</label>
                            <div class="input-group d-flex flex-row align-items-center">
                                <div class="input-group-addon">
                                    <img src='../assets/images/date-of-birth.png' width='30' />
                                </div>
                                <input id="datepicker02" type='text' name="insuranceCompanyName">
                            </div>
                        </div>
                    </div>
                </div>
            <div class='row datepicker'>
                <div class="col-xl-12 mb-3">
                    <div class="form-group d-flex flex-column">
                        <label for="insuranceCompanyName" >Trip End Date</label>
                        <div class="input-group d-flex flex-row align-items-center">
                            <div class="input-group-addon">
                                <img src='../assets/images/date-of-birth.png' width='30' />
                            </div>
                            <input id="datepicker03" type='text' name="insuranceCompanyName">
                        </div>
                    </div>
                </div>
            </div>
            `)

            $( "#datepicker01" ).datepicker();
            $( "#datepicker02" ).datepicker();
            $("#datepicker03").datepicker({})

        } else {
            $(".answers.section").css("flex-direction", "column")

            let progress = `<div class="card ${questions[step].type} border-0 w-100 slider-container">
                                <input id="slider-input" class="slider" type="range" min="${questions[step].answers[0].value}" max="${questions[step].answers[1].value}" value="${(questions[step].answers[1].value - questions[step].answers[0].value) / 2}">
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


    $("body").on("click", "#back", () => {
        updateQuestion("back")
    })

    $("body").on("click", "#next", () => {
        updateQuestion("next")
    })


    $('body').on('focus', "input", function (event) {
        $(this).closest('.float-label-field').addClass('float').addClass('focus');
    })

    $('body').on('blur', "input", function (event) {
        $(this).closest('.float-label-field').removeClass('focus');
        if (!$(this).val()) {
            $(this).closest('.float-label-field').removeClass('float');
        }
    });

})


