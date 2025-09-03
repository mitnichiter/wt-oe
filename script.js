function searchSyllabus() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let semesters = document.querySelectorAll('.semester');

    semesters.forEach(semester => {
        let table = semester.querySelector('.course-table');
        let rows = table.getElementsByTagName('tr');
        let semesterVisible = false;

        // Start from 1 to skip the header row
        for (let i = 1; i < rows.length; i++) {
            let cells = rows[i].getElementsByTagName('td');
            let rowMatch = false;
            for (let j = 0; j < cells.length; j++) {
                let cellText = cells[j].textContent || cells[j].innerText;
                if (cellText.toUpperCase().indexOf(filter) > -1) {
                    rowMatch = true;
                    break;
                }
            }

            if (rowMatch) {
                rows[i].style.display = "";
                semesterVisible = true;
            } else {
                rows[i].style.display = "none";
            }
        }

        // Also check semester title
        let semesterTitle = semester.querySelector('h2').textContent.toUpperCase();
        if (semesterTitle.includes(filter)) {
            semesterVisible = true;
            // if semester title matches, show all rows of that semester
             for (let i = 1; i < rows.length; i++) {
                rows[i].style.display = "";
             }
        }
        
        // Hide or show the entire semester block
        if (semesterVisible) {
            semester.classList.remove('hidden');
        } else {
            semester.classList.add('hidden');
        }
    });
}