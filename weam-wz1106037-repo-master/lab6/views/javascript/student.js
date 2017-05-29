const updateTemplate = `

    {{#if studentId}}
        <h2>Update Student :</h2>
    {{/if}}
    <br>
    <form method="post" action="/api/students?_method=PUT"">
   
        <input type="hidden" id="studentId" name="studentId" value="{{studentId}}">
        <div class="form-group">
            <label for="firstname">firstName</label>
            <input type="text" class="form-control" id="firstname" name="firstname" value="{{firstname}}" required>
        </div>
          <div class="form-group">
                    <label for="lastname">lastName</label>
                    <input type="text" class="form-control" id="lastname" name="lastname" value="{{lastname}}" required>
                </div>
        <div class="form-group">
            <label for="program">Program</label>
            <input type="text" class="form-control" id="program" name="program"
        value="{{program}}" required>
        </div>


        <input type="submit" class="btn btn-primary">

        <a ref="#" rel="modal:close" style="text-align: right"> Close </a>
    </form>`

const studentFormTemplate=`{{#if studentId}}
    <h2>Update student Details</h2>

{{/if}}
<br>
<form method="post" action="/students">
    <input type="hidden" id="studentId" name="studentId" value="{{studentId}}">
    <div class="form-group">
        <label for="firstname">firstname</label>
        <input type="text" class="form-control" id="firstname" name="firstname" value="{{firstname}}" required>
    </div>
    <div class="form-group">
        <label for="lastname">lastname</label>
        <input type="text" class="form-control" id="lastname" name="lastname"
               value="{{lastname}}" required>
    </div>
    <div class="form-group">
        <label for="program">program</label>
        <select class="form-control" id="program" name="program" required>
            <option value=""></option>
            <option value="cs">cs</option>
            <option value="ce">ce</option>
         
        </select>
    </div>
    <input type="submit" class="btn btn-primary">
      <a ref="#" rel="modal:close" style="text-align: right"> Close </a>
</form>`
$(document).ready(function () {

    // $('#students-list').on('click', 'a.editButton', updateStudent)
    $('#students-list').on('click', 'a.deleteButton', deleteStudent)
})



async function updateStudent(studentId) {

    try {
        const student = await fetchStudent(studentId)
        console.log(student)

        const formTemplate = Handlebars.compile(studentFormTemplate)

        $('#student-form').html( formTemplate(student) )

        //Select the heroType in the Dropdown
        $('#program').val(student.program)
        $("#student-form").modal()


    }
    catch (err) {
        console.log(err)
    }
}


async function deleteStudent(event) {
    event.preventDefault()
    if (!confirm('Confirm delete?')) {
        return
    }
    try {
        let studentId = $(this).data('studentId')
        let url = `/api/students/${studentId}`
        $(this).closest('tr').remove()
        await fetch(url, { method: 'delete' })
    }
    catch (err) {
        console.log(err)
    }
}

async function fetchStudent(studentId) {
    let url = `/api/students/${studentId}`
    const response = await fetch(url)
    return await response.json()
}