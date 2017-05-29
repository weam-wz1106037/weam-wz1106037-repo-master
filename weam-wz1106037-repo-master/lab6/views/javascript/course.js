const courseTemplate = `
    <h4>Selected Program:</h4>
    <table class="table table-striped">
       <thead>
        <tr>
        <th>Program</th>
        <th>Code</th>
        <th>Name</th>
</tr>
</thead>
 <tbody>
{{#courses}}
<tr>
<td>{{program}}</td>
<td>{{code}}</td>
<td>{{name}}</td>
</tr>
{{/courses}}
        </tbody>
    </table>
`

async function getCourses(programCode) {
    const url = `api/courses/${programCode}`;
    const rsp = await fetch(url);
    return await rsp.json();
}
async function onProgramsChange(e) {
    console.log('onProgramsChange');
    const programCode = $(this).val();
    console.log(programCode);
    if (programCode == '') {

    } else {
        const courses = await getCourses(programCode);
        const htmlTemplete = Handlebars.compile(courseTemplate);
        const content = htmlTemplete({courses});
        console.log(content);
        $('#programDetails').html(content);
    }
}
$(document).ready(() => {
    $('#programsDD').on('change', onProgramsChange);

})