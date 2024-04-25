import Cmp from "./base-component";
import * as Validation from "../util/validation";
import { autoBind as AutoBind } from "../decorators/autobind";
import { projectState } from "../state/project-state";

  // ProjectInput Class
  export class ProjectInput extends Cmp<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    mondayInputElement: HTMLInputElement;

    constructor() {
      super('project-input', 'app', true, 'user-input');

      this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
      this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
      this.mondayInputElement = this.element.querySelector('#manday') as HTMLInputElement;

      this.configure();
    }

    configure() {
      this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() {}

    private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredMonday = this.mondayInputElement.value;

      const titleValidatable: Validation.Validatable = {
        value: enteredTitle,
        required: true
      };
      const descriptionValidatable: Validation.Validatable = {
        value: enteredDescription,
        required: true,
        minLength: 5
      };
      const mondayValidatable: Validation.Validatable = {
        value: +enteredMonday,
        required: true,
        min: 1,
        max: 1000
      };
      if(
        Validation.validate1(titleValidatable) &&
        Validation.validate1(descriptionValidatable) &&
        Validation.validate1(mondayValidatable)
        ) {
          alert('入力値が正しくありません。再度お試しください。');
          return;
        } else {
          return [enteredTitle, enteredDescription, +enteredMonday];
        }
    }

    private clearInputs() {
      this.titleInputElement.value = '';
      this.descriptionInputElement.value = '';
      this.mondayInputElement.value = '';
    }

    @AutoBind
    private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUserInput();
      if(Array.isArray(userInput)) {
        const [title, desc, monday] = userInput;
        projectState.addProject(title, desc, monday);
        this.clearInputs();
      }
      console.log(this.titleInputElement.value);
    }
  }