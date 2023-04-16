import { v4 as uuidv4 } from 'uuid';
import { mockAppConfig } from "../mocks/fixtures";
import { CreateTaskUseCase, FindTaskUseCase } from '../../src/useCases';

const findTaskUseCase = new FindTaskUseCase(mockAppConfig());
const createTaskUseCase = new CreateTaskUseCase(mockAppConfig());

test('Get all tasks empty result test', async () => {

    const tasks = findTaskUseCase.GetAll();

    expect(tasks.length).toBe(0);
});

test('Get all tasks not empty result test', async () => {

    const tasks = findTaskUseCase.GetAll();

    createTaskUseCase.createTask("First Task!");
    createTaskUseCase.createTask("Second Task!");
    createTaskUseCase.createTask("Third Task!");

    expect(tasks.length).toBe(3);
});

test('find task by id not found test', async () => {

    const task = findTaskUseCase.findById(uuidv4());

    expect(task).toBe(undefined);
});

test('find task by id found test', async () => {

    const createdTask = createTaskUseCase.createTask("First Task!");

    const task = findTaskUseCase.findById(createdTask.id);

    expect(task.id).toBe(createdTask.id);
    expect(task.name).toBe(createdTask.name);
    expect(task.isClosed).toBe(createdTask.isClosed);
});