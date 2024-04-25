"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectItem = void 0;
const base_component_1 = __importDefault(require("./base-component"));
const autobind_1 = require("../decorators/autobind");
class ProjectItem extends base_component_1.default {
    get monday() {
        if (this.project.monday < 20) {
            return this.project.monday.toString() + '人日';
        }
        else {
            return (this.project.monday / 20).toString() + '人月';
        }
    }
    constructor(hostId, project) {
        super("single-project", hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    dragStartHandler(event) {
        event.dataTransfer.setData('text/plain', this.project.id);
        event.dataTransfer.effectAllowed = 'move';
    }
    dragEndHandler(_) {
        console.log("Drag終了");
    }
    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = this.monday;
        this.element.querySelector('p').textContent = this.project.description.toString();
    }
}
exports.ProjectItem = ProjectItem;
__decorate([
    autobind_1.autoBind
], ProjectItem.prototype, "dragStartHandler", null);
//# sourceMappingURL=project-item.js.map