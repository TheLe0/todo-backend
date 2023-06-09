import { AppConfig } from "../config";
import { Task } from "../domain";
import { BaseUseCase } from "./BaseUseCase";

export class CreateTaskUseCase extends BaseUseCase {

    constructor(config: AppConfig) {
        super(config);
    }

    public createTask (content: string): Task {
        return this.database.createTask(content);
    }
}