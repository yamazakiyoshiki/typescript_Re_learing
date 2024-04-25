"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.ProjectStatus = void 0;
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (exports.ProjectStatus = ProjectStatus = {}));
class Project {
    constructor(id, title, description, monday, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.monday = monday;
        this.status = status;
    }
}
exports.Project = Project;
//# sourceMappingURL=project.js.map