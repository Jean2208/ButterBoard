import { id, init, tx } from '@instantdb/react';

const db = init({
    appId: "516a3632-8230-43d8-ae93-ab660b8ecced",
});

export default function InstantTodos() {
    const { data, isLoading, error } = db.useQuery({
        todos: {},
    });

    if (error)
        return <p className="p-4 flex items-center text-red-600">Oops, something broke</p>;

    return (
        <div className="flex flex-col p-4 gap-2 bg-gray-800">
            <h1 className="font-bold text-2xl text-yellow-300">InsTodo</h1>
            <form
                className="flex flex-col gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const todoInput = form.elements.namedItem('todo');
                    const text = todoInput ? todoInput.value : '';

                    if (!text) return;

                    form.reset();

                    db.transact([
                        tx.todos[id()].update({
                            text,
                            completed: false,
                        }),
                    ]);
                }}
            >
                <input className="py-2 px-3 border border-gray-300 rounded bg-gray-700 text-yellow-300 placeholder-yellow-200" type="text" name="todo" placeholder="Enter a new todo" />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-yellow-300 p-2 font-bold rounded transition duration-300">
                    Add todo
                </button>
            </form>
            {isLoading ? (
                <p className="italic text-yellow-200">Loading...</p>
            ) : data?.todos.length ? (
                <ul className="space-y-2">
                    {data.todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between gap-2 bg-gray-700 p-2 rounded shadow"
                        >
                            <label className="truncate flex items-center">
                                <input
                                    type="checkbox"
                                    className="form-checkbox h-5 w-5 text-blue-600 bg-gray-600 border-gray-500"
                                    checked={todo.completed}
                                    onChange={(e) => {
                                        db.transact([
                                            tx.todos[todo.id].update({
                                                completed: e.currentTarget.checked,
                                            }),
                                        ]);
                                    }}
                                />
                                <span
                                    className={`ml-2 ${
                                        todo.completed ? 'line-through text-yellow-200' : 'text-yellow-300'
                                    }`}
                                >
                                    {todo.text}
                                </span>
                            </label>
                            <button
                                onClick={(e) => {
                                    db.transact([tx.todos[todo.id].delete()]);
                                }}
                                className="text-red-400 hover:text-red-300 font-bold text-xl"
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="italic text-yellow-200">No todos!</p>
            )}
        </div>
    );
}