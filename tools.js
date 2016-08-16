module.exports = {
    ProcessAttendence: function($, res, req) {
        var json = [];
        var return_result = {};
        var error = $("#MainContent_lblNoReg");
        if (error && error.text()) {
            return_result.info = error.text();
            //return;
        }
        
        $("#MainContent_pnlRegCourses > table").each(function(index, item) {
            var tableInfo = {};
            tableInfo.title = global.CleanSubject($(item).find("span").first().text().trim());

            var attendence = [];
            $(item).find('.grid-viewForAttendance > tr:nth-child(2) td').each(function(j, cell) {
                var data = $(cell).text().trim();
                if (data) attendence.push([data]);
            });

            tableInfo.attendence = attendence;

            json.push(tableInfo);
        });

        for (var data in json) {
            var percentage = json[data].attendence.pop()
            var presentHour = json[data].attendence.pop()
            var absentHour = json[data].attendence.pop()
            json[data].percentage = percentage;
            json[data].presentHour = presentHour;
            json[data].absentHour = absentHour;
        }

        var semester = {};
        $("select#MainContent_ddlSem option").each(function(index, item) {
            semester[$(item).text()] = {};
            semester[$(item).text()]['text'] = $(item).val();

            var selected = $(item).attr("selected");
            if (typeof(req.query.semester) == undefined && selected == "selected")
                semester[$(item).text()]['selected'] = true;
            else if (typeof(req.query.semester) != undefined && $(item).text() == req.query.semester)
                semester[$(item).text()]['selected'] = true;
            else
                semester[$(item).text()]['selected'] = false;
             
        });
        
        return_result.semester = semester;
        if (json.length != 0)
            return_result.result = json;
        res.send(return_result);
    },
    ProcessMarks: function($, res, req) {
        var error = $("#MainContent_lblNoReg");
        var return_result = {};
        if (error && error.text()) {
            return_result.info = error.text();
        }
        
        var tableInfo = {};
        $("#MainContent_pnlRegCourses > table").each(function(index, course_tbl) {
            var SubjectName = global.CleanSubject($(course_tbl).find('span[id^="MainContent_rptrCourses_lblCourseID"]').text());   
            var subjectMarks = [];

            $(course_tbl).find('table[id^=MainContent_rptrCourses_gvStudents]').each(function(indexJ, itemJ) {
                $(itemJ).find('tr.header th').each(function(indexK, itemK) {
                    var markTable = [];
                    $(itemK).find('td').each(function(indexL, itemL) {
                        if (indexL == 1) return;
                        markTable.push($(itemL).text());
                    });
                    if (markTable.length == 0) {
                        // Handling when only student marks are available
                        markTable.push($(itemK).text());
                        markTable.push("","","","","","");
                    }
                    subjectMarks.push(markTable);
                });
                
                $(itemJ).find('tr.normal td').each(function(indexM, itemM) {
                    if (indexM == 0) {
                        subjectMarks[indexM].push('Yours');
                    }
                    else { 
                        subjectMarks[indexM].push($(itemM).text());
                    }
                });     
            });

            tableInfo[index] = {name:SubjectName,marks:subjectMarks};   
        }); 


        var semester = {};
        $("select#MainContent_ddlSem option").each(function(index, item) {
            semester[$(item).text()] = {};
            semester[$(item).text()]['text'] = $(item).val();

            var selected = $(item).attr("selected");
            if (typeof(req.query.semester) == undefined && selected == "selected")
                semester[$(item).text()]['selected'] = true;
            else if (typeof(req.query.semester) != undefined && $(item).text() == req.query.semester)
                semester[$(item).text()]['selected'] = true;
            else
                semester[$(item).text()]['selected'] = false;             
        });
        
        
        return_result.semester = semester;
        if (tableInfo.length != 0)
            return_result.result = tableInfo;
        res.send(return_result);
    }
};
